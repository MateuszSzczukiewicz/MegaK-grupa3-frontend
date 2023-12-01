import styled from 'styled-components';

export const StyledSection = styled.div`
	min-height: 60px;
	background-color: ${({ theme }) => theme.color.grey6};
	margin: 0 4px;

	h3 {
		margin: 12px;
		font-size: ${({ theme }) => theme.font.size.xl};
		font-weight: ${({ theme }) => theme.font.weight.bold};
	}
`;
