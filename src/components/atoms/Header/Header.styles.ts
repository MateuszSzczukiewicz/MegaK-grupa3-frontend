import styled from 'styled-components';

export const StyledHeader = styled.header`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const StyledH1 = styled.h1`
	font-size: ${({ theme }) => theme.font.size.xxl};
	//font-family: $//{({ theme }) => theme.font.family.montserrat};
	color: ${({ theme }) => theme.color.grey1};
`;

export const StyledH2 = styled.h2`
	font-size: ${({ theme }) => theme.font.size.xl};
	// font-family: $//{({ theme }) => theme.font.family.montserrat};
	color: ${({ theme }) => theme.color.grey2};
`;

export const StyledButton = styled.button`
	border: 2px solid black;
	background-color: white;
	text-transform: uppercase;
	font-weight: bold;
	border-radius: 10px;
	width: 120px;
	height: 30px;
	cursor: pointer;
`;
