import { Header } from '../../molecules/Header/Header';
import { ReactNode } from 'react';

export const MainTemplate = ({
	children,
	studentId,
}: {
	children: ReactNode;
	studentId: string | undefined;
}) => {
	return (
		<>
			<Header studentId={studentId} />
			{children}
		</>
	);
};
