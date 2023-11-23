import {StudentsMain, StudentsHeader, FilterBtn, LoupDiv, Hr, HeaderBtnsSpan, StudentsComponentDiv, SearchInput} from './StudentsComponent.styles.ts';
import {StudentBar} from "../../molecules/StudentBar/StudentBar";
import {useState} from "react";

export const StudentsComponent = () => {

    const [simplified, setSimplified] = useState(true);

    return (
        <StudentsComponentDiv>
            <StudentsHeader>
                <HeaderBtnsSpan onClick={()=>setSimplified(true)}> Dostępni kursanci </HeaderBtnsSpan>
                <HeaderBtnsSpan onClick={()=>setSimplified(false)}> Do rozmowy </HeaderBtnsSpan>
            </StudentsHeader>

            <StudentsMain>
                <LoupDiv>🔍</LoupDiv><SearchInput type="text" placeholder="Szukaj"/>
                <FilterBtn>🏴Filtrowanie</FilterBtn>

                <Hr/>
                <StudentBar simplified={simplified}/>
                {/* Students.map() ...*/}
            </StudentsMain>
        </StudentsComponentDiv>
    )
}