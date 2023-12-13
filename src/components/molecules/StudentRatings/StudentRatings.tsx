import { StudentRating } from '../../atoms/StudentRating/StudentRating';
import { StudentRatingsStyles } from './StudentRatings.styles.ts';
import { StudentRatingPropsType } from '../../../types/StudentsPageProps.types.ts';

export const StudentRatings = ({
	courseCompletion,
	courseEngagement,
	projectDegree,
	teamProjectDegree,
	expectedTypeWork,
	targetWorkCity,
	expectedContractType,
	expectedSalary,
	canTakeApprenticeship,
	monthsOfCommercialExp,
}: StudentRatingPropsType) => (
	<StudentRatingsStyles>
		<StudentRating title={'Ocena przejścia kursu'} ratingValue={courseCompletion} />
		<StudentRating
			title={'Ocana aktywności i zaangażowania na kursie'}
			ratingValue={courseEngagement}
		/>
		<StudentRating title={'Ocena kodu w projekcie własnym'} ratingValue={projectDegree} />
		<StudentRating title={'Ocena pracy w zespole Scrum'} ratingValue={teamProjectDegree} />
		<StudentRating title={'Preferowane miejsca pracy'} ratingValue={expectedTypeWork} />
		<StudentRating
			title={'Docelowe miasto gdzie chce pracować kandydat'}
			ratingValue={targetWorkCity}
		/>
		<StudentRating title={'Oczekiwant typ kontraktu'} ratingValue={expectedContractType} />
		<StudentRating
			title={'Oczekiwane wynagrodzenie miesięcznie netto'}
			ratingValue={expectedSalary}
		/>
		<StudentRating
			title={'Zgody na odbycie bezpłatnych praktyk/stażu na początek'}
			ratingValue={canTakeApprenticeship}
		/>
		<StudentRating
			title={'Komercyjne doświadczenie w programowaniu'}
			ratingValue={monthsOfCommercialExp}
		/>
	</StudentRatingsStyles>
);
