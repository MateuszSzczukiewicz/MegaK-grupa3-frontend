import styled from 'styled-components';

export const StyledImgWrapper = styled.div`
	width: 150px;
	height: 150px;
	background-color: #fff;
	background-size: cover;
	background-position: center;
	border-radius: 50%;
`;
export const StyledH1 = styled.h1`
	height: 39px;
	font-size: ${({ theme }) => theme.font.size.xxxl};
	margin-top: 12px;
	margin-bottom: 0;
`;

export const StyledLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 2px;
	margin-bottom: 19px;
	height: 27px;
	cursor: pointer;
	p {
		font-size: ${({ theme }) => theme.font.size.md};
		color: ${({ theme }) => theme.color.blue};
	}
	div {
		width: 22px;
		height: 22px;
		margin-right: 9px;
		svg {
			fill: ${({ theme }) => theme.color.blue};
		}
	}
`;
