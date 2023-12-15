import styled from 'styled-components';

export const StudentAchievementsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1300px;

	${({ theme }) => theme.mq.xl} {
		margin-right: 100px;
	}
`;

export const EmploymentExpectations = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 4px;
	> div {
		padding-left: 25px;
	}

	${({ theme }) => theme.mq.lg} {
		flex-direction: row;
	}
`;

export const Grades = styled(EmploymentExpectations)`
	> div {
		${({ theme }) => theme.mq.lg} {
			width: 25%;
		}
	}
`;
