import { StyledH1, StyledImgWrapper, StyledLink } from './StudentDetails.styles';
import { SingleDetail } from '../SingleDetail/SingleDetail';
import { MailIcon } from '../../../assets/icons/MailIcon';
import { PhoneIcon } from '../../../assets/icons/PhoneIcon';
import { GitHubIcon } from '../../../assets/icons/GitHubIcon';

export const StudentDetails = () => {
	return (
		<>
			<StyledImgWrapper></StyledImgWrapper>
			<StyledH1>Jan Kowalski</StyledH1>
			<StyledLink>
				<div>
					<GitHubIcon />
				</div>
				<p>jankowalski</p>
			</StyledLink>
			<SingleDetail>
				<PhoneIcon />
				<a href="tel:+4812334567">+4812334567</a>
			</SingleDetail>
			<SingleDetail>
				<MailIcon />
				<a href="mailto:1233456vdv@vfdfvdvfvf">1233456vdv@vfdfvdvfvf</a>
			</SingleDetail>
		</>
	);
};
