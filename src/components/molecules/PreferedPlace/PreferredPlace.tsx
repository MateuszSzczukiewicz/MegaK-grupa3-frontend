import { useState } from 'react';
import {
	Group,
	StyledButton,
	StyledH3,
	StyledList,
} from '../../organisms/Filtration/Filtration.styles.ts';

export const PreferredPlace = ({ onChange }: { onChange: (value: string) => void }) => {
	const [activeButton, setActiveButton] = useState<string | null>(null);

	const handleButtonClick = (value: string) => {
		setActiveButton(value);
		onChange(value);
	};

	return (
		<Group>
			<StyledH3>Preferowane miejsce pracy</StyledH3>
			<StyledList>
				<StyledButton
					onClick={() => handleButtonClick('Praca zdalna')}
					isActive={activeButton === 'Praca zdalna'}
				>
					Praca zdalna
				</StyledButton>
				<StyledButton
					onClick={() => handleButtonClick('Praca w biurze')}
					isActive={activeButton === 'Praca w biurze'}
				>
					Praca w biurze
				</StyledButton>
			</StyledList>
		</Group>
	);
};
