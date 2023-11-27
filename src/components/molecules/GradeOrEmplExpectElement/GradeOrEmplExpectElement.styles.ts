import styled from 'styled-components';

export const GradeOrEmploymentExpectationSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.color.grey10};
	//width: 16.5%;
	padding: 10px;
	margin-bottom: 12px;
	> p {
		height: 60%;
		font-size: ${({ theme }) => theme.font.size.xs};
		color: ${({ theme }) => theme.color.grey5};
		padding: 5px 0;
	}
	> div {
		display: flex;
		align-items: center;
	}
	> div > p {
		display: flex;
		align-items: center;
		align-self: center;
		height: 100%;
		font-size: ${({ theme }) => theme.font.size.md};
		font-weight: ${({ theme }) => theme.font.weight.bold};
		padding-top: 16px;
	}
`;
