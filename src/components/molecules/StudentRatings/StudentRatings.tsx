import { StudentRating } from '../../atoms/StudentRating/StudentRating';
import { StudentRatingsStyles } from './StudentRatings.styles.ts';

export const StudentRatings = () => (
	<StudentRatingsStyles>
		<StudentRating title={'Ocena przejścia kursu'} ratingValue={5} />
		<StudentRating title={'Ocana aktywności i zaangażowania na kursie'} ratingValue={3} />
		<StudentRating title={'Ocena kodu w projekcie własnym'} ratingValue={5} />
		<StudentRating title={'Ocena pracy w zespole Scrum'} ratingValue={5} />
		<StudentRating title={'Preferowane miejsca pracy'} ratingValue={'Biuro'} />
		<StudentRating
			title={'Docelowe miasto gdzie chce pracować kandydat'}
			ratingValue={'Warszawa'}
		/>
		<StudentRating title={'Oczekiwant typ kontraktu'} ratingValue={'Umowa o pracę'} />
		<StudentRating title={'Oczekiwane wynagrodzenie miesięcznie netto'} ratingValue={'8 000 zł'} />
		<StudentRating
			title={'Zgody na odbycie bezpłatnych praktyk/stażu na początek'}
			ratingValue={'TAK'}
		/>
		<StudentRating title={'Komercyjne doświadczenie w programowaniu'} ratingValue={'6 miesięcy'} />
	</StudentRatingsStyles>
);
