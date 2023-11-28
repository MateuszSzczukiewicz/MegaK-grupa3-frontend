import {BStyle, StudentRowInfoStyle, DateStyle, ImgStyle, NameStyle} from "./StudentRowInfo.style";
import {StudentRowInfoPropsType} from "../../../types/StudentsPagePropsTypes/StudentsPageProps.types";

export const StudentRowInfo = ({ name, surname,img, reservationDate }:StudentRowInfoPropsType) =>{

    return(
        <StudentRowInfoStyle>
            {reservationDate ? <DateStyle>Rezerwacja do: <br/> <BStyle> {reservationDate} r.</BStyle></DateStyle>: null }
            <div>
                {reservationDate ? <ImgStyle src={img??'https://freeiconshop.com/wp-content/uploads/edd/person-outline-filled.png'} alt="user-github-logo"/>:null}
                <NameStyle> {name} {surname} </NameStyle>
            </div>
        </StudentRowInfoStyle>
    )
}