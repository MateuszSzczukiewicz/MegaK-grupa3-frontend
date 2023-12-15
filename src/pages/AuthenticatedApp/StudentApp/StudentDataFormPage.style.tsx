import styled from 'styled-components';

export const StudentDataFormPageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	> button {
		margin-top: 40px;

		${({ theme }) => theme.mq.md} {
			position: relative;
			top: 10px;
			left: 230px;
		}

		${({ theme }) => theme.mq.xl} {
			left: 370px;
		}

		${({ theme }) => theme.mq.xxl} {
			left: 520px;
		}
	}
`;
