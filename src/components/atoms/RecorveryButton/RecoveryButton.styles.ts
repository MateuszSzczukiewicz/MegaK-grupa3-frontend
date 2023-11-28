import styled from 'styled-components';

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
