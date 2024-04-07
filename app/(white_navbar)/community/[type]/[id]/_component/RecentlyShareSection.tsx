import { RandomProject } from "@/app/hook/projectRequestType";
import ProjectSmallCard from "./ProjectSmallCard";
import QuestionSmallCard from "./QuestionSmallCard";


export default function RecentlyShareSection({
    recently
}: {
    recently: RandomProject[];

}) {

    return (

        <div className="max-w-[21rem] min-w-[21rem] flex flex-col gap-6 px-6 rounded-lg">
            <h6 className="text-2xl font-semibold text-gray-800">Recently Shared</h6>
            {recently.length !== 0 &&
            recently.map((item, i) => {
                if(item.type === "q") {
                    return (
                        <QuestionSmallCard
                        commentCount={item.commentCount}
                        description={item.description}
                        favCount={item.favCount}
                        id={item._id}
                        title={item.name}
                        key={i}
                        />
                        )
                    }   
                    else if(item.type === "p"){
                        return (
                        <ProjectSmallCard
                        key={i}
                            commentCount={item.commentCount}
                            description={item.description}
                            favCount={item.favCount}
                            id={item._id}
                            title={item.name}
                            category={item.category}
                            logoUrl={item.logoUrl}
                        />
                    )
                }
            })
            } 
        </div>

    )

}