import {input} from "zod";

export type PrimaryInputPropsType = {
    type:string;
    placeholder?:string;
    onChange?:(e:input<string>)=>void;
}