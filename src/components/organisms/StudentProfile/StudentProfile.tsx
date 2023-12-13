import { PrimaryButton } from '../../atoms/PrimaryButton/PrimaryButton';
import { StudentProfileStyle, Wrapper } from './StudentProfile.styles';
import { PasswordChange } from '../../molecules/PasswordChange/PasswordChange';

export const StudentProfile = () => {
	const gotAJobHandler = () => {
		if (
			window.confirm('Jesteś pewien? Ta zmiana spowoduje usunięcie twojego konta z listy kursantów')
		) {
			console.log('Usuwam!');
		} else {
			console.log('Cofam!');
		}
	};

	return (
		<Wrapper>
			<StudentProfileStyle>
				<p>Zatrudnienie</p>
				<PrimaryButton text={'Zostałem zatrudniony!'} onClick={gotAJobHandler} />
				<hr />
				<PasswordChange />
			</StudentProfileStyle>
		</Wrapper>
	);
};
