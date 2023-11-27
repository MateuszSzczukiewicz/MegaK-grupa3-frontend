import styled from 'styled-components';

export const StyledAboutMeSection = styled.div`
	margin: 10px 25px 36px;
	width: 85%;
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

	${({ theme }) => theme.mq.md} {
		width: 200px;
	}
`;
