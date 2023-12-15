import styled from 'styled-components';

export const StudentFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 26px;
	color: ${({ theme }) => theme.color.white};

	h2 {
		text-align: center;
	}

	& > form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 26px;
		margin-bottom: 30px;

		& > div {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;

			${({ theme }) => theme.mq.md} {
				height: 1400px;
			}

			${({ theme }) => theme.mq.xl} {
				height: 950px;
			}

			${({ theme }) => theme.mq.xxl} {
				height: 700px;
			}
		}

		label {
			flex-grow: 1;
			display: block;
			width: 260px;
			margin: 10px 15px;

			${({ theme }) => theme.mq.xs} {
				width: 330px;
			}
		}

		label.large {
			flex-grow: 2;
		}
	}

	p {
		margin-top: 0;
		margin-bottom: 15px;
		color: ${({ theme }) => theme.color.red3};
	}

	input {
		display: block;
		width: 260px;
		font-size: ${({ theme }) => theme.font.size.md};

		${({ theme }) => theme.mq.xs} {
			width: 320px;
		}
	}

	button {
		padding: 8px 20px;
		font-size: ${({ theme }) => theme.font.size.md};
	}

	.hidden {
		display: none;
	}
`;

export const StyledTextArea = styled.textarea`
	width: 260px;
	height: 80%;
	min-height: 140px;
	background-color: ${({ theme }) => theme.color.grey1};
	color: ${({ theme }) => theme.color.white};
	margin-bottom: 15px;
	border: none;
	padding: 6px 17px;
	font-size: ${({ theme }) => theme.font.size.md};

	${({ theme }) => theme.mq.xs} {
		width: 320px;
	}

	&:focus {
		outline: none;
	}
`;

export const StyledSelect = styled.select`
	width: 260px;
	height: 40px;
	background-color: ${({ theme }) => theme.color.grey1};
	color: ${({ theme }) => theme.color.white};
	margin-bottom: 15px;
	border: none;
	padding: 6px 17px;
	font-size: ${({ theme }) => theme.font.size.md};

	${({ theme }) => theme.mq.xs} {
		width: 320px;
	}

	&:focus {
		outline: none;
	}
`;
