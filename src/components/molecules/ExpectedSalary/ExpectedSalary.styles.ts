import styled from 'styled-components';

export const StyledSpan = styled.span`
	color: ${({ theme }) => theme.color.white};
	font-size: ${({ theme }) => theme.font.size.xxs};
	font-weight: ${({ theme }) => theme.font.weight.medium};
	margin-right: 8px;
`;
