import BreadCumpCommunity from "@/app/component/BreadCump/BreadCumpCommunity";
import { GetOneProject } from "@/app/hook/projectRequest";
import { cookies } from "next/headers";
import RecentlyShareSection from "./_component/RecentlyShareSection";
import MainSection from "./_component/MainSection";
import Error from "./_component/Error";


async function GetProjectData(id:string, token:string) {
    const res = await GetOneProject(id, token)
    if (res.data && 'project' in res.data && "recently" in res.data) {
        const { project, msg, recently } = res.data;
        return {project, error:"", recently}
    } else {
        return {project:null, error:res.data && res.data.msg || "failed to fetch project", recently:null}
    }
}

export default async function page({ params }: { params: { type:string, id: string } }) {


    const data = await GetProjectData(params.id, cookies().get('accessToken')?.value || "")

    if(data.error.length !== 0 || !data.project){
       return (
        <Error/>
       )
    }
    else if(params.type !== "question" && params.type !== "project"){
        return (
            <Error/>
        )
    }


    return (

    <> 
    <div className="px-1 sm:px-4  md:px-8 lg:px-20 py-6 lg:py-10 bg-gradient-to-b  from-slate-200 to-10% to-[#E2E8F000]">
            {/* BreadCump */}
            <BreadCumpCommunity
            secondText="question"
            />
            <div className="flex gap-4 md:gap-8 lg:gap-12 mt-6 lg:mt-10">
                <div className="flex-grow">
                    <MainSection
                    project={data.project}
                    type={params.type}
                    />
                </div>

               <div className="hidden lg:block">
                    <RecentlyShareSection
                    recently={data.recently}
                    />
               </div>
               
        </div>
    </div>
    </>

    )

}
