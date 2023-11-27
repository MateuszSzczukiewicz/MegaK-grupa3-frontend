import { SectionTitle } from '../../atoms/SectionTitle/SectionTitle';
import {
	StudentAchievementsWrapper,
	EmploymentExpectations,
	Grades,
} from './StudentAchievements.styles';
import { TextArea } from '../../atoms/TextArea/TextArea';
import { Link } from '../../atoms/Link/Link';
import { GradeOrEmplExpectElement } from '../../molecules/GradeOrEmplExpectElement/GradeOrEmplExpectElement';
import { GradeStars } from '../../molecules/GradeStars/GradeStars';

export const StudentAchievements = () => {
	return (
		<StudentAchievementsWrapper>
			<SectionTitle>Oceny</SectionTitle>
			<Grades>
				<GradeOrEmplExpectElement expectationName="Ocena przejścia kursu">
					<GradeStars grade={2}></GradeStars>
				</GradeOrEmplExpectElement>
				<GradeOrEmplExpectElement expectationName="Ocena aktywności i zaangażowania na kursie">
					<GradeStars grade={4}></GradeStars>
				</GradeOrEmplExpectElement>
				<GradeOrEmplExpectElement expectationName="Ocena kodu w projekcie własnym">
					<GradeStars grade={5}></GradeStars>
				</GradeOrEmplExpectElement>
				<GradeOrEmplExpectElement expectationName="Ocena pracy w zespole Scrum">
					<GradeStars grade={3}></GradeStars>
				</GradeOrEmplExpectElement>
			</Grades>
			<SectionTitle>Oczekiwanie w stosunku do zatrudnienia</SectionTitle>
			<EmploymentExpectations>
				<GradeOrEmplExpectElement expectationName="Preferowane miejsce pracy">
					<p>Biuro</p>
				</GradeOrEmplExpectElement>
				<GradeOrEmplExpectElement expectationName="Docelowe miasto, gdzie chce pracować kandydat">
					<p>Warszawa</p>
				</GradeOrEmplExpectElement>
				<GradeOrEmplExpectElement expectationName="Oczekiwany typ kontraktu">
					<p>Umowa o pracę</p>
				</GradeOrEmplExpectElement>
				<GradeOrEmplExpectElement expectationName="Oczekiwane wynagrodzenie miesięczne netto">
					<p>5000zł</p>
				</GradeOrEmplExpectElement>
				<GradeOrEmplExpectElement expectationName="Zgoda na odbycie bezpłatnych praktyk/stażu na początek">
					<p>TAK</p>
				</GradeOrEmplExpectElement>
				<GradeOrEmplExpectElement expectationName="Komercyjne doświadczenie w programowaniu">
					<p>NIE</p>
				</GradeOrEmplExpectElement>
			</EmploymentExpectations>
			<SectionTitle>Edukacja</SectionTitle>
			<TextArea>
				<p>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
					invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
					accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
					sanctus est Lorem ipsum dolor sit amet.
				</p>
			</TextArea>
			<SectionTitle>Kursy</SectionTitle>
			<TextArea>
				<p>{/*{student.courses}*/}</p>
			</TextArea>
			<SectionTitle>Doświadczenie zawodowe</SectionTitle>
			<TextArea>
				<p>{/*{student.experience}*/}</p>
			</TextArea>
			<SectionTitle>Portfolio</SectionTitle>
			<TextArea>
				<Link link={'https://Loremipsum/dolor/sit/amet'} />
			</TextArea>
			<SectionTitle>Projekt w zespole Scrumowym</SectionTitle>
			<TextArea>
				<Link link={'https://Loremipsum/dolor/sit/amet'} />
				<Link link={'https://Loremipsum/dolor/sit/amet'} />
			</TextArea>
			<SectionTitle>Projekt na zaliczenie</SectionTitle>
			<TextArea>
				<Link link={'https://Loremipsum/dolor/sit/amet'} />
				<Link link={'https://Loremipsum/dolor/sit/amet'} />
			</TextArea>
		</StudentAchievementsWrapper>
	);
};
