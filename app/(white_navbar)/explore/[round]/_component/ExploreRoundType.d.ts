export interface ExploreRoundState {
    selectedIndex:number;
    drawer:boolean;
    sort:string;
    view:string;
    filter:boolean;
}

export type CheckBoxStateType = {
    "category": string[]
    "receiveOP": number[];
    "ballot": string;
}