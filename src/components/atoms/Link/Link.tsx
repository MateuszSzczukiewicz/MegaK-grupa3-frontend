import { PaperClipIcon } from '../../../assets/icons/PaperClipIcon';
import { StyledLink } from './Link.styles';

interface Props {
	link: string;
}

export const Link = (props: Props) => {
	return (
		<StyledLink href={props.link}>
			<PaperClipIcon />
			{props.link}
		</StyledLink>
	);
};
