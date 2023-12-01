import { PaperClipIcon } from '../../../assets/icons/PaperClipIcon';
import { StyledLink } from './Link.styles';

export const Link = ({ link }: { link: string }) => {
	return (
		<StyledLink href={link}>
			<PaperClipIcon />
			{link}
		</StyledLink>
	);
};
