import {PrimaryButton} from "../../atoms/PrimaryButton/PrimaryButton";
import { StudentProfileStyle } from "./StudentProfile.style";
import {PasswordChange} from "../../molecules/PasswordChange/PasswordChange";

export const StudentProfile = () => {

    const gotAJobHandler = () => {

        if(window.confirm("Jesteś pewien? Ta zmiana spowoduje usunięcie twojego konta z listy kursantów")){
            console.log('Usuwam!');
        }else{
            console.log('Cofam!');
        }
    }

    return(
        <StudentProfileStyle>
            <p>Zatrudnienie</p>
            <PrimaryButton text={"Zostałem zatrudniony!"} onClick={gotAJobHandler}/>
            <hr/>
            <PasswordChange />
        </StudentProfileStyle>
        )
}