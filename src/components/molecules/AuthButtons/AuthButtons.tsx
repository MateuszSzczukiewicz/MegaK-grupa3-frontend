import { RecoveryButton } from '../../atoms/RecorveryButton/RecoveryButton.tsx';
import { RegisterButton } from '../../atoms/RegisterButton/RegisterButton.tsx';
import { Wrapper } from './AuthButtons.styles.ts';

export const AuthButtons = () => {
	return (
		<>
			<Wrapper>
				<RecoveryButton />
				<RegisterButton />
			</Wrapper>
		</>
	);
};
