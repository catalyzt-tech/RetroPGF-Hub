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

export interface FullProjectResNoComment extends Omit<FullProjectRes, "comment" | "createdBy"> {

}

export type Project = {
        _id: string;
        name: string;
        type:string;
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

export type RandomProject = {
    _id:string;
    name:string;
    type:string;
    logoUrl:string;
    category:string;
    description:string;
    favCount:number;
    commentCount:number;
}