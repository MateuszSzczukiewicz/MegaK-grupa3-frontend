import styled from 'styled-components';

export const StyledAboutMeSection = styled.div`
	margin-top: 10px;
	margin-bottom: 36px;
	width: 200px;
	h4 {
		height: 27px;
		font-size: ${({ theme }) => theme.font.size.md};
		text-align: left;
		font-weight: ${({ theme }) => theme.font.weight.bold};
		color: ${({ theme }) => theme.color.grey1};
	}
	p {
		text-align: left;
	}
`;
