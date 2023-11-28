import { StudentsHeaderStyle } from './StudentsPageHeader.style';
import {StudentsPageHeaderBtn} from "../../atoms/StudentsPageHeaderBtn/StudentsPageHeaderBtn";
import {StudentsPageHeaderPropsType} from "../../../types/StudentsPagePropsTypes/StudentsPageProps.types";

export const StudentsPageHeader = ({ simplified, setSimplified }:StudentsPageHeaderPropsType) => (
        <StudentsHeaderStyle>
            <StudentsPageHeaderBtn active={simplified} text={'Dostępni kursanci'} setActive={()=>setSimplified(true)}/>
            <StudentsPageHeaderBtn active={!simplified} text={'Do rozmowy'} setActive={()=>setSimplified(false)}/>
        </StudentsHeaderStyle>
)