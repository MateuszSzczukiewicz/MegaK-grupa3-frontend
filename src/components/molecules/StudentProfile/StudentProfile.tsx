import {PrimaryButton} from "../../atoms/PrimaryButton/PrimaryButton";
import {PrimaryInput} from "../../atoms/PrimaryInput/PrimaryInput";
import { StudentProfileStyle } from "./StudentProfile.style";
import {useState} from "react";

export const StudentProfile = () => {

    const [passwordInput, setPasswordInput] = useState('');
    const [repeatPasswordInput, setRepeatPasswordInput] = useState('');

    const gotAJobHandler = () => {

        if(window.confirm("Jesteś pewien? Ta zmiana spowoduje usunięcie twojego konta z listy kursantów")){
            console.log('Usuwam!');
        }else{
            console.log('Cofam!');
        }
    }

    const changePasswordHandler = () => {
        if(!passwordInput) {
            alert("Wprowadź hasło");
            return;
        }
        if(!repeatPasswordInput){
            alert("Wprowadź hasło ponownie");
            return;
        }
        if(!(passwordInput===repeatPasswordInput)){
            alert("Hasła nie są takie same");
            return;
        }
        console.log('Zmieniam hasło');
    }

    return(
        <StudentProfileStyle>
            <p>Zatrudnienie</p>
            <PrimaryButton text={"Zostałem zatrudniony!"} onClick={gotAJobHandler}/>
            <hr/>
            <br/>
            <p>Zmień hasło</p>
            <PrimaryInput type={"password"} placeholder={'Wpisz hasło'} onChange={(e)=>setPasswordInput(e.target.value)}/>
            <br/>
            <PrimaryInput type={"password"} placeholder={'Powtórz hasło'} onChange={(e)=>setRepeatPasswordInput(e.target.value)}/>
            <br/>
            <PrimaryButton text={"Zatwierdź"} onClick={changePasswordHandler}/>
        </StudentProfileStyle>
        )
}