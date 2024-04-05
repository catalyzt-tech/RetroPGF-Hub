import { makeRequest } from "./makeRequest";
import { UserData } from "../provider/globalContext";
import { InsertProjectRes } from "./projectRequestType";

let projectBaseUrl = "http://localhost:5001"

export async function GetCurrentUser(){
    return await makeRequest<{ user: UserData; msg: string } | { msg: string } >(`/project_v1/current-user`, {
        baseURL: projectBaseUrl,
        method:"GET",
    })
}


export async function InsertProject(
    name:string,
    logoUrl:string,
    githubUrl:string,
    websiteUrl:string,
    description:string,
    feedback:string,
    category:string,
){
    return await makeRequest<InsertProjectRes>(`/project_v1/create`, {
        baseURL: projectBaseUrl,
        method:"POST",
        data:{
            name:name,
            logoUrl:logoUrl,
            githubUrl:githubUrl,
            websiteUrl:websiteUrl,
            description:description,
            feedback:feedback,
            category:category,
        }
    })
}

  