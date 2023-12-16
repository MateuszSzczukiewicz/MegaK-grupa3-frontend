import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100vw;
	height: calc(100vh - 130px);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ProfileStyle = styled.div`
	display: flex;
	flex-direction: column;

	p {
		font-size: ${({ theme }) => theme.font.size.lg};
		color: ${({ theme }) => theme.color.white};
		margin: 10px auto;
	}

	hr {
		border-color: ${({ theme }) => theme.color.black};
		border-bottom: none;
		margin-bottom: 20px;
	}

	button {
		width: 150px;
	}

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		input {
			margin-bottom: 0;
			margin-top: 15px;
		}

		p {
			font-size: ${({ theme }) => theme.font.size.sm};
			margin: 5px;
			color: #469a62;
		}

		p.error {
			color: ${({ theme }) => theme.color.red3};
		}

		button {
			margin-top: 30px;
		}
	}
`;
