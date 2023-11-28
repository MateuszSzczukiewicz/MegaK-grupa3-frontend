import styled from 'styled-components';

export const StyledButton = styled.button`
	font-size: ${({ theme }) => theme.font.size.md};
	font-weight: ${({ theme }) => theme.font.weight.regular};
	color: ${({ theme }) => theme.color.white};
	background-color: transparent;
	border: none;
	cursor: pointer;
`;
