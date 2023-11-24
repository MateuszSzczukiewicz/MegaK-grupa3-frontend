import {StudentRowStyle, ButtonsStyle} from './StudentRow.styles.ts';
import {PrimaryButton} from "../../atoms/PrimaryButton/PrimaryButton";
import {StudentRowInfo} from "../../atoms/StudentRowInfo/StudentRowInfo";
import {ChevronDownIcon} from "../../../assets/icons/ChevronDownIcon";

export const StudentRow = ({simplified}) => {

    return (
        simplified ?
            <StudentRowStyle>
                <StudentRowInfo name='Jan' surname='Kowalski' reservationDate='12.12.2023'/>
                <ButtonsStyle>
                    <PrimaryButton context={'Zarezerwój rozmowę'}/>
                    <ChevronDownIcon/>
                </ButtonsStyle>
            </StudentRowStyle>
            :
            <StudentRowStyle>
                <StudentRowInfo name='Jan' surname='Kowalski' reservationDate='12.12.2023'/>

                <ButtonsStyle>
                    <PrimaryButton context={'Pokaż CV'}/>
                    <PrimaryButton context={'Brak Zainteresowania'}/>
                    <PrimaryButton context={'Zatrudniony'}/>
                    <ChevronDownIcon/>
                </ButtonsStyle>
            </StudentRowStyle>
    )
}