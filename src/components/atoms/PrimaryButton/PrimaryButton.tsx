import { PrimaryButtonStyles } from "./PrimaryButton.styles";
import {PrimaryButtonPropsType} from "../../../types/PrimaryButtonTypes/PrimaryButton.types";

export const PrimaryButton = ({text, onClick}:PrimaryButtonPropsType) =>(
    <PrimaryButtonStyles onClick={onClick}>{text}</PrimaryButtonStyles>
)