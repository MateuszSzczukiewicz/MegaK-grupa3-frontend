import {Dispatch, SetStateAction} from "react";
import {ChevronDownIcon} from "../../../assets/icons/ChevronDownIcon";
import {ButtonStyle, RowsCounterStyle, SelectStyle, StudentsPageFooterStyle} from "./StudentsPageFooter.style";


type Props = {
    rowsLimit:number;
    setRowsLimit:Dispatch<SetStateAction<number>>;
    LengthOfStudentsList:number;
    activePage:number;
    setActivePage:Dispatch<SetStateAction<number>>;
}

export const StudentsPageFooter = ({rowsLimit,setRowsLimit,LengthOfStudentsList,activePage,setActivePage}:Props) => {

    const pageHandler = (value:-1|1) => {
        setActivePage(prevState => prevState + value);
    }

    return(
        <StudentsPageFooterStyle>
            <span>Ilość elementów </span>

            <SelectStyle name="numOfRows" onChange={(e)=>setRowsLimit(Number(e.target.value))}>
                <option value="5">5</option>
                <option value="10">10</option>
            </SelectStyle>

            <RowsCounterStyle>
                {LengthOfStudentsList < rowsLimit*(1+activePage) ?
                    LengthOfStudentsList :
                    rowsLimit*(1+activePage)
                } z {LengthOfStudentsList}
            </RowsCounterStyle>

            <ButtonStyle
                disabled={activePage === 0}
                onClick={()=>pageHandler(-1)}
                style={{rotate:"90deg"}}
            >
                <ChevronDownIcon/>
            </ButtonStyle>

            <ButtonStyle
                disabled={LengthOfStudentsList < rowsLimit*(1+activePage)}
                onClick={()=>pageHandler(1)}
                style={{rotate:"-90deg"}}
            >
                <ChevronDownIcon/>
            </ButtonStyle>

        </StudentsPageFooterStyle>
    )
}