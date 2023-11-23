import styled from 'styled-components';

export const StyledImage = styled.img`
	object-fit: cover;
	width: 124px;
	height: 76px;
	margin-bottom: 30px;
`;

export const StyledLogin = styled.main`
	display: flex;
	height: 100vh;
	width: 100vw;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: ${({ theme }) => theme.color.black};
	font-weight: ${({ theme }) => theme.font.weight.bold};
`;
