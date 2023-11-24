import styled from 'styled-components';

export const StudentAchievementsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 500px;
	max-width: 1200px;
	margin-left: 4px;
`;

export const EmploymentExpectations = styled.div`
	display: flex;
	justify-content: space-between;

	> div:first-child {
		padding-left: 27px;
	}
`;

export const Grades = styled(EmploymentExpectations)`
	> div {
		width: 25%;
	}
`;
