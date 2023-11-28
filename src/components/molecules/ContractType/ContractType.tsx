import {
	Group,
	StyledButton,
	StyledH3,
	StyledList,
} from '../../organisms/Filtration/Filtration.styles.ts';

export const ContractType = () => {
	return (
		<Group>
			<StyledH3>Oczekiwany tyb kontraktu</StyledH3>
			<StyledList>
				<StyledButton>Umowa o pracę</StyledButton>
				<StyledButton>B2B</StyledButton>
				<StyledButton>Umowa zlecenie</StyledButton>
				<StyledButton>Umowa o dzieło</StyledButton>
			</StyledList>
		</Group>
	);
};
