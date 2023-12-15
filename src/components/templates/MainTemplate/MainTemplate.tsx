import { Header } from '../../molecules/Header/Header';
import { ReactNode } from 'react';

export const MainTemplate = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};
