import {PrimaryInput} from "../../atoms/PrimaryInput/PrimaryInput";
import {PrimaryButton} from "../../atoms/PrimaryButton/PrimaryButton";
import {useState} from "react";

export const PasswordChange = () => {

    const [passwordInput, setPasswordInput] = useState('');
    const [repeatPasswordInput, setRepeatPasswordInput] = useState('');

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
        <>
            <br/>
            <p>Zmień hasło</p>
            <PrimaryInput type={"password"} placeholder={'Wpisz hasło'} onChange={(e)=>setPasswordInput(e.target.value)}/>
            <br/>
            <PrimaryInput type={"password"} placeholder={'Powtórz hasło'} onChange={(e)=>setRepeatPasswordInput(e.target.value)}/>
            <br/>
            <PrimaryButton text={"Zatwierdź"} onClick={changePasswordHandler}/>
        </>
    )
}