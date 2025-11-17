import React from 'react';
import { FirstPrinciplesPlan } from '../types';

interface FirstPrinciplesBlueprintProps {
    data: FirstPrinciplesPlan;
}

const Section: React.FC<{ title: string; number: number; children: React.ReactNode; color: string; }> = ({ title, number, children, color }) => (
    <div>
        <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-gray-900 mr-4 ${color}`}>
                {number}
            </div>
            <h3 className="text-xl font-bold text-gray-200">{title}</h3>
        </div>
        <div className="ml-12 mt-2 pl-4 border-l-2 border-gray-700">
            {children}
        </div>
    </div>
);

const FirstPrinciplesBlueprint: React.FC<FirstPrinciplesBlueprintProps> = ({ data }) => {
    if (!data) return <div className="text-red-400">Invalid data for First Principles Blueprint.</div>;

    const ArrowDown = () => (
        <div className="ml-4 h-8 flex items-center">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
    );

    return (
        <div className="space-y-4">
            <Section number={1} title="Problem Statement" color="bg-red-400">
                <p className="text-gray-300 italic">{data.problem_statement}</p>
            </Section>
            
            <ArrowDown />

            <Section number={2} title="Current Assumptions (Conventional Wisdom)" color="bg-orange-400">
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                    {data.current_assumptions.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </Section>
            
            <ArrowDown />

            <Section number={3} title="Fundamental Truths (The Physics of the Problem)" color="bg-yellow-400">
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                     {data.fundamental_truths.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </Section>
            
            <ArrowDown />

            <Section number={4} title="New Solution (Built from the Ground Up)" color="bg-green-400">
                <p className="text-gray-200 font-semibold">{data.new_solution}</p>
            </Section>
        </div>
    );
};

export default FirstPrinciplesBlueprint;
