import { floor } from "./floor";

export interface house{
    id:number;
    name:string;
    address?:string;
    floor:floor[];
}