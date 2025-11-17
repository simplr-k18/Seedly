import React from 'react';
import { GeneratedPlan } from '../types';
import { FRAMEWORKS } from '../frameworks';
import MandalaGrid from './MandalaGrid';
import IkigaiDiagram from './IkigaiDiagram';
import DwarvenForgePlan from './DwarvenForgePlan';
import OdysseyMap from './OdysseyMap';
import RomanRoadPlan from './RomanRoadPlan';
import DharmaPathPlan from './DharmaPathPlan';
import OkrLaunchpadPlan from './OkrLaunchpadPlan';
import FirstPrinciplesBlueprint from './FirstPrinciplesBlueprint';

interface FrameworkDisplayProps {
  plan: GeneratedPlan;
  onStartOver: () => void;
}

const FrameworkDisplay: React.FC<FrameworkDisplayProps> = ({ plan, onStartOver }) => {
  const frameworkInfo = FRAMEWORKS.find(f => f.id === plan.frameworkId);

  const renderPlan = (plan: GeneratedPlan) => {
    switch (plan.frameworkId) {
      case 'mandala':
        return <MandalaGrid data={plan.data} />;
      case 'ikigai':
        return <IkigaiDiagram data={plan.data} />;
      case 'dwarven_forge':
        return <DwarvenForgePlan data={plan.data} />;
      case 'odyssey':
        return <OdysseyMap data={plan.data} />;
      case 'roman_road':
        return <RomanRoadPlan data={plan.data} />;
      case 'dharma_path':
        return <DharmaPathPlan data={plan.data} />;
      case 'okr_launchpad':
        return <OkrLaunchpadPlan data={plan.data} />;
      case 'first_principles':
        return <FirstPrinciplesBlueprint data={plan.data} />;
      default:
        // This is a type-safe way to handle all cases.
        // If a new framework is added to the type but not here, TypeScript will error.
        const exhaustiveCheck: never = plan.frameworkId;
        return <p>Unknown framework type: {exhaustiveCheck}</p>;
    }
  };

  return (
    <div className="space-y-6 fade-in">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
            {frameworkInfo && <frameworkInfo.icon className="w-10 h-10 mr-4 text-yellow-400" />}
            <h2 className="text-3xl font-bold text-gray-100">{frameworkInfo?.name || 'Your Plan'}</h2>
        </div>
        <button
          onClick={onStartOver}
          className="px-5 py-2 border border-gray-600 text-base font-medium rounded-md text-gray-300 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-yellow-500 transition-colors"
        >
          &larr; Start Over
        </button>
      </div>
      
      <div className="bg-gray-800/50 p-4 sm:p-6 rounded-xl border border-gray-700 shadow-lg">
        {renderPlan(plan)}
      </div>
    </div>
  );
};

export default FrameworkDisplay;
