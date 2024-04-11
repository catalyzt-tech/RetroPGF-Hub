export interface RetroRound2 {
    name: string;
    twitter: string;
    github: string;
    website: string;
    about: string;
    question_1: string;
    question_2: string;
    team: string;
    "OP Allocation": number;
    Category: CategoryRound2;
    Vote_Recieved: number;
    "Project Name": string;
    "OP Received": number;
    "Project Profile": string;
}

export type CategoryRound2 = 'Education' | 'Tooling and utilities' | 'Infrastructure'