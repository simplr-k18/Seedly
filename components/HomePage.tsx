import React, { useState } from 'react';
import { FrameworkId } from '../types';
import { FRAMEWORKS } from '../frameworks';

interface HomePageProps {
  onGenerate: (prompt: string, frameworkId: FrameworkId) => void;
  onAiSelect: (prompt: string) => void;
  isLoading: boolean;
  error: string | null;
  setError: (error: string | null) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onGenerate, onAiSelect, isLoading, error, setError }) => {
  const [prompt, setPrompt] = useState('');
  const [selectedFramework, setSelectedFramework] = useState<FrameworkId | 'ai'>('mandala');

  const handleSubmit = () => {
    setError(null);
    if (selectedFramework === 'ai') {
      onAiSelect(prompt);
    } else {
      onGenerate(prompt, selectedFramework);
    }
  };

  return (
    <div className="space-y-8">
      <div className="max-w-4xl mx-auto bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-lg">
        <label htmlFor="goal-prompt" className="block text-xl font-medium text-gray-200 mb-2">
          1. Describe Your Goal or Problem
        </label>
        <p className="text-sm text-gray-400 mb-4">
          Be detailed. What is the project, the ambition, the challenge? The more context you provide, the better the plan.
        </p>
        <textarea
          id="goal-prompt"
          rows={6}
          className="w-full bg-gray-900 border border-gray-600 rounded-md p-3 text-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-shadow duration-200 placeholder-gray-500"
          placeholder="e.g., I want to launch a sustainable clothing brand for outdoor enthusiasts, focusing on community building and environmental responsibility..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={isLoading}
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-medium text-gray-200 mb-4">2. Choose Your Framework</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* AI Suggests Card */}
          <button
            onClick={() => setSelectedFramework('ai')}
            className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${selectedFramework === 'ai' ? 'bg-yellow-400/20 border-yellow-400' : 'bg-gray-800/60 border-gray-700 hover:border-yellow-500'}`}
          >
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 mr-3 text-yellow-400">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5a.75.75 0 01.75.75v3.344c1.1.132 2.138.513 3.063 1.093l2.366-2.367a.75.75 0 011.06 1.06l-2.366 2.367c.58 1.037.96 2.164 1.094 3.264H21a.75.75 0 010 1.5h-3.344c-.134 1.1-.514 2.138-1.093 3.063l2.366 2.366a.75.75 0 01-1.06 1.06l-2.367-2.366a6.72 6.72 0 01-3.263 1.094V21a.75.75 0 01-1.5 0v-3.344c-1.1-.132-2.138-.513-3.063-1.093l-2.366 2.367a.75.75 0 01-1.06-1.06l2.366-2.367a6.72 6.72 0 01-1.094-3.264H3a.75.75 0 010-1.5h3.344c.132-1.1.513-2.138 1.093-3.063L5.07 5.07a.75.75 0 011.06-1.06l2.367 2.366c1.037-.58 2.164-.96 3.263-1.094V3.25A.75.75 0 0112 2.5zM12 15a3 3 0 100-6 3 3 0 000 6z" /></svg>
              </div>
              <h3 className="font-bold text-lg text-white">AI Suggests</h3>
            </div>
            <p className="text-sm text-gray-400">Let the AI analyze your goal and choose the most effective framework for you.</p>
          </button>

          {FRAMEWORKS.map((fw) => (
            <button
              key={fw.id}
              onClick={() => setSelectedFramework(fw.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${selectedFramework === fw.id ? 'bg-blue-400/20 border-blue-400' : 'bg-gray-800/60 border-gray-700 hover:border-blue-500'}`}
            >
              <div className="flex items-center mb-2">
                 <fw.icon className="w-8 h-8 mr-3 text-blue-400" />
                <h3 className="font-bold text-lg text-white">{fw.name}</h3>
              </div>
              <p className="text-sm text-gray-400">{fw.description}</p>
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="max-w-4xl mx-auto bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg text-center">
          <p>{error}</p>
        </div>
      )}

      <div className="text-center pt-4">
        <button
          onClick={handleSubmit}
          disabled={isLoading || !prompt.trim()}
          className="px-10 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-yellow-400 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all transform hover:scale-105"
        >
          {isLoading ? 'Generating...' : 'Generate My Framework'}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
