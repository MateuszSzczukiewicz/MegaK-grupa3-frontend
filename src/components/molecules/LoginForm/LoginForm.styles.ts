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
