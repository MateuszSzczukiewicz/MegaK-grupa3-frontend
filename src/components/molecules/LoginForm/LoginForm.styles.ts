import styled from 'styled-components';

export const StyledInput = styled.input`
	width: 350px;
	height: 40px;
	background-color: ${({ theme }) => theme.color.grey1};
	color: ${({ theme }) => theme.color.white};
	margin-bottom: 15px;
	border: none;
	padding: 6px 17px;

	&:focus {
		outline: none;
	}
`;

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
