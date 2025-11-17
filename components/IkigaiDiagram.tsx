import React from 'react';
import { IkigaiPlan } from '../types';

interface IkigaiDiagramProps {
  data: IkigaiPlan;
}

const Circle: React.FC<{ title: string; items: string[]; color: string; }> = ({ title, items, color }) => (
    <div className="w-full md:w-1/2 p-3">
        <div className={`bg-gray-900/70 p-4 rounded-lg border-2 ${color} h-full`}>
            <h3 className={`text-xl font-bold mb-3 ${color.replace('border', 'text')}`}>{title}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
                {items && items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    </div>
);


const IkigaiDiagram: React.FC<IkigaiDiagramProps> = ({ data }) => {
    if (!data) return <div className="text-red-400">Invalid data for Ikigai Diagram.</div>;
    return (
        <div className="space-y-6">
            <div className="flex flex-wrap -m-3">
                <Circle title="What You LOVE" items={data.love} color="border-red-500" />
                <Circle title="What You Are GOOD AT" items={data.good_at} color="border-blue-500" />
                <Circle title="What The WORLD NEEDS" items={data.world_needs} color="border-green-500" />
                <Circle title="What You Can Be PAID FOR" items={data.paid_for} color="border-purple-500" />
            </div>
            <div className="text-center bg-gray-900 p-6 rounded-lg border-2 border-yellow-500">
                <h2 className="text-2xl font-bold text-yellow-400 mb-2">Your Ikigai</h2>
                <p className="text-lg text-gray-200 leading-relaxed">{data.ikigai_statement}</p>
            </div>
        </div>
    );
};

export default IkigaiDiagram;
