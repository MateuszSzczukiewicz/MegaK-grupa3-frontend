import styled from 'styled-components';

export const StyledSection = styled.div`
	height: 60px;
	background-color: ${({ theme }) => theme.color.grey6};
	width: 100%;
	h3 {
		margin-left: 26px;
		font-size: ${({ theme }) => theme.font.size.xl};
		font-weight: ${({ theme }) => theme.font.weight.bold};
		line-height: 60px;
	}
`;
