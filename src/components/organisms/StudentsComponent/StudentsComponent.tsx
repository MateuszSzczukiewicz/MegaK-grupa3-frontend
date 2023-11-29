import { StudentsComponentDiv } from './StudentsComponent.styles.ts';
import {useEffect, useState} from "react";
import {StudentsPageHeader} from "../../molecules/StudentsPageHeader/StudentsPageHeader";
import {StudentsPageMain} from "../../molecules/StudentsPageMain/StudentsPageMain";

export const StudentsComponent = () => {

    const [simplified, setSimplified] = useState(true);

    const SampleData = [
        {id:123,name:"Jan",surname:"Kowalski",reservationDate:'1.11.2024',gitHubUserName:"Ami777"},
        {id:124,name:"Paweł",surname:"Nowacki",reservationDate:'29.12.2023'},
        {id:125,name:"Jakub",surname:"Wiśniewski",reservationDate:'14.1.2024'},
        {id:126,name:"Jacek",surname:"Nowak",reservationDate:'1.11.2024'},
        {id:127,name:"Patryk",surname:"Kowalczyk",reservationDate:'28.11.2023'},
        {id:128,name:"Igor",surname:"Lewandowski",reservationDate:'12.12.2023'},
        {id:129,name:"Witold",surname:"Kowalski",reservationDate:'1.11.2024'},
        {id:199,name:"Gerwazy",surname:"Nowakowski",reservationDate:'29.11.2023'},
        {id:196,name:"Bartłomiej",surname:"Wiśniewski",reservationDate:'2.12.2023'},
        {id:195,name:"Marcin",surname:"Piątek",reservationDate:'15.12.2023'},
        {id:194,name:"Filip",surname:"Strzelecki",reservationDate:'12.1.2024'},
        {id:101,name:"Lucian",surname:"Lewandowski",reservationDate:'15.12.2023'},
    ];

    const [studentsList, setStudentsList] = useState(SampleData);

    useEffect(() => {
        setStudentsList(SampleData);
    }, []);


    return (
        <StudentsComponentDiv>
            <StudentsPageHeader simplified={simplified} setSimplified={setSimplified}/>
            <StudentsPageMain simplified={simplified} studentsList={studentsList}/>
        </StudentsComponentDiv>
    )
}