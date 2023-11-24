import styled from 'styled-components';

export const StyledButton = styled.button`
	border: none;
	background-color: ${({ theme }) => theme.color.red1};
	cursor: pointer;
	color: ${({ theme }) => theme.color.white};
	height: 39px;
	width: 200px;
	margin-bottom: 14px;
`;
