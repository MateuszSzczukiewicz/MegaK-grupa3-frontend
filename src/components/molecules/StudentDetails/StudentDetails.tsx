import { StyledH1, StyledImgWrapper, StyledLink } from './StudentDetails.styles';
import { SingleDetail } from '../SingleDetail/SingleDetail';
import { MailIcon } from '../../../assets/icons/MailIcon';
import { PhoneIcon } from '../../../assets/icons/PhoneIcon';
import { GitHubIcon } from '../../../assets/icons/GitHubIcon';
import { StudentCVType } from '../../../types/StudentCVType.types.ts';

export const StudentDetails = ({
	firstName,
	lastName,
	email,
	tel,
	gitHubUserName,
}: StudentCVType) => {
	return (
		<>
			<StyledImgWrapper></StyledImgWrapper>
			<StyledH1>
				{firstName} {lastName}
			</StyledH1>
			<StyledLink>
				<div>
					<GitHubIcon />
				</div>
				<p>{gitHubUserName}</p>
			</StyledLink>
			<SingleDetail>
				<PhoneIcon />
				<a href={`tel:${tel}`}>{tel}</a>
			</SingleDetail>
			<SingleDetail>
				<MailIcon />
				<a href={`mailto:${email}`}>{email}</a>
			</SingleDetail>
		</>
	);
};
