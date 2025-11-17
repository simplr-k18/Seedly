import React from 'react';

interface GoalInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
  isUpdate: boolean;
}

const GoalInput: React.FC<GoalInputProps> = ({ prompt, setPrompt, onGenerate, isLoading, isUpdate }) => {
  return (
    <div className="max-w-3xl mx-auto bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-lg">
      <label htmlFor="goal-prompt" className="block text-lg font-medium text-gray-300 mb-2">
        {isUpdate ? 'Describe Your Update' : 'Describe Your Goal'}
      </label>
      <p className="text-sm text-gray-500 mb-4">
        {isUpdate
          ? "How would you like to adjust or refine your framework? Be specific about the changes."
          : "Be detailed. What is your project about? What is the ultimate outcome you want to achieve?"}
      </p>
      <textarea
        id="goal-prompt"
        rows={6}
        className="w-full bg-gray-900 border border-gray-600 rounded-md p-3 text-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-shadow duration-200 placeholder-gray-500"
        placeholder={isUpdate
          ? "e.g., I want to pivot my e-commerce business to also include online workshops..."
          : "e.g., Launch a successful e-commerce business selling handmade sustainable crafts, reaching $100k in revenue in the first year..."
        }
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        disabled={isLoading}
      />
      <div className="mt-5 text-right">
        <button
          onClick={onGenerate}
          disabled={isLoading || !prompt.trim()}
          className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-yellow-400 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Generating...' : (isUpdate ? 'Update My Framework' : 'Create My Framework')}
        </button>
      </div>
    </div>
  );
};

export default GoalInput;