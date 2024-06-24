import { makeRequest } from "./makeRequest";
import { UserData } from "../provider/globalContext";
import { FullProjectRes, FullProjectResNoComment, InsertProjectRes, RandomProject } from "./projectRequestType";

export let projectBaseUrl = process.env.NEXT_PUBLIC_PROJECT_BASE_URL as string
// export let projectBaseUrl = "http://localhost:5001"

export async function GetCurrentUser(){
    return await makeRequest<{ user: UserData; msg: string } | { msg: string } >(`/project_v1/current-user`, {
        baseURL: projectBaseUrl,
        method:"GET",
    })
}



export async function InsertProject(
    name:string,
    // p stand for project
    // q stand for question
    type:"q" | "p",
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
            type:type,
            logoUrl:logoUrl,
            githubUrl:githubUrl,
            websiteUrl:websiteUrl,
            description:description,
            feedback:feedback,
            category:category,
        }
    })
}

  
export async function InsertQuestion(
    name:string,
    // p stand for project
    // q stand for question
    type:"q" | "p",
    description:string,
    category:string,
){
    return await makeRequest<InsertProjectRes>(`/project_v1/create-question`, {
        baseURL: projectBaseUrl,
        method:"POST",
        data:{
            name:name,
            type:type,
            description:description,
            category:category,
        }
    })
}

export async function GetOneProject(
    id:string,
    token:string
){
    return await makeRequest<{project:FullProjectRes, msg:string, recently:RandomProject[]} | {msg:string}>(`/project_v1/project/${id}`, {
        baseURL: projectBaseUrl,
        method:"GET",
        headers: {
            Authorization: `${token}`
        }
    })
}


export async function GetProjectsWithSearch(limit:number, skip:number, sort:string, category:string, type:string, search:string, token:string) {
   if(token === ""){
    // console.log("no token")
    return await makeRequest<{project:FullProjectResNoComment[] | null, msg:string, pageCount: number, status:number} | {msg:string}>(`/project_v1/projects?limit=${limit}&skip=${skip}&sort=${sort}&category=${category}&type=${type}&search=${search}`, {
        baseURL: projectBaseUrl,
        method: "GET",
    })
}
else {
    //    console.log("sended token")
    return await makeRequest<{project:FullProjectResNoComment[] | null, msg:string, pageCount: number, status:number} | {msg:string}>(`/project_v1/projects?limit=${limit}&skip=${skip}&sort=${sort}&category=${category}&type=${type}&search=${search}`, {
        baseURL: projectBaseUrl,
        method: "GET",
        headers: {
            Authorization: `${token}`
        }
    })
   }
}


