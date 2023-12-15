import styled from 'styled-components';

export const AdminFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 700px;
	padding-top: 50px;
	padding-bottom: 50px;
	color: ${({ theme }) => theme.color.white};

	h2 {
		text-align: center;
	}

	p {
		margin-top: 0;
		margin-bottom: 15px;
		color: #469a62;
	}

	p.error {
		color: ${({ theme }) => theme.color.red3};
	}

	& > form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 10px;
		margin-bottom: 30px;

		label {
			display: block;
			width: 270px;
			margin: 30px;

			p {
				margin-top: 0;
				margin-bottom: 15px;
				color: ${({ theme }) => theme.color.red3};
			}
		}

		input {
			display: block;
			width: 260px;
			font-size: ${({ theme }) => theme.font.size.md};
		}

		button {
			margin-top: 20px;
			padding: 8px 20px;
			font-size: ${({ theme }) => theme.font.size.md};
		}
	}
`;
