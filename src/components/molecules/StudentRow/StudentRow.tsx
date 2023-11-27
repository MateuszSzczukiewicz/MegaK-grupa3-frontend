import {ArrowStyle, StudentRowStyle, ButtonsStyle} from './StudentRow.styles.ts';
import {PrimaryButton} from "../../atoms/PrimaryButton/PrimaryButton";
import {StudentRowInfo} from "../../atoms/StudentRowInfo/StudentRowInfo";
import {ChevronDownIcon} from "../../../assets/icons/ChevronDownIcon";
import {useState} from "react";
import {StudentRatings} from "../StudentRatings/StudentRatings";

type Props = {
    name:string;
    surname:string;
    reservationDate:string;
    simplified:boolean;
}

export const StudentRow = ({name,surname,reservationDate, simplified}:Props) => {

    const [showInfo, setShowInfo] = useState(false);

    const arrowStyle = showInfo ? {rotate:'180deg'} : {rotate:'0deg'}

    return (
            <StudentRowStyle>
                <StudentRowInfo name={name} surname={surname} reservationDate={simplified ? null : reservationDate}/>

                <ButtonsStyle>
                    {simplified ?
                        <PrimaryButton context={'Zarezerwój rozmowę'}/>
                        :
                        <>
                        <PrimaryButton context={'Pokaż CV'}/>
                        <PrimaryButton context={'Brak zainteresowania'}/>
                        <PrimaryButton context={'Zatrudniony'}/>
                        </>
                    }
                    <ArrowStyle style={arrowStyle} onClick={()=>setShowInfo(prevState => !prevState)}>
                        <ChevronDownIcon/>
                    </ArrowStyle>
                </ButtonsStyle>

                {showInfo ? <StudentRatings/> : null}
            </StudentRowStyle>
    )
}