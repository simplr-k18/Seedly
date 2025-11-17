import React from 'react';
import { DwarvenForgePlan } from '../types';

interface DwarvenForgePlanProps {
  data: DwarvenForgePlan;
}

const DwarvenForgePlan: React.FC<DwarvenForgePlanProps> = ({ data }) => {
  if (!data || !data.phases) return <div className="text-red-400">Invalid data for Dwarven Forge Plan.</div>;

  const icons = [
    (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 9l4 1v9h14v-9l4-1-5.04-3.53L12 2zm0 2.24L17.76 9H6.24L12 4.24zM7 11h10v7H7v-7zm2 2v3h6v-3H9z"/></svg>,
    (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 6h-2V4h2v2zm2-2h-2V2h2v2zM6 6H4V4h2v2zM4 2v2H2V2h2zm14 16.5V14h-2v4.5c0 1.93-3.14 3.5-7 3.5s-7-1.57-7-3.5V14H2v4.5C2 21.33 6.47 24 12 24s10-2.67 10-5.5zM12 8c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/></svg>,
    (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 20.56V19H9v-3.32L4.32 9H6V7H2v2h1.5l4.67 6.68V19H6v2h5zm2-17.56V5h2v3.32l4.68 6.68H18v2h4v-2h-1.5L15.83 8.32V5h2V3h-5z"/></svg>,
    (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.63 7H6.37C5.09 7 4 8.09 4 9.37v5.25C4 15.91 5.09 17 6.37 17h11.25c1.28 0 2.37-1.09 2.37-2.37V9.37C20 8.09 18.91 7 17.63 7zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>,
    (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zM12 6l-2 4h4l-2-4zm0 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>,
  ]

  return (
    <div className="relative pl-8">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-600"></div>
      {data.phases.map((phase, index) => {
        const Icon = icons[index % icons.length];
        return (
          <div key={index} className="mb-8 relative">
            <div className="absolute -left-[26px] top-1 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center border-2 border-yellow-500">
              <Icon className="w-5 h-5 text-yellow-400" />
            </div>
            <div className="ml-8">
              <h3 className="text-xl font-bold text-yellow-400 mb-1">{index+1}. {phase.phase_name}</h3>
              <p className="text-gray-400 mb-3 italic">{phase.description}</p>
              <ul className="space-y-2">
                {phase.key_actions.map((action, actionIndex) => (
                  <li key={actionIndex} className="flex items-start">
                    <span className="text-gray-500 mr-2">&#9679;</span>
                    <span className="text-gray-300">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DwarvenForgePlan;
