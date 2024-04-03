import ProjectSmallCard from "./ProjectSmallCard";
import QuestionSmallCard from "./QuestionSmallCard";


export default function RecentlyShareSection({

}: {

    }) {

    return (

        <div className="max-w-[21rem] min-w-[21rem] flex flex-col gap-6 p-6 rounded-lg">
            <h6 className="text-2xl font-semibold text-gray-800">Recently Shared</h6>
            <ProjectSmallCard/>
            <ProjectSmallCard/>
            <QuestionSmallCard/>
        </div>

    )

}
