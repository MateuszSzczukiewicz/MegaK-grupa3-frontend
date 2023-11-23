import styled from 'styled-components';

export const StyledButton = styled.button`
	background: transparent;
	border: none;
	color: ${({ theme }) => theme.color.white};
	font-size: ${({ theme }) => theme.font.size.xs};
	font-weight: ${({ theme }) => theme.font.weight.regular};
	cursor: pointer;
`;

export const StyledSpan = styled.span`
	text-decoration: underline;
	font-weight: ${({ theme }) => theme.font.weight.bold};
`;
