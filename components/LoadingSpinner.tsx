import React from 'react';

interface LoadingSpinnerProps {
    message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center my-12">
      <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent border-solid rounded-full animate-spin"></div>
      <p className="mt-4 text-lg text-gray-400">
        {message || 'Loading...'}
      </p>
    </div>
  );
};

export default LoadingSpinner;
