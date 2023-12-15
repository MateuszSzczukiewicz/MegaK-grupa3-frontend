import styled from 'styled-components';

export const Wrapper = styled.main`
	display: flex;
	height: 100vh;
	width: 100vw;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: ${({ theme }) => theme.color.black};
`;

export const StyledRegister = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const StyledImage = styled.img`
	align-self: center;
	object-fit: cover;
	width: 124px;
	height: 76px;
	margin-bottom: 30px;
`;
