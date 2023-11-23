import styled from 'styled-components';

export const StyledButton = styled.button`
	width: 91px;
	height: 39px;
	border: none;
	color: ${({ theme }) => theme.color.white};
	background-color: ${({ theme }) => theme.color.red1};
	font-size: ${({ theme }) => theme.font.size.md};
	font-weight: ${({ theme }) => theme.font.weight.regular};
	cursor: pointer;
`;
