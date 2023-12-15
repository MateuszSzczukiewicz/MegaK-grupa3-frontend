import {parse} from "papaparse";
import {useState} from "react";
import {Student} from "../../../types/HrStudentAddTypes/HrStudentsAdd.type";
import {FileStudentsTable} from "../../molecules/FileStudentsTable/FileStudentsTable";
import {AddStudentsStyle} from "./AddStudents.style";
import {PrimaryButton} from "../../atoms/PrimaryButton/PrimaryButton";
import {FileDropBoxForm} from "../../molecules/FileDropBoxForm/FileDropBoxForm";
import {PostAddStudents} from "../../../api/students/PostAddStudents";


export const AddStudents = () => {

    const [file, setFile] = useState(null);
    const [studentsData, setStudentsData] = useState<null|Student[]>(null);

    const addFileHandler = (e) => {
        const file = e.target.files[0];
        if(!file) setStudentsData(null);
        setFile(file);

        parse(file,{
            header:true,
            complete:results=>{
                const arr = results.data.map((student,i):Student => {
                    const newStudent =[];

                    for (const [,value] of Object.entries(student)) {
                        newStudent.push(value);
                    }

                    return {
                        id: i,
                        email: newStudent[0],
                        courseCompletion: Number(newStudent[1]),
                        courseEngagement: Number(newStudent[2]),
                        projectDegree: Number(newStudent[3]),
                        teamProjectDegree: Number(newStudent[4]),
                        bonusProjectUrls: newStudent[5].split(",").map(e => e.replace("\"", "").replace(" ", "")),
                    } as Student;
                })
                console.log(arr)
                setStudentsData(arr);
            }
        })
    }

    const changeData = (id:number,nameOfColumn:string,newData:string) =>{
        if(!studentsData) return null;

        const row:Student = studentsData.filter((e:Student)=>e?.id === id)[0]
        const newRowArr = Object.entries(row);

        newRowArr.forEach(e => e[0]===nameOfColumn ? e[1] = newData : null);
        const newRowObj = Object.fromEntries(newRowArr) as Student;

        const newStudentsData:Student[] = studentsData.map(student=> student.id === id ? newRowObj : student);
        setStudentsData(newStudentsData);
    }

    const fileSubmit = async () =>{
        const studentsWithoutIds = studentsData?.map(student => {
            const {id, ...withoutId} = student;
            return withoutId;
        });
        await PostAddStudents(studentsWithoutIds as Omit<Student, "id">);
    }


    return (
        <AddStudentsStyle>
            <FileDropBoxForm file={file} addFileHandler={e=>addFileHandler(e)}/>
            <FileStudentsTable studentsData={studentsData} changeData={changeData}/>
            <PrimaryButton text={"Zatwierdź i wyślij"} onClick={fileSubmit}/>
        </AddStudentsStyle>
    )
}