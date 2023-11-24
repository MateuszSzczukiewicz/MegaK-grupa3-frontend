import {LoupDivStyle, SearchInputStyle} from "./SearchBar.style";
import {MagnifierIcon} from "../../../assets/icons/MagnifierIcon";

export const  SearchBar = () =>{
    return(
        <>
            <LoupDivStyle><MagnifierIcon/></LoupDivStyle>
            <SearchInputStyle type="text" placeholder="Szukaj"/>
        </>
    )
}