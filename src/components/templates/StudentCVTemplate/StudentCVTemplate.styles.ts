import styled from 'styled-components';

export const ContentWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 25px auto;
	color: ${({ theme }) => theme.color.white};

	${({ theme }) => theme.mq.md} {
		align-items: start;
		flex-direction: row;
	}
`;
