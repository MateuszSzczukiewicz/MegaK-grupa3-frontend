import { StudentsHeaderStyle } from './StudentsPageHeader.styles.ts';
import { StudentsPageHeaderBtn } from '../../atoms/StudentsPageHeaderBtn/StudentsPageHeaderBtn';
import { StudentsPageHeaderPropsType } from '../../../types/StudentsPageProps.types.ts';

export const StudentsPageHeader = ({ simplified, setSimplified }: StudentsPageHeaderPropsType) => (
	<StudentsHeaderStyle>
		<StudentsPageHeaderBtn
			active={simplified}
			text={'Dostępni kursanci'}
			setActive={() => setSimplified(true)}
		/>
		<StudentsPageHeaderBtn
			active={!simplified}
			text={'Do rozmowy'}
			setActive={() => setSimplified(false)}
		/>
	</StudentsHeaderStyle>
);
