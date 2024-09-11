export interface ExploreRoundState {
  drawer: boolean
  sort: string
  view: string
  filter: boolean
}

export type CheckBoxStateType = {
  category: string[]
  applicationCategory: string[]
  receiveOP: number[]
  eligibility: string
}

export type CheckBoxStateBadgeholderType = {
  status: string
  multiplyOpenSource: string
}
