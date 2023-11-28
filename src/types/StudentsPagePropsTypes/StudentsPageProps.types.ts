import {Dispatch, SetStateAction} from "react";
import {Stars} from "../General/General.types";

export type StudentsPageMainPropsType = {
    simplified:boolean;
    studentsList:any;
}
export type StudentsPageHeaderPropsType = {
    simplified:boolean;
    setSimplified:Dispatch<SetStateAction<boolean>>;
}
export type StudentsPageFooterPropsType = {
    rowsLimit:number;
    setRowsLimit:Dispatch<SetStateAction<number>>;
    LengthOfStudentsList:number;
    activePage:number;
    setActivePage:Dispatch<SetStateAction<number>>;
}
export type StudentRowPropsType = {
    name:string;
    surname:string;
    reservationDate:string;
    gitHubUserName?:string;
    simplified:boolean;
}
export type StudentsPageHeaderBtnPropsType = {
    active:boolean;
    text:string;
    setActive:()=>void;
}
export type StudentRowInfoPropsType = {
    name:string;
    surname:string;
    img:string|null;
    reservationDate?:string|null;
}

export type StudentRatingPropsType = {
    title:string;
    ratingValue?:Stars|string;
}