import {ArrowStyle, StudentRowStyle, ButtonsStyle} from './StudentRow.styles.ts';
import {PrimaryButton} from "../../atoms/PrimaryButton/PrimaryButton";
import {StudentRowInfo} from "../../atoms/StudentRowInfo/StudentRowInfo";
import {ChevronDownIcon} from "../../../assets/icons/ChevronDownIcon";
import {useState} from "react";
import {StudentRatings} from "../StudentRatings/StudentRatings";
import {StudentRowPropsType} from "../../../types/StudentsPagePropsTypes/StudentsPageProps.types";


export const StudentRow = ({name,surname,reservationDate,gitHubUserName, simplified}:StudentRowPropsType) => {

    const [showInfo, setShowInfo] = useState(false);

    const arrowStyle = showInfo ? {rotate:'180deg'} : {rotate:'0deg'}

    return (
            <StudentRowStyle>
                <StudentRowInfo
                    name={name}
                    surname={surname}
                    img={gitHubUserName?`https://github.com/${gitHubUserName}.png`:null}
                    reservationDate={simplified ? null : reservationDate}
                />

                <ButtonsStyle>
                    {simplified ?
                        <PrimaryButton text={'Zarezerwuj rozmowę'}/>
                        :
                        <>
                        <PrimaryButton text={'Pokaż CV'}/>
                        <PrimaryButton text={'Brak zainteresowania'}/>
                        <PrimaryButton text={'Zatrudniony'}/>
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