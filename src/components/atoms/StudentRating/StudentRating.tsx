import {BStyle, RatingValueStyle, StudentRatingStyle, TitleStyle} from "./StudentRating.style";

type Stars = 1|2|3|4|5

type Props = {
    title:string;
    ratingValue?:Stars|string;
}

export const StudentRating = ({title,ratingValue}:Props) =>{

    return(
        <StudentRatingStyle>
            <TitleStyle>{title}</TitleStyle>
            <RatingValueStyle><BStyle>{ratingValue}</BStyle>{typeof ratingValue === "number" ? '/5' : null}</RatingValueStyle>
        </StudentRatingStyle>
    )
}