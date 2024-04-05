import { makeRequest } from "./makeRequest";
import { UserData } from "../provider/globalContext";

let userBaseUrl = "http://localhost:5000"


export async function GetCurrentUser(){
    return await makeRequest<{ user: UserData; msg: string } | { msg: string } >(`/users_v1/current-user`, {
        baseURL: userBaseUrl,
        method:"GET",
    })
}

export async function LogoutUser(){
    return await makeRequest<{ msg: string } >(`/users_v1/logout`, {
        baseURL: userBaseUrl,
        method:"GET",
    })
}

export async function RegisterUser(email: string, userName:string, firstName:string, lastName:string, password:string, source:string){
    return await makeRequest<{ user: UserData; msg: string } | { msg: string } >(`/users_v1/register`, {
        baseURL: userBaseUrl,
        method:"POST",
        data:{
            email:email,
            password:password,
            username:userName,
            firstname: firstName,
            lastname: lastName,
            source: source,
            profile: "https://res.cloudinary.com/ddtwsj6v7/image/upload/v1712220177/users/bbtywoswgo60jxh3ynis.png"
        }
    })
}

export async function AuthUserThirdParty(email: string, userName:string, firstName:string, lastName:string, password:string, profile:string | null, source:string){
    return await makeRequest<{ user: UserData; msg: string } | { msg: string } >(`/users_v1/auth-third-party`, {
        baseURL: userBaseUrl,
        method:"POST",
        data:{
            email:email,
            password:password,
            username:userName,
            firstname: firstName,
            lastname: lastName,
            source: source,
            profile: profile || "https://res.cloudinary.com/ddtwsj6v7/image/upload/v1712220177/users/bbtywoswgo60jxh3ynis.png"
        }
    })
}


export async function LoginUser(email: string,password:string){
    return await makeRequest<{ user: UserData; msg: string } | { msg: string } >(`/users_v1/login`, {
        baseURL: userBaseUrl,
        method:"POST",
        data:{
            email:email,
            password:password,
        }
    })
}

