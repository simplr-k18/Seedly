import React from 'react';
import { CellType } from '../types';

interface GridCellProps {
  text: string;
  type: CellType;
  isUpdating: boolean;
}

const GridCell: React.FC<GridCellProps> = ({ text, type, isUpdating }) => {
  const getCellStyles = () => {
    switch (type) {
      case CellType.GOAL:
        return 'bg-yellow-500 text-gray-900 font-bold border-yellow-400 text-sm md:text-base';
      case CellType.PILLAR:
        return 'bg-gray-600 text-white font-semibold border-gray-500 text-xs md:text-sm';
      case CellType.TASK:
        return 'bg-gray-900/80 text-gray-300 border-gray-700/80 text-[10px] md:text-xs leading-tight';
      default:
        return 'bg-gray-800 border-gray-700/50';
    }
  };

  const updatingClasses = isUpdating ? 'animate-glow' : '';

  return (
    <div
      className={`flex items-center justify-center p-1.5 md:p-2 text-center rounded-md border transition-all duration-300 ease-in-out transform hover:scale-105 hover:z-10 ${getCellStyles()} ${updatingClasses}`}
      title={text}
    >
      <span className="line-clamp-4">{text}</span>
    </div>
  );
};

export default GridCell;