import React, { useState, useCallback, useEffect } from 'react';
import { FrameworkId, GeneratedPlan } from './types';
import { generatePlan, selectFramework } from './services/geminiService';
import { PersistenceService } from './services/persistence';
import HomePage from './components/HomePage';
import FrameworkDisplay from './components/FrameworkDisplay';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'result'>('home');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [plan, setPlan] = useState<GeneratedPlan | null>(null);
  const [prompt, setPrompt] = useState<string>('');

  // Load persistent state on mount
  useEffect(() => {
    const savedSession = PersistenceService.load();
    if (savedSession) {
      if (savedSession.prompt) setPrompt(savedSession.prompt);
      if (savedSession.plan) setPlan(savedSession.plan);
      if (savedSession.view) setView(savedSession.view);
    }
  }, []);

  // Save state whenever relevant data changes
  useEffect(() => {
    PersistenceService.save({ prompt, plan, view });
  }, [prompt, plan, view]);

  const handleGeneration = useCallback(async (userPrompt: string, frameworkId: FrameworkId) => {
    if (!userPrompt.trim()) {
      setError('Please describe your goal before generating a plan.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setLoadingMessage('INITIALIZING STRATEGIC CORE...');
    
    // Update prompt state
    setPrompt(userPrompt);

    try {
      const generatedData = await generatePlan(userPrompt, frameworkId);
      setPlan({ frameworkId, data: generatedData, originalPrompt: userPrompt });
      setView('result');
    } catch (e: any) {
      setError(e.message || 'An unexpected error occurred.');
      // Don't switch view on error, stay where we are (home or result)
    } finally {
      setIsLoading(false);
      setLoadingMessage('');
    }
  }, []);

  const handleAiSelection = useCallback(async (userPrompt: string) => {
    if (!userPrompt.trim()) {
      setError('Please describe your goal so the AI can choose the best framework.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setLoadingMessage('ANALYZING INTENT VECTORS...');

    setPrompt(userPrompt);

    try {
      const selectedFrameworkId = await selectFramework(userPrompt);
      await handleGeneration(userPrompt, selectedFrameworkId);
    } catch (e: any) {
      setError(e.message || 'AI selection failed. Please choose a framework manually.');
      setIsLoading(false);
    }
  }, [handleGeneration]);

  const handleUpdatePlan = async (newPrompt: string, mode: 'current' | 'auto') => {
    if (!plan && mode === 'current') return;
    
    if (mode === 'auto') {
      await handleAiSelection(newPrompt);
    } else if (plan) {
      // Update current framework
      await handleGeneration(newPrompt, plan.frameworkId);
    }
  };

  const handleStartOver = () => {
    PersistenceService.clear();
    setPrompt('');
    setPlan(null);
    setView('home');
    setError(null);
  };

  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner message={loadingMessage} />;
    }

    switch (view) {
      case 'result':
        return plan && (
          <FrameworkDisplay 
            plan={plan} 
            onStartOver={handleStartOver} 
            onUpdate={handleUpdatePlan}
            error={error}
          />
        );
      case 'home':
      default:
        return (
          <HomePage
            prompt={prompt}
            setPrompt={setPrompt}
            onGenerate={handleGeneration}
            onAiSelect={handleAiSelection}
            isLoading={isLoading}
            error={error}
            setError={setError}
          />
        );
    }
  };

  return (
    <div id="app-container" className="min-h-screen text-gray-100 p-4 sm:p-6 lg:p-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-10 fade-in">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-2 font-sans bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            SEEDLY
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <span className="h-px w-12 bg-tech-amber/50"></span>
            <p className="text-sm font-mono text-tech-amber uppercase tracking-widest">
              Strategic Intelligence Engine
            </p>
            <span className="h-px w-12 bg-tech-amber/50"></span>
          </div>
        </header>

        <main className="min-h-[60vh]">{renderContent()}</main>

        <footer className="text-center mt-16 text-gray-600 text-xs font-mono fade-in">
            <p>SYSTEM_ID: SEEDLY_CORE_V2.1</p>
            <p className="mt-1">&copy; {new Date().getFullYear()} Seedly. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;