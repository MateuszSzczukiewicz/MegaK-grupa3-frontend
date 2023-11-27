import {BStyle, StudentRowInfoStyle, DateStyle, ImgStyle, NameStyle} from "./StudentRowInfo.style";

type Props = {
    name:string;
    surname:string;
    reservationDate?:string|null;
}

export const StudentRowInfo = ({ name, surname, reservationDate }:Props) =>{

    return(
        <StudentRowInfoStyle>
            {reservationDate ? <DateStyle>Rezerwacja do: <br/> <BStyle> {reservationDate} r.</BStyle></DateStyle>: null }
            <div>
                {reservationDate ? <ImgStyle src="https://freeiconshop.com/wp-content/uploads/edd/person-outline-filled.png" alt=""/>:null}
                <NameStyle> {name} {surname} </NameStyle>
            </div>
        </StudentRowInfoStyle>
    )
}