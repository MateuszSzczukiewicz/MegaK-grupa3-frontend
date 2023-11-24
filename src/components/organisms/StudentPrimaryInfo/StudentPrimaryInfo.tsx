import { StudentDetails } from '../../molecules/StudentDetails/StudentDetails';
import { AboutMeSection } from '../../molecules/AboutMeSection/AboutMeSection';

import { StudentPrimaryInfoSection } from './StudentPrimaryInfo.styles';
import { Button } from '../../atoms/Button/Button';

export const StudentPrimaryInfo = () => {
	return (
		<StudentPrimaryInfoSection>
			<StudentDetails />
			<AboutMeSection />
			<Button>Brak zainteresowania</Button>
			<Button>Zatrudniony</Button>
		</StudentPrimaryInfoSection>
	);
};
