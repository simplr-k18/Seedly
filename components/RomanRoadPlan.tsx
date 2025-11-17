import React from 'react';
import { RomanRoadPlan } from '../types';

interface RomanRoadPlanProps {
  data: RomanRoadPlan;
}

const RomanRoadPlan: React.FC<RomanRoadPlanProps> = ({ data }) => {
  if (!data || !data.phases) return <div className="text-red-400">Invalid data for Roman Road Plan.</div>;

  const icons = [
    (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 9l4 1v9h14v-9l4-1-5.04-3.53L12 2zm0 2.24L17.76 9H6.24L12 4.24zM7 11h10v7H7v-7zm2 2v3h6v-3H9z"/></svg>,
    (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 18V20H3V18H21M3 4V6H21V4H3Z M11 10H5V12H11V10M11 6H5V8H11V6M11 14H5V16H11V14Z" /></svg>,
    (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>,
    (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>,
  ]

  return (
    <div className="relative pl-8">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-600"></div>
      {data.phases.map((phase, index) => {
        const Icon = icons[index % icons.length];
        return (
          <div key={index} className="mb-8 relative">
            <div className="absolute -left-[26px] top-1 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center border-2 border-cyan-500">
              <Icon className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="ml-8">
              <h3 className="text-xl font-bold text-cyan-400 mb-1">{index+1}. {phase.phase_name}</h3>
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

export default RomanRoadPlan;
