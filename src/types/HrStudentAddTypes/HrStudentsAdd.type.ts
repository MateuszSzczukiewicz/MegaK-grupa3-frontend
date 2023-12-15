import {Stars} from "../Stars.type";

export type Student = {
    id:number;
    email:string;
    courseCompletion:Stars;
    courseEngagement:Stars;
    projectDegree:Stars;
    teamProjectDegree:Stars;
    bonusProjectUrls:string[];
}

export type FileStudentsTableElementProps = {
    id:number;
    column:string;
    text:string|Stars|string[];
    type?:string;
    changeData:(id:number,nameOfColumn:string,newData:string)=>void;
}

export type FileStudentsTableProps = {
    studentsData:Student[]|null;
    changeData:(id:number,nameOfColumn:string,newData:string)=>void;
}

export type FileDropBoxFromProps = {
    file: File;
    addFileHandler: (e) => void;
}