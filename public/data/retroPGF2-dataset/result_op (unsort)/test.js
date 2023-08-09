import fs from 'fs'
import csv from 'csv-parser'

// const rawdata = fs.readFileSync('./results.csv', 'utf8')
// const data = rawdata.split('\n')
// console.log('result', data)

const results = []
const getdata = async () => {
  await fs
    .createReadStream('./results.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results)
      fs.writeFileSync('./results.json', JSON.stringify(results))
    })
}
getdata()
