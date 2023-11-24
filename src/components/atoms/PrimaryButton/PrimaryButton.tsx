import {PrimaryButtonStyle} from "./PrimaryButton.style";

type Props ={
    context:string;
}

export const PrimaryButton = ({context}:Props) =>{

    return(
        <PrimaryButtonStyle>{context}</PrimaryButtonStyle>
    )
}