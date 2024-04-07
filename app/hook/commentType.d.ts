import { Owner } from "./projectRequestType";

export type CommentType = {
    commentId:string;
    content:string;
    createdBy: Owner;
    createdAt:string;
    updatedAt:string;
}

