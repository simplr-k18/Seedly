import React from 'react';
import { GridCellData } from '../types';
import GridCell from './GridCell';

interface GoalGridProps {
  gridData: GridCellData[];
  updatingIndices: number[];
}

const GoalGrid: React.FC<GoalGridProps> = ({ gridData, updatingIndices }) => {
  return (
    <div className="w-full aspect-square max-w-5xl mx-auto mt-8 p-2 bg-gray-800 rounded-lg border border-gray-700 shadow-2xl">
      <div className="grid grid-cols-9 grid-rows-9 gap-1 h-full">
        {gridData.map((cell, index) => (
          <GridCell 
            key={index} 
            text={cell.text} 
            type={cell.type}
            isUpdating={updatingIndices.includes(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GoalGrid;