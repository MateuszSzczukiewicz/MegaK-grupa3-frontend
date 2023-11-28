import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
		margin: 0;
		padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  header, main, article, section, aside, footer, h1, h2, h3, h4, h5, h6, p, li, a, label, input, select, button, span {
    font-family: "Catamaran", sans-serif;
    font-weight: ${({ theme }) => theme.font.weight.regular};
  }
	
	body {
		background-color: ${({ theme }) => theme.color.grey9};;
	}
`;
