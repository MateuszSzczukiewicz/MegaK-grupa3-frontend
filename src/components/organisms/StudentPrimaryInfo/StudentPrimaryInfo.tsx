import { StudentDetails } from '../../molecules/StudentDetails/StudentDetails';
import { AboutMeSection } from '../../molecules/AboutMeSection/AboutMeSection';

import { StyledSection } from './StudentPrimaryInfo.styles';
import { Button } from '../../atoms/Button/Button';

export const StudentPrimaryInfo = () => {
	return (
		<StyledSection>
			<StudentDetails />
			<AboutMeSection />
			<Button>Brak zainteresowania</Button>
			<Button>Zatrudniony</Button>
		</StyledSection>
	);
};
