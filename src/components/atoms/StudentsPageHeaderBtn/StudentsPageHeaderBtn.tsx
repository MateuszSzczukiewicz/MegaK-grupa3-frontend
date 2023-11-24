import {ActiveHeaderBtnStyle, HeaderBtnStyle} from "./StudentsPageHeaderBtn.style";

type Props = {
    active:boolean;
    context:string;
    setActive:()=>void;
}

export const StudentsPageHeaderBtn = ({ active, context,setActive }:Props) => {

    return (
        !active ?
            <HeaderBtnStyle onClick={setActive}> {context} </HeaderBtnStyle> :
            <ActiveHeaderBtnStyle onClick={setActive}> {context} </ActiveHeaderBtnStyle>
    )
}