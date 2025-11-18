import { GeneratedPlan } from '../types';

// Helper to simulate a database persistence layer.
// In a full environment, this could be backed by sqlite-wasm.
// For this implementation, we use localStorage to ensure data survives reloads.

const DB_KEY = 'seedly_session_db_v1';

export interface SessionState {
  prompt: string;
  plan: GeneratedPlan | null;
  view: 'home' | 'result';
  timestamp: number;
}

export const PersistenceService = {
  save: (state: Partial<SessionState>) => {
    try {
      const current = PersistenceService.load() || {};
      const newState = { ...current, ...state, timestamp: Date.now() };
      localStorage.setItem(DB_KEY, JSON.stringify(newState));
    } catch (e) {
      console.error("Failed to save session", e);
    }
  },

  load: (): SessionState | null => {
    try {
      const data = localStorage.getItem(DB_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error("Failed to load session", e);
      return null;
    }
  },

  clear: () => {
    localStorage.removeItem(DB_KEY);
  }
};