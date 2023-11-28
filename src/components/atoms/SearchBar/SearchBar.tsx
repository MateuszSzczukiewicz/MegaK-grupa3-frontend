import {SearchBarStyle, LoupDivStyle, SearchInputStyle} from "./SearchBar.style";
import {MagnifierIcon} from "../../../assets/icons/MagnifierIcon";

export const  SearchBar = ({setSearchBarValue}) =>(
        <SearchBarStyle>
            <LoupDivStyle><MagnifierIcon/></LoupDivStyle>
            <SearchInputStyle onChange={(e)=>setSearchBarValue(e.target.value)} type="text" placeholder="Szukaj"/>
        </SearchBarStyle>
)