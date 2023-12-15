import styled from 'styled-components';
import user from '../../../assets/images/blank_user.png';

export const StyledUserElement = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.color.white};
	cursor: pointer;
	svg {
		height: 7px;
		fill: ${({ theme }) => theme.color.white};
		transform: rotate(180deg);
	}
`;

export const StyledPhoto = styled.div<{ $gitHubUserName?: string }>`
	background-image: url(${(props) =>
		props.$gitHubUserName ? `https://github.com/${props.$gitHubUserName}.png` : user});
	background-size: cover;
	background-position: center;
	border-radius: 50%;
	width: 45px;
	height: 45px;
`;

export const StyledName = styled.div`
	padding-left: 12px;
	padding-right: 30px;
	font-size: ${({ theme }) => theme.font.size.md};
`;
