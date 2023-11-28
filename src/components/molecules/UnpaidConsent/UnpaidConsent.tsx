import { Group, StyledH3 } from '../../organisms/Filtration/Filtration.styles.ts';
import { StyledInput, StyledLabel } from './UnpaidConsent.styles.ts';

export const UnpaidConsent = () => {
	return (
		<Group>
			<StyledH3>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</StyledH3>
			<StyledLabel>
				<StyledInput name="consent" value="Tak" /> Tak
			</StyledLabel>
			<StyledLabel>
				<StyledInput name="consent" value="Nie" /> Nie
			</StyledLabel>
		</Group>
	);
};
