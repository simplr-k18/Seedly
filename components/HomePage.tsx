import React, { useState } from 'react';
import { FrameworkId } from '../types';
import { FRAMEWORKS } from '../frameworks';

interface HomePageProps {
  prompt: string;
  setPrompt: (s: string) => void;
  onGenerate: (prompt: string, frameworkId: FrameworkId) => void;
  onAiSelect: (prompt: string) => void;
  isLoading: boolean;
  error: string | null;
  setError: (error: string | null) => void;
}

const HomePage: React.FC<HomePageProps> = ({ prompt, setPrompt, onGenerate, onAiSelect, isLoading, error, setError }) => {
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
    <div className="space-y-10 animate-fade-in">
      <div className="max-w-4xl mx-auto glass-panel p-8 rounded-none border-l-4 border-tech-amber shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 opacity-30">
            <svg className="w-16 h-16 text-tech-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <label htmlFor="goal-prompt" className="block text-xl font-bold text-gray-200 mb-3 font-mono uppercase tracking-wide">
          // 01. Initialize Target Parameters
        </label>
        <p className="text-sm text-gray-400 mb-6 font-mono">
          > Enter mission specifications. Provide detailed context for optimal strategy generation.
        </p>
        <textarea
          id="goal-prompt"
          rows={6}
          className="w-full bg-black/50 border border-gray-700 rounded-sm p-4 text-gray-200 focus:ring-1 focus:ring-tech-amber focus:border-tech-amber transition-all duration-200 placeholder-gray-700 font-mono text-sm"
          placeholder="e.g., OBJECTIVE: Launch a sustainable clothing brand for outdoor enthusiasts. CONSTRAINTS: Bootstrapped budget. KEY RESULTS: 1000 units sold in Q1."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={isLoading}
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-gray-200 mb-6 font-mono uppercase tracking-wide">
          // 02. Select Strategic Framework
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* AI Suggests Card */}
          <button
            onClick={() => setSelectedFramework('ai')}
            className={`p-5 rounded-sm border transition-all duration-200 text-left relative group ${
              selectedFramework === 'ai' 
              ? 'bg-tech-amber/10 border-tech-amber shadow-[0_0_15px_rgba(255,176,0,0.2)]' 
              : 'bg-gray-900/60 border-gray-800 hover:border-gray-600'
            }`}
          >
            <div className="flex items-center mb-3">
              <div className={`w-6 h-6 mr-3 ${selectedFramework === 'ai' ? 'text-tech-amber' : 'text-gray-500'}`}>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5a.75.75 0 01.75.75v3.344c1.1.132 2.138.513 3.063 1.093l2.366-2.367a.75.75 0 011.06 1.06l-2.366 2.367c.58 1.037.96 2.164 1.094 3.264H21a.75.75 0 010 1.5h-3.344c-.134 1.1-.514 2.138-1.093 3.063l2.366 2.366a.75.75 0 01-1.06 1.06l-2.367-2.366a6.72 6.72 0 01-3.263 1.094V21a.75.75 0 01-1.5 0v-3.344c-1.1-.132-2.138-.513-3.063-1.093l-2.366 2.367a.75.75 0 01-1.06-1.06l2.366-2.367a6.72 6.72 0 01-1.094-3.264H3a.75.75 0 010-1.5h3.344c.132-1.1.513-2.138 1.093-3.063L5.07 5.07a.75.75 0 011.06-1.06l2.367 2.366c1.037-.58 2.164-.96 3.263-1.094V3.25A.75.75 0 0112 2.5zM12 15a3 3 0 100-6 3 3 0 000 6z" /></svg>
              </div>
              <h3 className={`font-bold font-mono uppercase ${selectedFramework === 'ai' ? 'text-white' : 'text-gray-400'}`}>AI AUTO-SELECT</h3>
            </div>
            <p className="text-xs text-gray-500 font-mono leading-relaxed">
              > Let the system analyze intent vectors and determine optimal framework.
            </p>
            {selectedFramework === 'ai' && <div className="absolute top-2 right-2 w-2 h-2 bg-tech-amber rounded-full animate-pulse"></div>}
          </button>

          {FRAMEWORKS.map((fw) => (
            <button
              key={fw.id}
              onClick={() => setSelectedFramework(fw.id)}
              className={`p-5 rounded-sm border transition-all duration-200 text-left relative group ${
                selectedFramework === fw.id 
                ? 'bg-tech-cyan/10 border-tech-cyan shadow-[0_0_15px_rgba(0,240,255,0.2)]' 
                : 'bg-gray-900/60 border-gray-800 hover:border-gray-600'
              }`}
            >
              <div className="flex items-center mb-3">
                 <fw.icon className={`w-6 h-6 mr-3 ${selectedFramework === fw.id ? 'text-tech-cyan' : 'text-gray-500'}`} />
                <h3 className={`font-bold font-mono uppercase ${selectedFramework === fw.id ? 'text-white' : 'text-gray-400'}`}>{fw.name}</h3>
              </div>
              <p className="text-xs text-gray-500 font-mono leading-relaxed">{fw.description}</p>
              {selectedFramework === fw.id && <div className="absolute top-2 right-2 w-2 h-2 bg-tech-cyan rounded-full animate-pulse"></div>}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="max-w-4xl mx-auto bg-red-900/20 border border-red-500 text-red-400 px-4 py-3 rounded-none text-center font-mono text-sm flex items-center justify-center">
           <span className="mr-2">⚠️</span> {error}
        </div>
      )}

      <div className="text-center pt-8 pb-12">
        <button
          onClick={handleSubmit}
          disabled={isLoading || !prompt.trim()}
          className="group relative px-12 py-4 bg-tech-amber text-black font-bold font-mono uppercase tracking-widest overflow-hidden disabled:bg-gray-800 disabled:text-gray-600 transition-all hover:shadow-[0_0_20px_rgba(255,176,0,0.4)]"
        >
          <span className="relative z-10">{isLoading ? 'PROCESSING...' : 'EXECUTE STRATEGY'}</span>
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out"></div>
        </button>
      </div>
    </div>
  );
};

export default HomePage;