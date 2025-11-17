import React from 'react';
import { OdysseyPlan } from '../types';

interface OdysseyMapProps {
  data: OdysseyPlan;
}

// Fix: Replaced JSX.Element with React.ReactElement to avoid namespace errors.
const Section: React.FC<{ title: string; icon: React.ReactElement; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="bg-gray-900/70 p-5 rounded-lg border border-gray-700">
        <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 text-blue-400">{icon}</div>
            <h3 className="text-xl font-bold text-blue-300">{title}</h3>
        </div>
        <div>{children}</div>
    </div>
);

const OdysseyMap: React.FC<OdysseyMapProps> = ({ data }) => {
    if (!data) return <div className="text-red-400">Invalid data for Odyssey Map.</div>;

    const icons = {
        call: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>,
        allies: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>,
        trials: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z"/></svg>,
        homecoming: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>,
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Section title="The Call to Adventure" icon={icons.call}>
                <p className="text-gray-300">{data.the_call}</p>
            </Section>
            <Section title="Allies & Mentors" icon={icons.allies}>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {data.allies_and_mentors.map((ally, i) => <li key={i}>{ally}</li>)}
                </ul>
            </Section>
            <div className="md:col-span-2">
                <Section title="The Major Trials" icon={icons.trials}>
                    <div className="space-y-4">
                        {data.major_trials.map((trial, i) => (
                            <div key={i} className="p-3 bg-gray-800 rounded-md">
                                <h4 className="font-semibold text-gray-100">{trial.name}</h4>
                                <p className="text-sm text-gray-400 mt-1"><strong>Strategy:</strong> {trial.strategy_to_overcome}</p>
                            </div>
                        ))}
                    </div>
                </Section>
            </div>
            <div className="md:col-span-2">
                <Section title="The Homecoming" icon={icons.homecoming}>
                    <p className="text-gray-300">{data.the_homecoming}</p>
                </Section>
            </div>
        </div>
    );
};

export default OdysseyMap;
