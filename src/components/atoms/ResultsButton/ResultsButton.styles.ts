import styled from 'styled-components';

export const StyledButton = styled.button`
	background-color: ${({ theme }) => theme.color.red1};
	color: ${({ theme }) => theme.color.white};
	font-size: ${({ theme }) => theme.font.size.md};
	font-weight: ${({ theme }) => theme.font.weight.regular};
	padding: 6px 10px;
	border: none;
	cursor: pointer;
`;
