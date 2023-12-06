import { Group, StyledH3 } from '../../organisms/Filtration/Filtration.styles.ts';
import { StyledInput, StyledLabel } from './UnpaidConsent.styles.ts';

export const UnpaidConsent = ({ onChange }: { onChange: (value: boolean) => void }) => {
	return (
		<Group>
			<StyledH3>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</StyledH3>
			<StyledLabel>
				<StyledInput name="consent" value="Tak" onChange={() => onChange(true)} /> Tak
			</StyledLabel>
			<StyledLabel>
				<StyledInput name="consent" value="Nie" onChange={() => onChange(false)} /> Nie
			</StyledLabel>
		</Group>
	);
};
