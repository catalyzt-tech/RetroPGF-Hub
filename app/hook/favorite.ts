import { makeRequest } from "./makeRequest";
import { projectBaseUrl } from "./projectRequest";


export async function PushOrPullFav(projectId:string){
    return await makeRequest<{ opera: "pull" | "push"; msg: string } | { msg: string } >(`/fav_v1/push-pull-fav/${projectId}`, {
        baseURL: projectBaseUrl,
        method:"POST",
    })
}
