import { StudentDetails } from '../../molecules/StudentDetails/StudentDetails';
import { AboutMeSection } from '../../molecules/AboutMeSection/AboutMeSection';
import { StyledButton, StudentPrimaryInfoSection, StyledAside } from './StudentPrimaryInfo.styles';
import { GoBackElement } from '../../atoms/GoBackElement/GoBackElement';
import { StudentCVType } from '../../../types/StudentCVType.types.ts';

export const StudentPrimaryInfo = (studentData: StudentCVType) => {
	return (
		<StyledAside>
			<GoBackElement />
			<StudentPrimaryInfoSection>
				<StudentDetails {...studentData} />
				<AboutMeSection {...studentData} />
				<StyledButton>Brak zainteresowania</StyledButton>
				<StyledButton>Zatrudniony</StyledButton>
			</StudentPrimaryInfoSection>
		</StyledAside>
	);
};
