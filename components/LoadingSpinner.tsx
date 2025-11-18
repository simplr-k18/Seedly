import React from 'react';

interface LoadingSpinnerProps {
    message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center my-24">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-tech-amber border-t-transparent border-b-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-4 border-4 border-tech-cyan border-l-transparent border-r-transparent rounded-full animate-spin-slow direction-reverse"></div>
      </div>
      <div className="mt-8 flex flex-col items-center">
        <p className="text-tech-amber font-mono text-sm tracking-widest uppercase animate-pulse">
            {message || 'PROCESSING_REQUEST...'}
        </p>
        <div className="w-48 h-1 bg-gray-900 mt-4 overflow-hidden">
            <div className="h-full bg-tech-cyan animate-scan w-full origin-left"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;