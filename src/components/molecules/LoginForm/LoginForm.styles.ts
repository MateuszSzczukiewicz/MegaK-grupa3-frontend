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

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`;

export const StyledP = styled.p`
	margin: 0 auto 15px;
	color: ${({ theme }) => theme.color.red3};
`;

export const StyledButton = styled.button`
	align-self: end;
	width: 91px;
	height: 39px;
	border: none;
	color: ${({ theme }) => theme.color.white};
	background-color: ${({ theme }) => theme.color.red1};
	font-size: ${({ theme }) => theme.font.size.md};
	font-weight: ${({ theme }) => theme.font.weight.regular};
	cursor: pointer;
`;

export const Wrapper = styled.section`
	display: flex;
	justify-content: space-between;
`;

export const StyledButtons = styled.button`
	align-self: end;
	margin-bottom: 28px;
	background: transparent;
	border: none;
	color: ${({ theme }) => theme.color.white};
	font-size: ${({ theme }) => theme.font.size.xs};
	font-weight: ${({ theme }) => theme.font.weight.medium};
	cursor: pointer;
`;
