import {
	BStyle,
	StudentRowInfoStyles,
	DateStyle,
	ImgStyle,
	NameStyle,
	StyledButton,
} from './StudentRowInfo.styles.ts';
import { useNavigate } from 'react-router-dom';
import BlankUser from '../../../assets/images/blank_user.png';
import { StudentRowInfoPropsType } from '../../../types/StudentsPageProps.types.ts';

export const StudentRowInfo = ({
	firstName,
	lastName,
	gitHubUserName,
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
				{reservationDate ? (
					<ImgStyle src={gitHubUserName ?? BlankUser} alt="user-github-logo" />
				) : null}
				<NameStyle>
					{firstName} {lastName}
				</NameStyle>
			</StyledButton>
		</StudentRowInfoStyles>
	);
};
