import { useState } from 'react';
import { StyledButton, StyledH1, StyledH2, StyledHeader } from './Header.styles.ts';

export const Header = () => {
	const [count, setCount] = useState<number>(0);

	const increment = () => {
		setCount((prevCount) => prevCount + 1);
	};

	return (
		<StyledHeader>
			<StyledH1>MegaK - Grupa 3</StyledH1>
			<StyledH2>Frontend gotowy do działania: {count}</StyledH2>
			<StyledButton onClick={increment}>Zwiększ o 1</StyledButton>
		</StyledHeader>
	);
};
