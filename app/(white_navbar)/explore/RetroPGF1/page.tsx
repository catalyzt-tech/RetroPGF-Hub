import Cpage from "./Cpage";
import BreadCumpExplore from "./_component/BreadCumpExplore";
import fs from 'fs'
import path from 'path'
import { RetroRound1 } from "./RetroType1";
import { isLetter } from "@/app/lib/utils";


export async function getJsonRound1(): Promise<RetroRound1[]> {
    const directoryPath = path.join(
        process.cwd(),
        "public/static/rpgf1.json"
    )

    const fileContents = await fs.promises.readFile(directoryPath, 'utf8')
    const jsonData: RetroRound1[] = JSON.parse(fileContents)

    // default filter by alphabet
    // baloot = vote received
    // jsonData.sort((a, b) => {
    //     return b.allocation - a.allocation
    //  });
    jsonData.sort((a, b) => {
        const nameA = (a["Project Name"] ?? '').toLowerCase();
        const nameB = (b["Project Name"] ?? '').toLowerCase();

        for (let i = 0; i < Math.min(nameA.length, nameB.length); i++) {
            const charCodeA = nameA.charCodeAt(i);
            const charCodeB = nameB.charCodeAt(i);

            // Check if both characters are letters
            const isALetter = isLetter(nameA[i]);
            const isBLetter = isLetter(nameB[i]);

            if (isALetter && isBLetter) {
                // Both characters are letters, compare them normally
                if (charCodeA !== charCodeB) {
                    return charCodeA - charCodeB;
                }
            } else if (isALetter) {
                // Character in nameA is a letter, prioritize it
                return -1;
            } else if (isBLetter) {
                // Character in nameB is a letter, prioritize it
                return 1;
            }
        }

        // If both names are equal so far, the shorter name should come first
        return nameA.length - nameB.length;
    });




    return jsonData
}


export default async function page({
}: {
   
}) {

    const round1 = await getJsonRound1()

    return (

        <>
            <div className="bg-gradient-to-b from-slate-200 to-5% sm:to-10% to-[#E2E8F000]">
                <div className="flex flex-col gap-6 mx-2 sm:mx-4 md:mx-6 lg:mx-20">
                    <div className="mt-10">
                        <BreadCumpExplore
                            secondText={"RetroPGF1"}
                        />
                    </div>

                    <div className="mt-4">
                        <h6 className="text-5xl font-semibold text-gray-800 mb-3">RetroPGF1</h6>
                    </div>

                    <Cpage
                        round1={round1}
                    />
                </div>
            </div>
        </>

    )

}
