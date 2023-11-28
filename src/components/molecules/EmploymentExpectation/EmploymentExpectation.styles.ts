import styled from 'styled-components';

export const EmploymentExpectationSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.color.grey7};
	width: 16.5%;
	padding: 10px;
	margin-bottom: 12px;
	> p {
		height: 60%;
		font-size: ${({ theme }) => theme.font.size.xs};
		color: #cfcfcf;
		padding: 5px 0;
	}
	> div > p {
		display: flex;
		align-items: center;
		height: 40%;
		font-size: ${({ theme }) => theme.font.size.md};
		font-weight: ${({ theme }) => theme.font.weight.bold};
		padding-top: 16px;
	}
`;
