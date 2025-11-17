import { GoogleGenAI, Type } from "@google/genai";
import { FrameworkId } from '../types';
import { FRAMEWORKS } from '../frameworks';

const API_KEY = process.env.API_KEY;
if (!API_KEY) throw new Error("API_KEY environment variable not set");

const ai = new GoogleGenAI({ apiKey: API_KEY });
const model = "gemini-2.5-pro";

const frameworkInstructions: Record<FrameworkId, { systemInstruction: string; schema: any }> = {
  mandala: {
    systemInstruction: `You are an expert strategic planner. Your task is to take a user's goal and deconstruct it into a comprehensive 8-part 'Mandala Chart' framework.
1.  Identify the single, ultimate goal from the prompt.
2.  Develop 8 core pillars required to achieve this goal.
3.  For each pillar, brainstorm 8 specific, actionable sub-tasks.
4.  Structure your output as a single, valid JSON object that adheres strictly to the provided schema.`,
    schema: {
      type: Type.OBJECT,
      properties: {
        ultimateGoal: { type: Type.STRING, description: "The single, ultimate end goal." },
        pillars: {
          type: Type.ARRAY,
          description: "An array of exactly 8 core pillars.",
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING, description: "Name of the pillar." },
              tasks: {
                type: Type.ARRAY,
                description: "An array of exactly 8 actionable sub-tasks.",
                items: { type: Type.STRING },
              },
            },
            required: ["name", "tasks"],
          },
        },
      },
      required: ["ultimateGoal", "pillars"],
    },
  },
  ikigai: {
    systemInstruction: `You are a life coach specializing in the Japanese concept of 'Ikigai'. Analyze the user's prompt to find their "reason for being" related to their goal.
1.  Deconstruct their goal into four dimensions: What they love, what they are good at, what the world needs, and what they can be paid for.
2.  Populate each dimension with a list of related concepts from their prompt.
3.  Synthesize these four dimensions into a single, powerful 'Ikigai Statement'.
4.  Return a valid JSON object matching the schema.`,
    schema: {
      type: Type.OBJECT,
      properties: {
        love: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Things the user loves related to the goal." },
        good_at: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Skills the user has or can develop." },
        world_needs: { type: Type.ARRAY, items: { type: Type.STRING }, description: "How the goal serves others or the world." },
        paid_for: { type: Type.ARRAY, items: { type: Type.STRING }, description: "How the goal can be monetized." },
        ikigai_statement: { type: Type.STRING, description: "A synthesized statement defining the user's Ikigai." },
      },
      required: ["love", "good_at", "world_needs", "paid_for", "ikigai_statement"],
    },
  },
  dwarven_forge: {
    systemInstruction: `You are a master craftsman, a 'Dwarven Forge Master'. Frame the user's goal as the creation of a legendary item.
1.  Interpret the user's goal as a project with distinct phases of creation.
2.  Define the 5 phases: 'Blueprint' (planning), 'Gathering Materials' (resources), 'Forging' (the core work), 'Refinement' (testing/QA), and 'Masterwork Presentation' (launch).
3.  For each phase, provide a thematic description and a list of key actions.
4.  Return a valid JSON object matching the schema.`,
    schema: {
      type: Type.OBJECT,
      properties: {
        phases: {
          type: Type.ARRAY,
          description: "An array of exactly 5 phases of creation.",
          items: {
            type: Type.OBJECT,
            properties: {
              phase_name: { type: Type.STRING },
              description: { type: Type.STRING },
              key_actions: { type: Type.ARRAY, items: { type: Type.STRING } },
            },
            required: ["phase_name", "description", "key_actions"],
          },
        },
      },
      required: ["phases"],
    },
  },
  odyssey: {
    systemInstruction: `You are a wise storyteller, a 'Homeric Muse'. Frame the user's long-term goal as an epic journey, an 'Odyssey'.
1.  Define 'The Call': The ultimate goal or destination.
2.  Identify 'Allies and Mentors': Key people, skills, or resources for the journey.
3.  Conceptualize three 'Major Trials': Significant obstacles the user will face and a strategy to overcome each.
4.  Describe 'The Homecoming': The vision of success and what happens after the goal is achieved.
5.  Return a valid JSON object matching the schema.`,
    schema: {
      type: Type.OBJECT,
      properties: {
        the_call: { type: Type.STRING, description: "The ultimate goal of the epic journey." },
        allies_and_mentors: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Sources of support and guidance." },
        major_trials: {
          type: Type.ARRAY,
          description: "An array of 3 significant obstacles.",
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING, description: "Name of the trial (e.g., 'The Siren's Call of Distraction')." },
              strategy_to_overcome: { type: Type.STRING },
            },
            required: ["name", "strategy_to_overcome"],
          },
        },
        the_homecoming: { type: Type.STRING, description: "The vision of success after the journey." },
      },
      required: ["the_call", "allies_and_mentors", "major_trials", "the_homecoming"],
    },
  },
  roman_road: {
      systemInstruction: `You are a Roman architect and strategist. Your task is to structure the user's goal like the construction of an enduring Roman road.
1.  Define the 4 phases: 'Foundations' (planning and securing resources), 'Paving the Road' (core execution), 'Milestones' (setting measurable checkpoints), and 'Maintenance' (ensuring long-term success).
2.  For each phase, provide a thematic description and a list of key actions.
3.  Return a valid JSON object matching the schema.`,
      schema: {
          type: Type.OBJECT,
          properties: {
              phases: {
                  type: Type.ARRAY,
                  description: "An array of exactly 4 phases of construction.",
                  items: {
                      type: Type.OBJECT,
                      properties: {
                          phase_name: { type: Type.STRING },
                          description: { type: Type.STRING },
                          key_actions: { type: Type.ARRAY, items: { type: Type.STRING } },
                      },
                      required: ["phase_name", "description", "key_actions"],
                  },
              },
          },
          required: ["phases"],
      },
  },
  dharma_path: {
      systemInstruction: `You are a philosopher sage, versed in the teachings of the Bhagavad Gita. Guide the user on their 'Dharma Path' toward their goal.
1.  Identify 'Your Dharma': The user's essential duty or purpose in this goal.
2.  Define 'The Field of Action (Kurukshetra)': The challenges, environment, and stakeholders involved.
3.  Outline 'Action in Renunciation (Karma Yoga)': 3-5 key actions to be taken without attachment to the results, focusing on the quality of the action itself.
4.  Describe 'The Ultimate Wisdom (Jnana)': The insight or self-realization the user will gain by following this path.
5.  Return a valid JSON object matching the schema.`,
      schema: {
          type: Type.OBJECT,
          properties: {
              dharma: { type: Type.STRING, description: "The user's core duty or purpose." },
              kurukshetra: { type: Type.STRING, description: "The context and challenges of the goal." },
              karma_yoga: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Key actions to be performed with detachment." },
              jnana: { type: Type.STRING, description: "The wisdom gained from the journey." },
          },
          required: ["dharma", "kurukshetra", "karma_yoga", "jnana"],
      },
  },
  okr_launchpad: {
      systemInstruction: `You are a results-oriented product manager from a top tech company. Structure the user's goal using the OKR (Objectives and Key Results) framework.
1.  Define a single, ambitious, and inspiring 'Objective'. It should be qualitative.
2.  Create 3-5 'Key Results'. Each must be a specific, measurable, and verifiable outcome that signals progress toward the objective. Include a clear metric for each.
3.  List several 'Initiatives': The key projects or tasks that will be done to drive the Key Results.
4.  Return a valid JSON object matching the schema.`,
      schema: {
          type: Type.OBJECT,
          properties: {
              objective: { type: Type.STRING, description: "A single, qualitative, and inspirational goal." },
              key_results: {
                  type: Type.ARRAY,
                  description: "3-5 measurable outcomes.",
                  items: {
                      type: Type.OBJECT,
                      properties: {
                          result: { type: Type.STRING, description: "The description of the key result." },
                          metric: { type: Type.STRING, description: "The specific metric to track (e.g., 'Increase user sign-ups from 1,000 to 15,000')." },
                      },
                      required: ["result", "metric"],
                  },
              },
              initiatives: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Specific projects to achieve the KRs." },
          },
          required: ["objective", "key_results", "initiatives"],
      },
  },
  first_principles: {
      systemInstruction: `You are an innovator and engineer who solves problems using First Principles thinking. Deconstruct the user's goal to its fundamental truths and build a new solution.
1.  Clearly state the 'Problem Statement' based on the user's goal.
2.  Identify the 'Current Assumptions': The conventional wisdom or beliefs associated with this problem.
3.  Break these down into 'Fundamental Truths': The absolute, undeniable facts or scientific principles at the core of the problem.
4.  Formulate a 'New Solution from the Ground Up': A novel approach based only on the fundamental truths, ignoring the previous assumptions.
5.  Return a valid JSON object matching the schema.`,
      schema: {
          type: Type.OBJECT,
          properties: {
              problem_statement: { type: Type.STRING },
              current_assumptions: { type: Type.ARRAY, items: { type: Type.STRING } },
              fundamental_truths: { type: Type.ARRAY, items: { type: Type.STRING } },
              new_solution: { type: Type.STRING },
          },
          required: ["problem_statement", "current_assumptions", "fundamental_truths", "new_solution"],
      },
  },
};

export const selectFramework = async (userPrompt: string): Promise<FrameworkId> => {
  const systemInstruction = `You are an expert project analyst. Your task is to analyze the user's goal and determine which of the provided strategic frameworks is the most suitable.

Here are the available frameworks:
-   **mandala**: Best for complex goals that need to be broken down into many detailed, interconnected parts. Ideal for project planning and skill development.
-   **ikigai**: Best for personal, career, or purpose-driven goals. Use when the user is seeking fulfillment, and wants to align their passion, skills, and contribution to the world.
-   **dwarven_forge**: Best for goals focused on creating a tangible product, service, or piece of work. It follows a clear, step-by-step creation process.
-   **odyssey**: Best for long-term, ambitious, and challenging personal or professional journeys with unclear paths. It focuses on resilience, major obstacles, and the ultimate vision.
-   **roman_road**: Best for building enduring systems, companies, or projects. Focuses on strong foundations, scalable infrastructure, and long-term maintenance.
-   **dharma_path**: Best for goals involving complex ethical choices or personal development. Focuses on right action, duty, and process over outcome.
-   **okr_launchpad**: Best for ambitious, measurable goals in a corporate or startup environment. Focuses on clear objectives and trackable key results.
-   **first_principles**: Best for innovation or solving complex, seemingly impossible problems by breaking them down to their fundamental truths and rebuilding from there.

Respond with ONLY a JSON object containing the single key "selected_framework_id" with the ID of the best framework.`;

  const schema = {
    type: Type.OBJECT,
    properties: {
      selected_framework_id: { type: Type.STRING },
    },
    required: ["selected_framework_id"],
  };

  try {
    const response = await ai.models.generateContent({
      model,
      contents: `User's goal: "${userPrompt}"`,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: schema,
        temperature: 0.2,
      },
    });

    const json = JSON.parse(response.text);
    const frameworkId = json.selected_framework_id as FrameworkId;

    if (!FRAMEWORKS.some(f => f.id === frameworkId)) {
        throw new Error("AI selected an invalid framework.");
    }
    return frameworkId;

  } catch (error) {
    console.error("Error selecting framework:", error);
    throw new Error("The AI failed to select a framework. Please choose one manually.");
  }
};


export const generatePlan = async (userPrompt: string, frameworkId: FrameworkId): Promise<any> => {
  const frameworkConfig = frameworkInstructions[frameworkId];
  if (!frameworkConfig) {
    throw new Error(`Invalid framework ID: ${frameworkId}`);
  }

  try {
    const response = await ai.models.generateContent({
      model,
      contents: `User's goal: "${userPrompt}"`,
      config: {
        systemInstruction: frameworkConfig.systemInstruction,
        responseMimeType: "application/json",
        responseSchema: frameworkConfig.schema,
        temperature: 0.7,
      },
    });

    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error(`Error calling Gemini API for ${frameworkId}:`, error);
    throw new Error(`Failed to generate a valid plan for the ${frameworkId} framework.`);
  }
};