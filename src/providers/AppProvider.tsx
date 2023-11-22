// import { Provider } from 'react-redux';
// import { store } from "../store";
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme.ts';
import { GlobalStyle } from '../assets/styles/GlobalStyle.ts';

export const AppProviders = ({ children }: { children: ReactNode }) => {
	return (
		// <Provider store={store}>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{children}
			</ThemeProvider>
		</BrowserRouter>
		// </Provider>
	);
};
