import styled from 'styled-components';

export const StudentAchievementsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	//min-width: 250px;
	max-width: 1200px;
	margin-left: 0;

	${({ theme }) => theme.mq.xs} {
		min-width: 400px;
	}
	${({ theme }) => theme.mq.md} {
		margin-left: 4px;
	}
`;

export const EmploymentExpectations = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	> div {
		//width: 50%;
		width: 100%;
		padding-left: 27px;
	}

	${({ theme }) => theme.mq.xs} {
		> div {
			width: 50%;
		}
	}

	${({ theme }) => theme.mq.sm} {
		> div {
			width: 33%;
		}
	}

	${({ theme }) => theme.mq.xl} {
		flex-wrap: nowrap;
		width: unset;
		> div {
			padding-left: 10px;
		}
		> div:first-child {
			padding-left: 27px;
		}
	}
`;

export const Grades = styled(EmploymentExpectations)`
	flex-wrap: wrap;

	${({ theme }) => theme.mq.xs} {
		> div {
			width: 50%;
		}
		> div:nth-child(4) {
			padding-left: 10px;
		}
		> div:nth-child(3) {
			padding-left: 27px;
		}
	}

	${({ theme }) => theme.mq.xl} {
		> div {
			width: 25%;
			flex-wrap: nowrap;
		}
	}
`;
