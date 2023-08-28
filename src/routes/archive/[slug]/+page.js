import fs from 'fs'
export const load = ({ params }) => {
  try {
    // console.log(params + 'and' + params.slug)
    const data = fs.readFileSync(
      `public/data/retroPGF2-dataset/each_project/${params.slug}/info.json`
    )
    console.log(data)
    const fetchProjectTemp = data.toString()
    const fetchProject = JSON.parse(fetchProjectTemp)
    console.log(fetchProject)
    return { detail: fetchProject }
  } catch (err) {
    console.log(err)
  }
}
//param = object, .slug is property
