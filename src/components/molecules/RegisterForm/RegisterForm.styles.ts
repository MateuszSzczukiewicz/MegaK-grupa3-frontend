import styled from 'styled-components';

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const StyledP = styled.p`
	margin-top: 0;
	margin-bottom: 15px;
	color: ${({ theme }) => theme.color.red3};
`;

export const StyledButton = styled.button`
	height: 40px;
	text-align: center;
	padding: 8px;
	border: none;
	cursor: pointer;
	margin: 10px 0;
	background-color: ${({ theme }) => theme.color.red1};
	color: ${({ theme }) => theme.color.white};
`;
