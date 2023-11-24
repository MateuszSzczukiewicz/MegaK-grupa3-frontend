import { StudentsHeaderStyle } from './StudentsPageHeader.style';
import { Dispatch, SetStateAction } from "react";
import {StudentsPageHeaderBtn} from "../../atoms/StudentsPageHeaderBtn/StudentsPageHeaderBtn";

type Props = {
    simplified:boolean;
    setSimplified:Dispatch<SetStateAction<boolean>>;
}

export const StudentsPageHeader = ({simplified, setSimplified}:Props) => {
    return (
        <StudentsHeaderStyle>
            <StudentsPageHeaderBtn active={simplified} context={'Dostępni kursanci'} setActive={()=>setSimplified(true)}/>
            <StudentsPageHeaderBtn active={!simplified} context={'Do rozmowy'} setActive={()=>setSimplified(false)}/>
        </StudentsHeaderStyle>
    )
}