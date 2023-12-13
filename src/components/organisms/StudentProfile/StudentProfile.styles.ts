import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StudentProfileStyle = styled.div`
	display: flex;
	flex-direction: column;

	p {
		font-size: ${({ theme }) => theme.font.size.lg};
		color: ${({ theme }) => theme.color.white};
		margin: 0 auto;
	}

	hr {
		border-color: ${({ theme }) => theme.color.black};
		border-bottom: none;
	}
`;
