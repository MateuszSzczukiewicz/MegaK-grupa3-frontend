import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
		margin: 0;
		padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
	
	body {
		background-color: ${({ theme }) => theme.color.grey9};;
    font-family: "Catamaran", sans-serif;
    font-weight: ${({ theme }) => theme.font.weight.regular};
	}
`;
