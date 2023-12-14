import styled from 'styled-components';

export const StyledButton = styled.button`
	height: 40px;
	text-align: center;
	padding: 8px;
	margin: 10px;
	border: none;
	cursor: pointer;
	background-color: ${({ theme }) => theme.color.red1};
	color: ${({ theme }) => theme.color.white};
`;
