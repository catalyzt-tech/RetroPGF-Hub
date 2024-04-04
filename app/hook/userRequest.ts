import { makeRequest } from "./makeRequest";
import { UserData } from "../provider/globalContext";

let userUrl = process.env.NEXT_PUBLIC_USER_URL
export async function GetCurrentUser(){
    return await makeRequest<{ user: UserData; msg: string } | { msg: string } >(`/users_v1/current-user`, {
        baseURL:"http://localhost:5000",
        method:"GET",
    })
}

export async function RegisterUser(email: string, userName:string, firstName:string, lastName:string, password:string, source:string){
    return await makeRequest<{ user: UserData; msg: string } | { msg: string } >(`/users_v1/register`, {
        baseURL:"http://localhost:5000",
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

