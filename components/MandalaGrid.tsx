import React from 'react';
import { MandalaPlan } from '../types';

interface GridCellProps {
  text: string;
  type: 'goal' | 'pillar' | 'task' | 'empty';
}

const GridCell: React.FC<GridCellProps> = ({ text, type }) => {
  const getCellStyles = () => {
    switch (type) {
      case 'goal': return 'bg-yellow-500 text-gray-900 font-bold border-yellow-400 text-sm md:text-base';
      case 'pillar': return 'bg-gray-600 text-white font-semibold border-gray-500 text-xs md:text-sm';
      case 'task': return 'bg-gray-900/80 text-gray-300 border-gray-700/80 text-[10px] md:text-xs leading-tight';
      default: return 'bg-gray-800 border-gray-700/50';
    }
  };
  return (
    <div className={`flex items-center justify-center p-1.5 md:p-2 text-center rounded-md border transition-all duration-300 ease-in-out transform hover:scale-105 hover:z-10 ${getCellStyles()}`} title={text}>
      <span className="line-clamp-4">{text}</span>
    </div>
  );
};

interface MandalaGridProps {
  data: MandalaPlan;
}

const MandalaGrid: React.FC<MandalaGridProps> = ({ data }) => {
  const grid: { text: string; type: 'goal' | 'pillar' | 'task' | 'empty' }[] = Array(81).fill(null).map(() => ({ text: '', type: 'empty' }));
  
  if (!data || !data.pillars || data.pillars.length !== 8) {
    return <div className="text-red-400">Invalid data structure for Mandala Chart.</div>;
  }
  
  grid[4 * 9 + 4] = { text: data.ultimateGoal, type: 'goal' };
  const pillarPositions = [[1, 1], [1, 4], [1, 7], [4, 1], [4, 7], [7, 1], [7, 4], [7, 7]];

  data.pillars.forEach((pillar, pillarIndex) => {
    if (pillarIndex >= pillarPositions.length) return;
    const [r, c] = pillarPositions[pillarIndex];
    grid[r * 9 + c] = { text: pillar.name, type: 'pillar' };
    let taskIndex = 0;
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if ((dr === 0 && dc === 0) || !pillar.tasks || taskIndex >= pillar.tasks.length) continue;
        const taskR = r + dr;
        const taskC = c + dc;
        grid[taskR * 9 + taskC] = { text: pillar.tasks[taskIndex++], type: 'task' };
      }
    }
  });

  return (
    <div className="w-full aspect-square max-w-5xl mx-auto p-2 bg-gray-800 rounded-lg border border-gray-700 shadow-2xl">
      <div className="grid grid-cols-9 grid-rows-9 gap-1 h-full">
        {grid.map((cell, index) => <GridCell key={index} text={cell.text} type={cell.type} />)}
      </div>
    </div>
  );
};

export default MandalaGrid;
