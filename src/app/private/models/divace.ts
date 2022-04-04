import {status} from "../enums/onOffEnum";

export interface Divace{
    id?:number;
    status:status;
    name:string;
    floor:number;
    room:string
}