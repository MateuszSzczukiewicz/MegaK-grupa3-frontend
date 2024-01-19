import { StyledAboutMeSection } from './AboutMeSection.styles';
import { StudentCVType } from '../../../types/StudentCVType.types.ts';

export const AboutMeSection = ({ bio }: StudentCVType) => (
	<StyledAboutMeSection>
		<h4>O mnie</h4>
		<p>{bio}</p>
	</StyledAboutMeSection>
);
