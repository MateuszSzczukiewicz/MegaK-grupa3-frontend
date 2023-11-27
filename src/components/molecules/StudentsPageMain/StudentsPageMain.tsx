import {StudentsMainStyle, TopStyle, HrStyle} from './StudentsPageMain.style'
import {StudentRow} from "../StudentRow/StudentRow";
import {SearchBar} from "../../atoms/SearchBar/SearchBar";
import {FilterBtn} from "../../atoms/FilterBtn/FilterBtn";
import {useEffect, useState} from "react";
import {StudentsPageFooter} from "../StudentsPageFooter/StudentsPageFooter";

type Props ={
    simplified:boolean;
    studentsList:any;
}

export const StudentsPageMain = ({simplified,studentsList}:Props) =>{

    const [rowsLimit, setRowsLimit] = useState<number>(5);
    const [activePage, setActivePage] = useState<number>(0);
    const [searchBarValue, setSearchBarValue] = useState<string>('');

    const [studentsRows, setStudentsRows] = useState(studentsList);

    useEffect(() => {
        setStudentsRows(
            studentsList.filter(student => `${student.name} ${student.surname}`.includes(searchBarValue)
        ));
    }, [searchBarValue]);


    const renderRows = studentsRows.map( (student,i) => {
        const condition = (i+1 > activePage * rowsLimit && i < (activePage+1) * rowsLimit);

        return (condition) ? <StudentRow
            key={student.id}
            simplified={simplified}
            name={student.name}
            surname={student.surname}
            reservationDate={student.reservationDate}
            gitHubUserName={student.gitHubUserName}
        /> : null
    })

    return(
        <>
        <StudentsMainStyle>
            <TopStyle>
                <SearchBar setSearchBarValue={setSearchBarValue}/>
                <FilterBtn/>
            </TopStyle>

            <HrStyle/>
            {renderRows}
        </StudentsMainStyle>

        <StudentsPageFooter
            rowsLimit={rowsLimit}
            setRowsLimit={setRowsLimit}
            LengthOfStudentsList={studentsRows.length}
            activePage={activePage}
            setActivePage={setActivePage}
        />
        </>
    )
}