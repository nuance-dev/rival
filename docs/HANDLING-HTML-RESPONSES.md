# Handling HTML Responses with JavaScript Template Literals

## The Problem

When AI models generate HTML + JavaScript content containing template literals (using backticks \` and `${expression}` syntax), TypeScript has trouble parsing these in response files because it tries to interpret them as actual template literals rather than string content.

This causes errors like:
```
Export minimalistLandingPageclaude_3_7_sonnet doesn't exist in target module
...
Cannot find name '$'. Do you need to install type definitions for jQuery?
...
Unexpected keyword or identifier.
```

## Solutions

### Solution 1: Manually Edit Problematic Files

For individual files, replace template literals in JavaScript sections with regular string concatenation:

Original problematic code:
```javascript
scanAnimation.style.top = `${scanProgress}%`;
let displayText = `In another timeline, you would have been a ${career}. ${description}`;
```

Fixed code:
```javascript
scanAnimation.style.top = scanProgress + '%';
let displayText = 'In another timeline, you would have been a ' + career + '. ' + description;
```

### Solution 2: Use the Automated Fix Script

We've created a script that automatically fixes all model response files:

```bash
# Make the script executable
chmod +x scripts/fix-template-literals.js

# Run the script
node scripts/fix-template-literals.js
```

This script:
1. Scans all model response files in `src/lib/model-responses/`
2. Identifies files with potential template literal issues
3. Sanitizes the JavaScript by converting template literals to string concatenation
4. Writes the fixed content back to the files

### Solution 3: Use Utility Functions for New Content

When adding new model responses with HTML content:

```typescript
import { sanitizeModelResponseContent } from "@/lib/utils";

// When adding new HTML content with JavaScript containing template literals
export const someModelResponse: ModelResponse = {
  // ...other properties
  content: sanitizeModelResponseContent(`
    <!DOCTYPE html>
    <html>
      <!-- HTML content -->
      <script>
        // This function would normally cause parsing issues
        function updateElement() {
          const value = 42;
          element.textContent = \`The value is \${value}\`;
        }
      </script>
    </html>
  `)
};
```

The `sanitizeModelResponseContent` function specifically looks for `<script>` tags in the HTML and converts any template literals inside them to string concatenation, which prevents TypeScript parsing errors.

## Best Practices for Adding New Model Responses

1. **Preprocessing**: Always use `sanitizeModelResponseContent` for HTML responses that include JavaScript
2. **Testing**: After adding a new model response, run `npm run build` to verify there are no parsing errors
3. **Manual Editing**: If needed, manually replace template literals with string concatenation
4. **Script Automation**: Run the fix script periodically if you're adding many new responses

## Avoiding TypeScript Parsing Issues

TypeScript treats backticks and `${}` in response content as actual code rather than string data. To avoid parsing issues:

1. **Escape template literals**: Convert \`${var}\` to regular strings with concatenation
2. **Be cautious with backticks**: Avoid using backticks for string literals in JavaScript sections of HTML
3. **Sanitize generated content**: Always sanitize content from AI models that includes JavaScript 

For more information, see the utility functions in `src/lib/utils.ts`. 