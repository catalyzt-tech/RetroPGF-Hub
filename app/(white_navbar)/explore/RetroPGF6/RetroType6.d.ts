import { EASProjectMetadata } from '@/app/types/realtime-api-agora'
export interface WorkerResponseRound6 {
  msg: string
  type: string
  data: iRetroPGF6Project[]
  snapshotTime: string
}

// export interface AgoraResponse {
//   meta: Meta
//   data: iRetroPGF6Project[]
// }

export interface iRetroPGF6Project extends EASProjectMetadata {
  //To be change after the new data is available from backend
  projectUid: string
  impactIpfs: {
    round: string
    category:
      | 'Governance Leadership'
      | 'Governance Infra & Tooling'
      | 'Governance Analytics'
    subcategory: string
    impactStatement: {
      question: string
      answer: string
    }[]
  }
}
