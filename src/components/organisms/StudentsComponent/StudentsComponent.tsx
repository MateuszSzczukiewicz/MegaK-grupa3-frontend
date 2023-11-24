import { StudentsComponentDiv } from './StudentsComponent.styles.ts';
import {useState} from "react";
import {StudentsPageHeader} from "../../molecules/StudentsPageHeader/StudentsPageHeader";
import {StudentsPageMain} from "../../molecules/StudentsPageMain/StudentsPageMain";

export const StudentsComponent = () => {

    const [simplified, setSimplified] = useState(true);

    return (
        <StudentsComponentDiv>
            <StudentsPageHeader simplified={simplified} setSimplified={setSimplified}/>
            <StudentsPageMain simplified={simplified}/>
        </StudentsComponentDiv>
    )
}