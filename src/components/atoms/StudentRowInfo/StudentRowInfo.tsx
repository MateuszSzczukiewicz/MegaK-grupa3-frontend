import {BStyle, StudentRowInfoStyle, DateStyle, ImgStyle, NameStyle} from "./StudentRowInfo.style";

type Props = {
    name:string;
    surname:string;
    reservationDate:string;
}

export const StudentRowInfo = ({ name, surname, reservationDate }:Props) =>{

    return(
        <StudentRowInfoStyle>
            <DateStyle>Rezerwacja do: <br/> <BStyle> {reservationDate} r.</BStyle></DateStyle>
            <div>
                <ImgStyle src="https://freeiconshop.com/wp-content/uploads/edd/person-outline-filled.png" alt=""/>
                <NameStyle> {name} {surname} </NameStyle>
            </div>
        </StudentRowInfoStyle>
    )
}