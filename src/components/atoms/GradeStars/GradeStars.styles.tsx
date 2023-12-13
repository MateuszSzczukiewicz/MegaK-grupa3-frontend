import styled from 'styled-components';

export const GradeStarsSection = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: start;
	margin: 10px 0 20px;

	${({ theme }) => theme.mq.lg} {
		flex-direction: column;
		align-items: start;
	}

	${({ theme }) => theme.mq.xl} {
		flex-direction: row;
		align-items: center;
	}

	p {
		font-size: ${({ theme }) => theme.font.size.lg};
		padding-right: 12px;
		color: ${({ theme }) => theme.color.grey4};

		${({ theme }) => theme.mq.lg} {
			margin: 4px;
		}

		${({ theme }) => theme.mq.xl} {
			margin: 0;
		}
	}

	span {
		color: ${({ theme }) => theme.color.white};
	}

	svg {
		height: 20px;
		width: 20px;
	}
`;
