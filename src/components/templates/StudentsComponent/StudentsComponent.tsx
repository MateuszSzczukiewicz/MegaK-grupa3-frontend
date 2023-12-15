import { StudentsComponentDiv } from './StudentsComponent.styles.ts';
import { useState } from 'react';
import { StudentsPageHeader } from '../../molecules/StudentsPageHeader/StudentsPageHeader.tsx';
import { StudentsPageMain } from '../../organisms/StudentsPageMain/StudentsPageMain.tsx';

export const StudentsComponent = () => {
	const [simplified, setSimplified] = useState(true);

	return (
		<StudentsComponentDiv>
			<StudentsPageHeader simplified={simplified} setSimplified={setSimplified} />
			<StudentsPageMain simplified={simplified} />
		</StudentsComponentDiv>
	);
};
