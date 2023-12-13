import { useState } from 'react';
import {
	Group,
	StyledButton,
	StyledH3,
	StyledList,
} from '../../organisms/Filtration/Filtration.styles.ts';

export const ContractType = ({ onChange }: { onChange: (value: string) => void }) => {
	const [activeContractType, setActiveContractType] = useState<string | null>(null);

	const handleButtonClick = (value: string) => {
		setActiveContractType(value);
		onChange(value);
	};

	return (
		<Group>
			<StyledH3>Oczekiwany typ kontraktu</StyledH3>
			<StyledList>
				<StyledButton
					onClick={() => handleButtonClick('Umowa o pracę')}
					isActive={activeContractType === 'Umowa o pracę'}
				>
					Umowa o pracę
				</StyledButton>
				<StyledButton
					onClick={() => handleButtonClick('B2B')}
					isActive={activeContractType === 'B2B'}
				>
					B2B
				</StyledButton>
				<StyledButton
					onClick={() => handleButtonClick('Umowa zlecenie')}
					isActive={activeContractType === 'Umowa zlecenie'}
				>
					Umowa zlecenie
				</StyledButton>
				<StyledButton
					onClick={() => handleButtonClick('Umowa o dzieło')}
					isActive={activeContractType === 'Umowa o dzieło'}
				>
					Umowa o dzieło
				</StyledButton>
			</StyledList>
		</Group>
	);
};
