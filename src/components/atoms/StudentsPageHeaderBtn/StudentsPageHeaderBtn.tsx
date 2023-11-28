import {ActiveHeaderBtnStyle, HeaderBtnStyle} from "./StudentsPageHeaderBtn.style";
import {StudentsPageHeaderBtnPropsType} from "../../../types/StudentsPagePropsTypes/StudentsPageProps.types";

export const StudentsPageHeaderBtn = ({ active, text, setActive }:StudentsPageHeaderBtnPropsType) => (
        !active ? <HeaderBtnStyle onClick={setActive}> {text} </HeaderBtnStyle> :
            <ActiveHeaderBtnStyle onClick={setActive}> {text} </ActiveHeaderBtnStyle>
)