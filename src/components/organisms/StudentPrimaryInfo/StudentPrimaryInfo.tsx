import { StudentDetails } from '../../molecules/StudentDetails/StudentDetails';
import { AboutMeSection } from '../../molecules/AboutMeSection/AboutMeSection';
import { StyledButton, StudentPrimaryInfoSection, StyledAside } from './StudentPrimaryInfo.styles';
import { GoBackElement } from '../../atoms/GoBackElement/GoBackElement';

export const StudentPrimaryInfo = () => {
	return (
		<StyledAside>
			<GoBackElement />
			<StudentPrimaryInfoSection>
				<StudentDetails />
				<AboutMeSection />
				<StyledButton>Brak zainteresowania</StyledButton>
				<StyledButton>Zatrudniony</StyledButton>
			</StudentPrimaryInfoSection>
		</StyledAside>
	);
};
