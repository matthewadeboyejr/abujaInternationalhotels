export interface Director {
    id: string;
    name: string;
    title: string;
    summary: string;
    image?: string; // Optional for now, using placeholders if not provided
    fullBio: string;
    credentials: string[];
}

export const directors: Director[] = [
    {
        id: 'director-1',
        name: 'Director Name 1',
        title: 'Chairman',
        summary: 'Brief biography describing their role, credentials, and contributions to the board.',
        fullBio: 'This is the full biography of the Chairman. It will detail their extensive experience in the hospitality industry, their strategic vision for Abuja International Hotels, and their commitment to excellence. (Content to be provided)',
        credentials: [
            'Master of Business Administration (MBA)',
            'Fellow of the Institute of Hospitality',
            'Over 20 years of executive leadership'
        ]
    },
    {
        id: 'director-2',
        name: 'Director Name 2',
        title: 'Managing Director',
        summary: 'Brief biography describing their role, credentials, and contributions to the board.',
        fullBio: 'This is the full biography of the Managing Director. It will cover their operational expertise, track record of growth, and dedication to guest satisfaction. (Content to be provided)',
        credentials: [
            'Certified Hotel Administrator (CHA)',
            'Bachelor’s Degree in Hotel Management',
            'Award-winning hospitality leader'
        ]
    },
    {
        id: 'director-3',
        name: 'Director Name 3',
        title: 'Non-Executive Director',
        summary: 'Brief biography describing their role, credentials, and contributions to the board.',
        fullBio: 'This is the full biography of the Non-Executive Director. It will highlight their governance role, independent oversight, and diverse industry background. (Content to be provided)',
        credentials: [
            'Chartered Accountant',
            'Member of the Institute of Directors',
            'Expert in Corporate Governance'
        ]
    }
];
