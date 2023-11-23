import { StudentsComponentDiv } from './StudentsComponent.styles.ts';
import {StudentBar} from "../../molecules/StudentBar/StudentBar";
import {useState} from "react";

export const StudentsComponent = () => {

    const [simplified, setSimplified] = useState(true);

    return (
        <StudentsComponentDiv>
            <button onClick={()=>setSimplified(true)}>Dostępni kursanci</button>
            <button onClick={()=>setSimplified(false)}>Do rozmowy</button>
            <hr/>
            <button>🔍</button><input type="text" placeholder="Szukaj"/>
            <button>Filtrowanie</button>
            <hr/>
            <StudentBar simplified={simplified}/>
        </StudentsComponentDiv>
    )
}