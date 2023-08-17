import Data from '../../../data/results.json'
export const load = ({ params }) => {
  console.log(params + 'and' + params.slug)
  const fetchProject = Data.find(
    (project) => project['Project Name'] === params.slug
  )

  return { detail: fetchProject }
}
//param = object, .slug is property
