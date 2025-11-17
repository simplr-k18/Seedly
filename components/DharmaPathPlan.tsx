import React from 'react';
import { DharmaPathPlan } from '../types';

interface DharmaPathPlanProps {
    data: DharmaPathPlan;
}

const Section: React.FC<{ title: string; icon: React.ReactElement; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="bg-gray-900/70 p-5 rounded-lg border border-gray-700">
        <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 text-orange-400">{icon}</div>
            <h3 className="text-xl font-bold text-orange-300">{title}</h3>
        </div>
        <div>{children}</div>
    </div>
);

const DharmaPathPlan: React.FC<DharmaPathPlanProps> = ({ data }) => {
    if (!data) return <div className="text-red-400">Invalid data for Dharma Path Plan.</div>;

    const icons = {
        dharma: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>,
        kurukshetra: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>,
        karma_yoga: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 6.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 8.5 12 8.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>,
        jnana: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9c.75 0 1.47-.09 2.17-.26.21.13.44.24.69.32.3.09.6.14.9.14 1.66 0 3-1.34 3-3 0-.75-.28-1.44-.73-1.97.53-.8.83-1.76.83-2.73 0-3.31-2.69-6-6-6zm-1 3h2v2h-2V6zm2 13.05c-.32.03-.66.05-1 .05-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7c0 .85-.18 1.65-.48 2.38-.28.69-.76 1.29-1.38 1.74-.29.21-.6.38-.94.51V19.1c0 .5-.4 1-1 1-.34 0-.67-.19-.84-.48z"/></svg>,
    };

    return (
        <div className="space-y-6">
            <Section title="Your Dharma (Your Core Duty)" icon={icons.dharma}>
                <p className="text-gray-300 italic">{data.dharma}</p>
            </Section>
             <Section title="The Field of Action (Kurukshetra)" icon={icons.kurukshetra}>
                <p className="text-gray-300">{data.kurukshetra}</p>
            </Section>
            <Section title="Action in Renunciation (Karma Yoga)" icon={icons.karma_yoga}>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {data.karma_yoga.map((action, i) => <li key={i}>{action}</li>)}
                </ul>
            </Section>
            <Section title="The Ultimate Wisdom (Jnana)" icon={icons.jnana}>
                <p className="text-gray-300 italic">{data.jnana}</p>
            </Section>
        </div>
    );
};

export default DharmaPathPlan;
