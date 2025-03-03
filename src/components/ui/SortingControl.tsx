import React from 'react';
import { Shuffle, Calendar, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

export type SortingOption = 'chaotic' | 'latest' | 'type';

interface SortingControlProps {
  currentSort: SortingOption;
  onSortChange: (sort: SortingOption) => void;
  className?: string;
}

/**
 * A component that provides controls for changing the sorting order of items.
 * Includes fun, creative labels for each sorting option.
 */
export function SortingControl({ currentSort, onSortChange, className = '' }: SortingControlProps) {
  const sortOptions: { id: SortingOption; name: string; icon: React.ReactNode; mobileName: string }[] = [
    {
      id: 'chaotic',
      name: 'Chaotic Mix',
      mobileName: 'Mix',
      icon: <Shuffle className="h-4 w-4" />,
    },
    {
      id: 'latest',
      name: 'Fresh First',
      mobileName: 'Latest',
      icon: <Calendar className="h-4 w-4" />,
    },
    {
      id: 'type',
      name: 'Type Focus',
      mobileName: 'Type',
      icon: <Layers className="h-4 w-4" />,
    },
  ];

  return (
    <div className={cn('flex items-center gap-2 w-full md:w-auto', className)}>
      <span className="text-xs text-muted-foreground mr-1 hidden md:inline">Sort by:</span>
      
      <div className="flex gap-1.5 items-center w-full md:w-auto justify-between md:justify-start">
        {sortOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onSortChange(option.id)}
            className={cn(
              'flex items-center justify-center md:justify-start gap-1.5 px-3 py-2 md:py-1.5 rounded-md text-xs',
              'transition-colors hover-lift touch-manipulation min-w-[64px] md:min-w-0 flex-1 md:flex-none',
              currentSort === option.id 
                ? 'bg-primary text-primary-foreground shimmer' 
                : 'bg-muted hover:bg-muted/80'
            )}
            title={option.name}
          >
            {option.icon}
            <span className="hidden md:inline">{option.name}</span>
            <span className="md:hidden">{option.mobileName}</span>
          </button>
        ))}
      </div>
    </div>
  );
} 