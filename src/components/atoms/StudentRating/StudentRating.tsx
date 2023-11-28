import {BStyle, RatingValueStyle, StudentRatingStyle, TitleStyle} from "./StudentRating.style";
import {StudentRatingPropsType} from "../../../types/StudentsPagePropsTypes/StudentsPageProps.types";


export const StudentRating = ({ title, ratingValue }:StudentRatingPropsType) =>{

    return(
        <StudentRatingStyle>
            <TitleStyle>{title}</TitleStyle>
            <RatingValueStyle><BStyle>{ratingValue}</BStyle>{typeof ratingValue === "number" ? '/5' : null}</RatingValueStyle>
        </StudentRatingStyle>
    )
}