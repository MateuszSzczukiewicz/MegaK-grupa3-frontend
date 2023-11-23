import {  } from './StudentBar.styles.ts';

export const StudentBar = ({simplified}) => {

    return (
        simplified ?
            <div>
                <span>name</span>
                <button>Zarezerwój rozmowę</button>
                <i>\/</i>
            </div> :
            <div>
                <span>Rezerwacja do: <b>DD.MM.YYYY r.</b> </span>
                <img src="" alt=""/>
                <span> NAME </span>
                <div>Pokaż CV</div>
                <div>Zainteresowania</div>
                <div>Zatrudnienie</div>
                <i>\/</i>
            </div>
    )
}