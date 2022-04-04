import { house } from "./house";

export interface user{
    id:number;
    username:string;
    password:string;
    house?:house;
}