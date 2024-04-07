import { Comment } from "./commentType";

export type InsertProjectRes = {
    msg: string;
    project: Project
} | {
    msg:string
}

export type Owner = {
    profile:string;
    username:string;
}

export interface FullProjectRes extends Project {
    owner: Owner;
    comment: Comment[];
    favOrNot: boolean;
}

export type Project = {
        _id: string;
        name: string;
        logoUrl: string;
        githubUrl: string;
        websiteUrl: string;
        description: string;
        feedback: string;
        category: string;
        favCount: number;
        commentCount: number;
        createdBy: string;
        favOrNot: boolean;
        createdAt: string; 
        updatedAt: string;
}

