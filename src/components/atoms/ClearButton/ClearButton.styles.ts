import styled from 'styled-components';

export const StyledButton = styled.button`
	width: 130px;
	height: 31px;
	background-color: ${({ theme }) => theme.color.blue};
	color: ${({ theme }) => theme.color.white};
	font-weight: ${({ theme }) => theme.font.weight.medium};
	border: none;
	cursor: pointer;
`;
