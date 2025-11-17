import React from 'react';
import { Framework } from './types';

// Fix: Replaced JSX with React.createElement for all icon components to prevent parsing errors in a .ts file.
const MandalaIcon = ({ className }: { className?: string }) => (
  React.createElement('svg', { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" },
    React.createElement('path', { d: "M5 3h4v4H5V3m10 0h4v4h-4V3M5 10h4v4H5v-4m10 0h4v4h-4v-4m-5-7h4v4h-4V3m0 7h4v4h-4v-4m-5 7h4v4H5v-4m10 0h4v4h-4v-4m-5 0h4v4h-4v-4z" })
  )
);
const IkigaiIcon = ({ className }: { className?: string }) => (
  React.createElement('svg', { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" },
      React.createElement('path', { d: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4.14C15.86,4.14 18.86,7.14 18.86,11C18.86,12.79 18.1,14.4 16.9,15.58C15.5,14.47 13.83,13.86 12,13.86C10.17,13.86 8.5,14.47 7.1,15.58C5.9,14.4 5.14,12.79 5.14,11C5.14,7.14 8.14,4.14 12,4.14M12,15.86C13.56,15.86 15,16.41 16.14,17.29C15,18.44 13.56,19.14 12,19.14C10.44,19.14 9,18.44 7.86,17.29C9,16.41 10.44,15.86 12,15.86Z" })
  )
);
const DwarvenForgeIcon = ({ className }: { className?: string }) => (
  React.createElement('svg', { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" },
    React.createElement('path', { d: "M21.2,2.7L20.1,3.8L21.2,4.8L20.1,5.9L19,4.8L18,5.9L19,6.9L18,8L16.9,6.9L15.9,8L16.9,9L15.9,10L14.8,9L13.8,10L14.8,11.1L13.8,12.1L12.7,11.1L11.7,12.1L12.7,13.2L11.7,14.2L10.6,13.2L9.6,14.2L10.6,15.3L9.6,16.3L8.5,15.3L7.5,16.3L8.5,17.4L7.5,18.4L6.4,17.4L5.4,18.4L6.4,19.5L5.4,20.5L2.7,17.8C2.7,17.8 4.3,14.4 7.5,11.2C10.7,8 14.1,6.4 14.1,6.4L21.2,2.7M15.2,12.1L16.3,13.2L12.7,16.7L11.7,15.7L15.2,12.1M8.5,3.5L7.1,2.1C6.3,1.3 5,1.3 4.2,2.1L2.1,4.2C1.3,5 1.3,6.3 2.1,7.1L3.5,8.5L8.5,3.5Z" })
  )
);
const OdysseyIcon = ({ className }: { className?: string }) => (
  React.createElement('svg', { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" },
    React.createElement('path', { d: "M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" })
  )
);
const RomanRoadIcon = ({ className }: { className?: string }) => (
  React.createElement('svg', { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" },
    React.createElement('path', { d: "M11,10H5V12H11V10M11,6H5V8H11V6M11,14H5V16H11V14M13,6V16L18.5,11L13,6M21,18V20H3V18H21M3,4V6H21V4H3Z" })
  )
);
const DharmaPathIcon = ({ className }: { className?: string }) => (
  React.createElement('svg', { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" },
    React.createElement('path', { d: "M12,2C11.5,2 11,2.05 10.5,2.15L9.5,4.22L8.54,4.5L7.2,3.33L6.5,4.04L7.67,5.38L7.39,6.5L5.32,7.5L5.5,8.54L6.67,7.83L7.92,9.17L6.5,9.5L6.5,10.5L8.5,10.11L9.17,11.33L8.09,12.5L8.5,13.5L10,12.5L10.39,14.5L9.5,15.5L10.5,16.5L11.5,15.09L12.5,16.5L13.5,15.09L14.5,16.5L15.5,15.5L14.61,14.5L15,12.5L16.5,13.5L17,12.5L15.83,11.33L16.5,10.11L18.5,10.5L18.5,9.5L17.08,9.17L18.33,7.83L18.5,8.54L20.5,7.5L19.5,6.5L17.5,7.39L17.33,5.38L18.5,4.04L17.8,3.33L16.46,4.5L15.5,4.22L14.5,2.15C14,2.05 13.5,2 13,2H12M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4Z" })
  )
);
const OkrLaunchpadIcon = ({ className }: { className?: string }) => (
  React.createElement('svg', { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" },
    React.createElement('path', { d: "M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M10,4.27C10.5,4.1 11,4 11.5,4C14.54,4 17,6.46 17,9.5C17,11.23 16.1,12.77 14.89,13.69L14.5,13.4C15.43,12.73 16,11.7 16,10.5C16,7.23 13.77,4.5 10.5,4.5C10.33,4.5 10.17,4.5 10,4.53V4.27M5.5,6C8,6 10,8 10,10.5C10,11.38 9.75,12.21 9.31,12.9L12.39,16L11,17.39L7.88,14.32C7.19,14.75 6.37,15 5.5,15C3,15 1,13 1,10.5C1,8 3,6 5.5,6M5.5,8A2.5,2.5 0 0,0 3,10.5A2.5,2.5 0 0,0 5.5,13A2.5,2.5 0 0,0 8,10.5A2.5,2.5 0 0,0 5.5,8Z" })
  )
);
const FirstPrinciplesIcon = ({ className }: { className?: string }) => (
  React.createElement('svg', { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" },
    React.createElement('path', { d: "M17,17.5C17,16.04 15.44,15.24 14.28,15.5C13.2,15.74 12.4,16.73 12.4,17.78C12.4,18.95 13.34,19.9 14.5,19.9C15.05,19.9 15.55,19.7 15.94,19.34L17,20.4L18.1,19.28L17,18.2C17,18 17,17.75 17,17.5M19,17.5C19,18.88 17.88,20 16.5,20C15.12,20 14,18.88 14,17.5C14,16.12 15.12,15 16.5,15C17.88,15 19,16.12 19,17.5M5,17.5C5,16.12 6.12,15 7.5,15C8.88,15 10,16.12 10,17.5C10,18.88 8.88,20 7.5,20C6.12,20 5,18.88 5,17.5M7.5,13C10.53,13 13,10.53 13,7.5C13,4.47 10.53,2 7.5,2C4.47,2 2,4.47 2,7.5C2,10.53 4.47,13 7.5,13M7.5,4A3.5,3.5 0 0,1 11,7.5A3.5,3.5 0 0,1 7.5,11A3.5,3.5 0 0,1 4,7.5A3.5,3.5 0 0,1 7.5,4Z" })
  )
);

export const FRAMEWORKS: Framework[] = [
  {
    id: 'mandala',
    name: 'Mandala Chart',
    description: 'For complex goals that need a holistic, 360-degree breakdown into actionable parts.',
    icon: MandalaIcon,
  },
  {
    id: 'ikigai',
    name: 'Ikigai Compass',
    description: 'For finding purpose by aligning what you love, what you are good at, and what the world needs.',
    icon: IkigaiIcon,
  },
  {
    id: 'dwarven_forge',
    name: 'The Dwarven Forge',
    description: 'For creators and builders. A step-by-step process for bringing an idea to life.',
    icon: DwarvenForgeIcon,
  },
  {
    id: 'odyssey',
    name: 'The Odyssey Map',
    description: 'For long, ambitious journeys. Focuses on the major trials and the ultimate vision.',
    icon: OdysseyIcon,
  },
  {
    id: 'roman_road',
    name: 'The Roman Road',
    description: 'For building enduring projects. Focuses on strong foundations, scalability, and long-term success.',
    icon: RomanRoadIcon,
  },
  {
    id: 'dharma_path',
    name: 'The Dharma Path',
    description: 'For navigating complex ethical choices. Focuses on right action over attachment to results.',
    icon: DharmaPathIcon,
  },
  {
    id: 'okr_launchpad',
    name: 'OKR Launchpad',
    description: 'For ambitious, measurable goals. Sets a clear objective and tracks key results to get there.',
    icon: OkrLaunchpadIcon,
  },
  {
    id: 'first_principles',
    name: 'First Principles Blueprint',
    description: 'For true innovation. Deconstructs a problem to its core truths to build a new solution.',
    icon: FirstPrinciplesIcon,
  },
];
