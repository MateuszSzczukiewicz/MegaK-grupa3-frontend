import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme.ts';
import { GlobalStyle } from '../assets/styles/GlobalStyle.ts';

export const AppProviders = ({ children }: { children: ReactNode }) => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{children}
			</ThemeProvider>
		</BrowserRouter>
	);
};
