// Fix: Import React to provide the JSX namespace.
import React from 'react';

export type FrameworkId = 'mandala' | 'ikigai' | 'dwarven_forge' | 'odyssey' | 'roman_road' | 'dharma_path' | 'okr_launchpad' | 'first_principles';

export interface Framework {
  id: FrameworkId;
  name: string;
  description: string;
  // Fix: Replaced JSX.Element with React.ReactElement to resolve namespace issue.
  icon: (props: { className?: string }) => React.ReactElement;
}

export interface GeneratedPlan {
  frameworkId: FrameworkId;
  data: any;
  originalPrompt: string; // Added for edit capability
}

// Specific data types for each framework for type safety
export interface MandalaPlan {
  ultimateGoal: string;
  pillars: {
    name: string;
    tasks: string[];
  }[];
}

export interface IkigaiPlan {
  love: string[];
  good_at: string[];
  world_needs: string[];
  paid_for: string[];
  ikigai_statement: string;
}

export interface DwarvenForgePlan {
  phases: {
    phase_name: string;
    description: string;
    key_actions: string[];
  }[];
}

export interface OdysseyPlan {
  the_call: string;
  allies_and_mentors: string[];
  major_trials: {
    name: string;
    strategy_to_overcome: string;
  }[];
  the_homecoming: string;
}

export interface RomanRoadPlan {
  phases: {
      phase_name: string;
      description: string;
      key_actions: string[];
  }[];
}

export interface DharmaPathPlan {
  dharma: string;
  kurukshetra: string;
  karma_yoga: string[];
  jnana: string;
}

export interface OkrLaunchpadPlan {
  objective: string;
  key_results: {
      result: string;
      metric: string;
  }[];
  initiatives: string[];
}

export interface FirstPrinciplesPlan {
  problem_statement: string;
  current_assumptions: string[];
  fundamental_truths: string[];
  new_solution: string;
}


// Fix: Add CellType enum to define possible cell types for the grid.
export enum CellType {
  GOAL,
  PILLAR,
  TASK,
  EMPTY,
}

// Fix: Add GridCellData interface to type the data for each grid cell.
export interface GridCellData {
  text: string;
  type: CellType;
}