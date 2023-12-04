import { StudentsComponentDiv } from './StudentsComponent.styles.ts';
import { useState } from 'react';
import { StudentsPageHeader } from '../../molecules/StudentsPageHeader/StudentsPageHeader';
import { StudentsPageMain } from '../StudentsPageMain/StudentsPageMain';
import { Filtration } from '../Filtration/Filtration.tsx';

export const StudentsComponent = () => {
	const [simplified, setSimplified] = useState(true);
	const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);

	const toggleFilterVisible = (): void => {
		setIsFilterVisible(!isFilterVisible);
	};

	return (
		<StudentsComponentDiv>
			<StudentsPageHeader simplified={simplified} setSimplified={setSimplified} />
			<StudentsPageMain toggleFilterVisible={toggleFilterVisible} simplified={simplified} />
			{isFilterVisible ? <Filtration toggleFilterVisible={toggleFilterVisible} /> : null}
		</StudentsComponentDiv>
	);
};
