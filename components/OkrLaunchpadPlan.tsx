import React from 'react';
import { OkrLaunchpadPlan } from '../types';

interface OkrLaunchpadPlanProps {
    data: OkrLaunchpadPlan;
}

const OkrLaunchpadPlan: React.FC<OkrLaunchpadPlanProps> = ({ data }) => {
    if (!data) return <div className="text-red-400">Invalid data for OKR Launchpad.</div>;

    return (
        <div className="space-y-8">
            {/* Objective */}
            <div className="bg-gray-900/70 p-6 rounded-lg border-2 border-lime-500">
                <h2 className="text-sm font-semibold text-lime-400 uppercase tracking-wider">Objective</h2>
                <p className="mt-2 text-2xl font-bold text-gray-100">{data.objective}</p>
            </div>

            {/* Key Results */}
            <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-4">Key Results</h3>
                <div className="space-y-4">
                    {data.key_results && data.key_results.map((kr, index) => (
                        <div key={index} className="p-4 bg-gray-900 rounded-md border border-gray-700">
                            <p className="font-medium text-gray-300">{kr.result}</p>
                            <p className="mt-1 text-sm text-lime-400 font-mono bg-gray-800 inline-block px-2 py-1 rounded">
                                <span className="font-bold">Metric:</span> {kr.metric}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Initiatives */}
            <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-4">Initiatives</h3>
                 <div className="p-4 bg-gray-900 rounded-md border border-gray-700">
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {data.initiatives && data.initiatives.map((initiative, index) => (
                            <li key={index}>{initiative}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OkrLaunchpadPlan;
