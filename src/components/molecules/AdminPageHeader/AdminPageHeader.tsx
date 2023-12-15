import { StudentsPageHeaderBtn } from '../../atoms/StudentsPageHeaderBtn/StudentsPageHeaderBtn';
import { StudentsPageHeaderPropsType } from '../../../types/StudentsPageProps.types';
import { StudentsHeaderStyle } from '../StudentsPageHeader/StudentsPageHeader.styles';

export const AdminPageHeader = ({ simplified, setSimplified }: StudentsPageHeaderPropsType) => (
	<StudentsHeaderStyle>
		<StudentsPageHeaderBtn
			active={simplified}
			text={'Dodaj HR'}
			setActive={() => setSimplified(true)}
		/>
		<StudentsPageHeaderBtn
			active={!simplified}
			text={'Dodaj kursantów'}
			setActive={() => setSimplified(false)}
		/>
	</StudentsHeaderStyle>
);
