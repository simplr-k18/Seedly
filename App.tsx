import React, { useState, useCallback } from 'react';
import { FrameworkId, GeneratedPlan } from './types';
import { generatePlan, selectFramework } from './services/geminiService';
import HomePage from './components/HomePage';
import FrameworkDisplay from './components/FrameworkDisplay';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'result'>('home');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [plan, setPlan] = useState<GeneratedPlan | null>(null);

  const handleGeneration = useCallback(async (prompt: string, frameworkId: FrameworkId) => {
    if (!prompt.trim()) {
      setError('Please describe your goal before generating a plan.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setLoadingMessage('Crafting your strategic plan...');

    try {
      const generatedData = await generatePlan(prompt, frameworkId);
      setPlan({ frameworkId, data: generatedData });
      setView('result');
    } catch (e: any) {
      setError(e.message || 'An unexpected error occurred.');
      setView('home'); // Go back to home on error
    } finally {
      setIsLoading(false);
      setLoadingMessage('');
    }
  }, []);

  const handleAiSelection = useCallback(async (prompt: string) => {
    if (!prompt.trim()) {
      setError('Please describe your goal so the AI can choose the best framework.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setLoadingMessage('AI is analyzing your goal to select the best framework...');

    try {
      const selectedFrameworkId = await selectFramework(prompt);
      await handleGeneration(prompt, selectedFrameworkId);
    } catch (e: any) {
      setError(e.message || 'AI selection failed. Please choose a framework manually.');
      setIsLoading(false); // Ensure loading is stopped if AI selection fails
    }
    // No finally block here because handleGeneration has its own
  }, [handleGeneration]);

  const handleStartOver = () => {
    setView('home');
    setPlan(null);
    setError(null);
  };

  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner message={loadingMessage} />;
    }

    switch (view) {
      case 'result':
        return plan && <FrameworkDisplay plan={plan} onStartOver={handleStartOver} />;
      case 'home':
      default:
        return (
          <HomePage
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
    <div id="app-container" className="min-h-screen text-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8 fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-wider">
            Seedly
          </h1>
          <p className="text-lg text-gray-400 mt-2 max-w-3xl mx-auto">
            Plant the seed of an idea. Grow a strategy.
          </p>
        </header>

        <main>{renderContent()}</main>

        <footer className="text-center mt-12 text-gray-500 text-sm fade-in">
            <p>&copy; {new Date().getFullYear()} Seedly. All Rights Reserved.</p>
            <p className="mt-1">AI-generated content. Please verify important information.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;