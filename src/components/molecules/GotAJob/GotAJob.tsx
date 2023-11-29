import {PrimaryButton} from "../../atoms/PrimaryButton/PrimaryButton";
import {PrimaryInput} from "../../atoms/PrimaryInput/PrimaryInput";
import { GotAJobStyle } from "./GotAJob.style";
import {useState} from "react";

export const GotAJob = () => {

    const [passwordInput, setPasswordInput] = useState('');
    const [repeatPasswordInput, setRepeatPasswordInput] = useState('');

    const gotAJobHandler = () =>{
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

        if(window.confirm("Jesteś pewien? Ta zmiana sprawi usunięcie twojego konta z listy kursantów")){
            console.log('Usuwam!');
        }else{
            console.log('Cofam!');
        }
    }

    return(
        <GotAJobStyle>
                <PrimaryInput type={"password"} placeholder={'Wpisz hasło'} onChange={(e)=>setPasswordInput(e.target.value)}/>
                <br/>
                <PrimaryInput type={"password"} placeholder={'Powtórz hasło'} onChange={(e)=>setRepeatPasswordInput(e.target.value)}/>
                <br/>
                <PrimaryButton text={"Zatwierdź"} onClick={gotAJobHandler}/>
        </GotAJobStyle>
        )
}