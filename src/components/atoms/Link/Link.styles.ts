import styled from 'styled-components';

export const StyledLink = styled.a`
	display: flex;
	color: ${({ theme }) => theme.color.blue};
	font-size: ${({ theme }) => theme.font.size.md};
	text-decoration: none;
	padding-bottom: 11px;
	svg {
		height: 24px;
	}
`;
