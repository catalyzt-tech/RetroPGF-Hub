export type InsertProjectRes = {
    msg: string;
    project: Project
} | {
    msg:string
}

export type Project = {
        _id: string;
        name: string;
        logoUrl: string;
        githubUrl: string;
        websiteUrl: string;
        cryptoCategory: string;
        description: string;
        feedback: string;
        category: string;
        contact: string;
        favCount: number;
        commentCount: number;
        createdBy: string;
        favOrNot: boolean;
        createdAt: string; 
        updatedAt: string;
}