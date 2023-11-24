import {StudentsMainStyle, HrStyle} from './StudentsPageMain.style'
import {StudentRow} from "../StudentRow/StudentRow";
import {SearchBar} from "../../atoms/SearchBar/SearchBar";
import {FilterBtn} from "../../atoms/FilterBtn/FilterBtn";

type Props ={
    simplified:boolean;
}

export const StudentsPageMain = ({simplified}:Props) =>{

    return(
        <StudentsMainStyle>
            <SearchBar/>
            <FilterBtn/>

            <HrStyle/>
            <StudentRow simplified={simplified}/>
            <StudentRow simplified={simplified}/>
            <StudentRow simplified={simplified}/>
            {/* Students.map() ...*/}
        </StudentsMainStyle>
    )
}