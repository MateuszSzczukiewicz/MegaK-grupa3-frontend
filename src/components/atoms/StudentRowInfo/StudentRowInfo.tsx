import {
	BStyle,
	StudentRowInfoStyles,
	DateStyle,
	ImgStyle,
	NameStyle,
	StyledButton,
} from './StudentRowInfo.styles.ts';
import { StudentRowInfoPropsType } from '../../../types/StudentsPagePropsTypes/StudentsPageProps.types';
import { useNavigate } from 'react-router-dom';
import BlankUser from '../../../assets/images/blank_user.png';

export const StudentRowInfo = ({
	name,
	surname,
	img,
	reservationDate,
}: StudentRowInfoPropsType) => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/student');
	};

	return (
		<StudentRowInfoStyles>
			{reservationDate ? (
				<DateStyle>
					Rezerwacja do: <br /> <BStyle> {reservationDate} r.</BStyle>
				</DateStyle>
			) : null}
			<StyledButton onClick={handleNavigate}>
				{reservationDate ? <ImgStyle src={img ?? BlankUser} alt="user-github-logo" /> : null}
				<NameStyle>
					{name} {surname}
				</NameStyle>
			</StyledButton>
		</StudentRowInfoStyles>
	);
};
