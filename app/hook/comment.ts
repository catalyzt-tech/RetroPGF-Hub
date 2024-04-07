import { CommentType } from "./commentType";
import { makeRequest } from "./makeRequest";
import { projectBaseUrl } from "./projectRequest";

export async function CreateComment(projectId:string, content:string){
    return await makeRequest<{ comment:CommentType, msg: string } | { msg: string } >(`/comment_v1/push-comment/${projectId}`, {
        baseURL: projectBaseUrl,
        method:"POST",
        data:{
            content:content
        }
    })
}


