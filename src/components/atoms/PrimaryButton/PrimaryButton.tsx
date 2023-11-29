import {PrimaryButtonStyle} from "./PrimaryButton.style";
import {PrimaryButtonPropsType} from "../../../types/PrimaryButtonTypes/PrimaryButton.types";

export const PrimaryButton = ({text, onClick}:PrimaryButtonPropsType) =>(
    <PrimaryButtonStyle onClick={onClick}>{text}</PrimaryButtonStyle>
)