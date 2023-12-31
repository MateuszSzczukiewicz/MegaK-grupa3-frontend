import styled from 'styled-components';

export const StudentRatingsStyles = styled.div`
	display: flex;
	flex-wrap: wrap;
	${({ theme }) => theme.mq.xl} {
		margin: 0 auto;
		flex-wrap: nowrap;
	}
`;
