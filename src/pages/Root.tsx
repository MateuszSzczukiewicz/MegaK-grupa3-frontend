import { Route, Routes } from 'react-router-dom';
import { Homepage } from './Homepage.tsx';

export const Root = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
		</Routes>
	);
};
