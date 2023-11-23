import { createGlobalStyle } from 'styled-components';
import './fonts.css';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  header, main, article, section, aside, footer, h1, h2, h3, h4, h5, h6, p, li, a, label, input, select {
    font-family: "Catamaran", sans-serif;
    font-weight: ${({ theme }) => theme.font.weight.regular};
  }
`;
