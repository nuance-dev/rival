import React from 'react';
import { motion } from 'framer-motion';

type LoadingStateProps = {
  /**
   * Text to display while loading
   */
  text?: string;
  /**
   * Size of the loading indicator
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Color theme to use
   */
  theme?: 'light' | 'dark' | 'primary';
  /**
   * Additional CSS class names
   */
  className?: string;
};

/**
 * Component to display a consistent loading state throughout the application
 */
export function LoadingState({
  text = 'Loading...',
  size = 'md',
  theme = 'primary',
  className = '',
}: LoadingStateProps) {
  // Map size to actual pixel values
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-10 h-10',
  };

  // Map theme to colors
  const themeMap = {
    light: 'border-white/20 border-t-white',
    dark: 'border-gray-700/20 border-t-gray-700',
    primary: 'border-gray-200/30 border-t-blue-500',
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-3 p-6 ${className}`}>
      <motion.div
        className={`rounded-full border-2 ${sizeMap[size]} ${themeMap[theme]}`}
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 1.2, 
          ease: 'linear', 
          repeat: Infinity 
        }}
      />
      {text && (
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          {text}
        </p>
      )}
    </div>
  );
}

type ErrorStateProps = {
  /**
   * Error message to display
   */
  message: string;
  /**
   * Additional details about the error
   */
  details?: string;
  /**
   * Function to retry the operation
   */
  onRetry?: () => void;
  /**
   * Additional CSS class names
   */
  className?: string;
};

/**
 * Component to display a consistent error state throughout the application
 */
export function ErrorState({
  message,
  details,
  onRetry,
  className = '',
}: ErrorStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center gap-4 p-8 text-center ${className}`}>
      <div className="rounded-full bg-red-100 p-3 dark:bg-red-900/20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <div>
        <h3 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
          {message}
        </h3>
        {details && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {details}
          </p>
        )}
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-2 rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Try again
        </button>
      )}
    </div>
  );
}

type EmptyStateProps = {
  /**
   * Title text for the empty state
   */
  title: string;
  /**
   * Description text
   */
  description?: string;
  /**
   * Optional action button text
   */
  actionText?: string;
  /**
   * Optional action button callback
   */
  onAction?: () => void;
  /**
   * Custom icon component
   */
  icon?: React.ReactNode;
  /**
   * Additional CSS class names
   */
  className?: string;
};

/**
 * Component to display a consistent empty state throughout the application
 */
export function EmptyState({
  title,
  description,
  actionText,
  onAction,
  icon,
  className = '',
}: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center gap-4 p-8 text-center ${className}`}>
      {icon || (
        <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 dark:text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
        </div>
      )}
      <div>
        <h3 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>
      {actionText && onAction && (
        <button
          onClick={onAction}
          className="mt-2 rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          {actionText}
        </button>
      )}
    </div>
  );
} 