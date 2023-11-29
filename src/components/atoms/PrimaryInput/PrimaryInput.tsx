import {PrimaryInputStyle} from "./PrimaryInput.style";
import {PrimaryInputPropsType} from "../../../types/PrimaryInputTypes/PrimaryInput.types";

export const PrimaryInput = ({type, placeholder, onChange}:PrimaryInputPropsType) => (
    <PrimaryInputStyle type={type??"text"} placeholder={placeholder} onChange={onChange}/>
)