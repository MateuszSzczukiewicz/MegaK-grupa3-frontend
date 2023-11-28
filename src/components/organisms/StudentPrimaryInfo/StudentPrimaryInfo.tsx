import { StudentDetails } from '../../molecules/StudentDetails/StudentDetails';
import { AboutMeSection } from '../../molecules/AboutMeSection/AboutMeSection';
import { StudentPrimaryInfoSection } from './StudentPrimaryInfo.styles';
import { GoBackElement } from '../../atoms/GoBackElement/GoBackElement';
import { PrimaryButton } from '../../atoms/PrimaryButton/PrimaryButton';

export const StudentPrimaryInfo = () => {
	return (
		<StudentPrimaryInfoSection>
			<GoBackElement />
			<StudentDetails />
			<AboutMeSection />
			<PrimaryButton text={'Brak zainteresowania'} />
			<PrimaryButton text={'Zatrudniony'} />
		</StudentPrimaryInfoSection>
	);
};
