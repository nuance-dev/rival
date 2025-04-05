"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ChevronDown, ChevronUp, X, Layers } from 'lucide-react';
import { SortingOption } from '@/types/sorting';
import { SortingControl } from '@/components/ui/SortingControl';
import { Category } from '@/types/category';

interface MobileFilterDropdownProps {
  categories: Category[];
  activeCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
  sortOption: SortingOption;
  onSortChange: (sort: SortingOption) => void;
}

export function MobileFilterDropdown({
  categories,
  activeCategory,
  onCategoryChange,
  sortOption,
  onSortChange
}: MobileFilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const activeCategoryObj = categories.find(cat => cat.id === activeCategory);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  // Handle selecting a category
  const handleCategorySelect = (categoryId: string | null) => {
    onCategoryChange(categoryId);
    setIsOpen(false); // Close dropdown after selection
  };
  
  // Handle sort change
  const handleSortChange = (sort: SortingOption) => {
    onSortChange(sort);
    setIsOpen(false); // Close dropdown after changing sort
  };
  
  return (
    <div className="relative w-full">
      {/* Toggle Button - Shows selected filters */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full rounded-lg border border-border bg-card/50 py-2.5 px-4 shadow-sm hover:bg-card"
      >
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">
            {activeCategory 
              ? `Filter: ${activeCategoryObj?.name || 'Category'}`
              : 'All Categories'
            }
          </span>
          {activeCategory && (
            <div className="bg-primary/10 text-primary text-xs rounded-full px-2 py-0.5">
              1
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-xs text-muted-foreground border-r pr-2 border-border">
            <Layers className="h-3 w-3" />
            <span>Sort: {sortOption.charAt(0).toUpperCase() + sortOption.slice(1)}</span>
          </div>
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>
      </button>
      
      {/* Dropdown Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 z-30 mt-2 overflow-hidden rounded-lg border border-border bg-card shadow-lg"
          >
            <div className="p-4">
              {/* Categories Section */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold">Categories</h3>
                  {activeCategory && (
                    <button 
                      className="text-xs text-muted-foreground flex items-center hover:text-primary"
                      onClick={() => handleCategorySelect(null)}
                    >
                      Clear <X className="h-3 w-3 ml-1" />
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleCategorySelect(null)}
                    className={`text-xs rounded-md py-2 px-3 text-left transition-colors ${
                      !activeCategory 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    All Categories
                  </button>
                  
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategorySelect(category.id)}
                      className={`text-xs rounded-md py-2 px-3 text-left transition-colors ${
                        category.id === activeCategory 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Divider */}
              <div className="h-px bg-border my-3" />
              
              {/* Sorting Section */}
              <div>
                <h3 className="text-sm font-semibold mb-2">Sort</h3>
                <SortingControl 
                  currentSort={sortOption} 
                  onSortChange={handleSortChange}
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Backdrop when dropdown is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/10 z-20" 
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
} 