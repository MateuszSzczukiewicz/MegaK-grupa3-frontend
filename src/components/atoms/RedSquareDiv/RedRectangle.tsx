import {RedRectangleStyle} from "./RedRectangle.style";

type Props ={
    context:string;
}

export const RedRectangle = ({context}:Props) =>{

    return(
        <RedRectangleStyle>{context}</RedRectangleStyle>
    )
}