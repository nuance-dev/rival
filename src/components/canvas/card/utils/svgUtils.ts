/**
 * Utility functions for SVG sanitization and handling
 */

/**
 * Creates a unique ID prefix for SVG elements to prevent ID conflicts
 * when multiple SVGs are rendered on the same page
 */
const generateUniqueIdPrefix = (): string => {
  return `svg-${Math.random().toString(36).substring(2, 9)}-`;
};

/**
 * Ensures all IDs in SVG content are unique by prepending a random prefix.
 * This prevents conflicts with gradient definitions, masks, etc. when
 * multiple SVGs are rendered on the same page.
 */
const ensureUniqueIds = (content: string): string => {
  // If no content or no IDs to replace, return as is
  if (!content || typeof content !== 'string' || !content.includes('id="')) {
    return content;
  }

  const idPrefix = generateUniqueIdPrefix();
  const idRegex = /id=["']([^"']*)["']/g;
  const hrefRegex = /href=["']#([^"']*)["']/g;
  const xlinkHrefRegex = /xlink:href=["']#([^"']*)["']/g;
  const urlRegex = /url\(#([^)]*)\)/g;
  
  // First, collect all the IDs to create a mapping
  const idMap: {[key: string]: string} = {};
  let match;
  
  // Find all IDs and create mapping
  while ((match = idRegex.exec(content)) !== null) {
    const originalId = match[1];
    idMap[originalId] = `${idPrefix}${originalId}`;
  }
  
  // Replace all ID declarations
  let result = content.replace(idRegex, (match, id) => {
    return `id="${idMap[id] || id}"`;
  });
  
  // Replace all href="#id" references
  result = result.replace(hrefRegex, (match, id) => {
    return `href="#${idMap[id] || id}"`;
  });
  
  // Replace all xlink:href="#id" references (crucial for gradient references)
  result = result.replace(xlinkHrefRegex, (match, id) => {
    return `xlink:href="#${idMap[id] || id}"`;
  });
  
  // Replace all url(#id) references in style attributes and presentations
  result = result.replace(urlRegex, (match, id) => {
    return `url(#${idMap[id] || id})`;
  });
  
  return result;
};

/**
 * Ensures the SVG includes the xlink namespace which is required for proper gradient functionality
 */
const ensureXlinkNamespace = (content: string): string => {
  if (!content.includes('xmlns:xlink=')) {
    return content.replace(/<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
  }
  return content;
};

/**
 * Sanitizes SVG content by removing CSS-style comments, HTML comments,
 * normalizing whitespace, and fixing various SVG path issues.
 */
export const sanitizeSvgContent = (content: string): string => {
  // Return empty string if content is not provided
  if (!content || typeof content !== 'string') {
    return '';
  }

  try {
    // Remove CSS-style comments from SVG content
    let sanitized = content
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove CSS-style comments
      .replace(/<!--[\s\S]*?-->/g, '')  // Remove HTML comments
      .replace(/\s+/g, ' ')             // Normalize whitespace
      .trim();
    
    // Ensure SVG has proper namespace
    if (!sanitized.includes('xmlns=')) {
      sanitized = sanitized.replace(/<svg/i, '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    
    // Ensure SVG has xlink namespace for proper gradient references
    sanitized = ensureXlinkNamespace(sanitized);
    
    // Ensure width and height are set to 100% to fill container
    if (!sanitized.includes('width=')) {
      sanitized = sanitized.replace(/<svg/, '<svg width="100%"');
    } else {
      sanitized = sanitized.replace(/width=["']([^"']*)["']/g, 'width="100%"');
    }
    
    if (!sanitized.includes('height=')) {
      sanitized = sanitized.replace(/<svg/, '<svg height="100%"');
    } else {
      sanitized = sanitized.replace(/height=["']([^"']*)["']/g, 'height="100%"');
    }
    
    // Add viewBox if missing
    if (!sanitized.includes('viewBox') && !sanitized.includes('viewbox')) {
      // Extract width and height if available
      const widthMatch = sanitized.match(/width=["']([^"']*)["']/);
      const heightMatch = sanitized.match(/height=["']([^"']*)["']/);
      
      if (widthMatch && heightMatch) {
        const width = parseFloat(widthMatch[1]) || 100;
        const height = parseFloat(heightMatch[1]) || 100;
        sanitized = sanitized.replace(/<svg/, `<svg viewBox="0 0 ${width} ${height}"`);
      } else {
        // Default viewBox
        sanitized = sanitized.replace(/<svg/, '<svg viewBox="0 0 100 100"');
      }
    }
    
    // Restore a minimal and safer version of the path data cleaning 
    sanitized = sanitized.replace(/d=["']([^"']*)["']/g, (match, pathData) => {
      try {
        // Only do essential path data cleaning to fix common issues
        let cleanPathData = pathData;
        
        // Remove comments from path data
        cleanPathData = cleanPathData
          .replace(/\/\*[\s\S]*?\*\//g, '')  // Remove CSS comments
          .replace(/\/\/.*$/gm, '');          // Remove single-line comments
        
        // Fix trailing commas which can cause parse errors
        cleanPathData = cleanPathData.replace(/,\s*([A-Za-z])/g, ' $1');
        
        // Ensure minimum cleaning but avoid overprocessing
        cleanPathData = cleanPathData.trim();
        
        return `d="${cleanPathData}"`;
      } catch (pathError) {
        console.error('Error cleaning SVG path data:', pathError);
        // Return the original path data instead of breaking it
        return match;
      }
    });
    
    // Fix gradient definitions to ensure proper rendering
    sanitized = sanitized.replace(/<(linearGradient|radialGradient)([^>]*)>/g, (match, gradientType, attributes) => {
      // Ensure gradientUnits attribute is present for consistent gradient rendering
      if (!attributes.includes('gradientUnits=')) {
        attributes += ' gradientUnits="objectBoundingBox"';
      }
      
      // Handle spreadMethod for consistent gradient spread behavior
      if (!attributes.includes('spreadMethod=')) {
        attributes += ' spreadMethod="pad"';
      }
      
      return `<${gradientType}${attributes}>`;
    });
    
    // Fix stop elements in gradients to ensure proper color format
    sanitized = sanitized.replace(/<stop([^>]*)>/g, (match, attributes) => {
      let attrStr = attributes;
      
      // Ensure stop-opacity is present if missing
      if (!attrStr.includes('stop-opacity') && !attrStr.includes('style=')) {
        attrStr += ' stop-opacity="1"';
      }
      
      // Fix stop-color format when it's missing or malformed
      if (!attrStr.includes('stop-color')) {
        attrStr += ' stop-color="#000000"';
      }
      
      return `<stop${attrStr}>`;
    });
    
    // Minimal transform cleaning - only handle empty transforms
    sanitized = sanitized.replace(/transform=["']([^"']*)["']/g, (match, transform) => {
      if (!transform.trim()) {
        return ''; // Remove empty transform attributes
      }
      return match; // Keep valid transforms intact
    });
    
    // Ensure all IDs are unique to prevent conflicts with gradient definitions, masks, etc.
    sanitized = ensureUniqueIds(sanitized);
    
    // Add safety wrapper
    return `<div data-sanitized-svg="true">${sanitized}</div>`;
  } catch (error) {
    console.error('Error sanitizing SVG content:', error);
    return '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100"><text x="10" y="50" font-size="10">Error rendering SVG</text></svg>';
  }
};

/**
 * Checks if the provided content is a valid SVG
 */
export const isValidSvg = (content: string): boolean => {
  if (!content || typeof content !== 'string') {
    return false;
  }
  
  // Basic check - can be enhanced with more robust validation if needed
  return content.trim().startsWith('<svg') && content.includes('</svg>');
};

/**
 * Sanitizes SVG content specifically for model-generated SVGs, which may not fully conform to standards.
 * This applies a more lenient cleaning approach while still maintaining security.
 */
export const sanitizeModelGeneratedSvg = (content: string): string => {
  // Return empty string if content is not provided
  if (!content || typeof content !== 'string') {
    return '';
  }

  try {
    // Do minimal cleanup for model-generated SVG
    let sanitized = content
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove CSS-style comments
      .replace(/<!--[\s\S]*?-->/g, '')  // Remove HTML comments
      .trim();
    
    // Ensure SVG has proper namespace
    if (!sanitized.includes('xmlns=')) {
      sanitized = sanitized.replace(/<svg/i, '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    
    // Ensure SVG has xlink namespace if it has xlink references
    if (sanitized.includes('xlink:href') && !sanitized.includes('xmlns:xlink=')) {
      sanitized = sanitized.replace(/<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
    }
    
    // Ensure all IDs are unique to prevent conflicts with gradient definitions, masks, etc.
    sanitized = ensureUniqueIds(sanitized);
    
    // Add safety wrapper that won't interfere with SVG layout
    return `<div data-sanitized-svg="true" style="width:100%; height:100%">${sanitized}</div>`;
  } catch (error) {
    console.error('Error sanitizing model-generated SVG content:', error);
    return '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100"><text x="10" y="50" font-size="10">Error rendering SVG</text></svg>';
  }
}; 