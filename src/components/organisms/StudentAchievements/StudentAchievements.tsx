import { SectionTitle } from '../../atoms/SectionTitle/SectionTitle';
import {
	StudentAchievementsWrapper,
	EmploymentExpectations,
	Grades,
} from './StudentAchievements.styles';
import { TextArea } from '../../atoms/TextArea/TextArea';
import { Link } from '../../atoms/Link/Link';
import { EmploymentExpectation } from '../../molecules/EmploymentExpectation/EmploymentExpectation.tsx';
import { GradeStars } from '../../atoms/GradeStars/GradeStars';

export const StudentAchievements = () => {
	return (
		<StudentAchievementsWrapper>
			<SectionTitle>Oceny</SectionTitle>
			<Grades>
				<EmploymentExpectation expectationName="Ocena przejścia kursu">
					<GradeStars gradeNumber={1}></GradeStars>
				</EmploymentExpectation>
				<EmploymentExpectation expectationName="Ocena aktywności i zaangażowania na kursie">
					<GradeStars gradeNumber={2}></GradeStars>
				</EmploymentExpectation>
				<EmploymentExpectation expectationName="Ocena kodu w projekcie własnym">
					<GradeStars gradeNumber={3}></GradeStars>
				</EmploymentExpectation>
				<EmploymentExpectation expectationName="Ocena pracy w zespole Scrum">
					<GradeStars gradeNumber={4}></GradeStars>
				</EmploymentExpectation>
			</Grades>
			<SectionTitle>Oczekiwanie w stosunku do zatrudnienia</SectionTitle>
			<EmploymentExpectations>
				<EmploymentExpectation expectationName="Preferowane miejsce pracy">
					<p>Biuro</p>
				</EmploymentExpectation>
				<EmploymentExpectation expectationName="Docelowe miasto, gdzie chce pracować kandydat">
					<p>Warszawa</p>
				</EmploymentExpectation>
				<EmploymentExpectation expectationName="Oczekiwany typ kontraktu">
					<p>Umowa o pracę</p>
				</EmploymentExpectation>
				<EmploymentExpectation expectationName="Oczekiwane wynagrodzenie miesięczne netto">
					<p>5000zł</p>
				</EmploymentExpectation>
				<EmploymentExpectation expectationName="Zgoda na odbycie bezpłatnych praktyk/stażu na początek">
					<p>TAK</p>
				</EmploymentExpectation>
				<EmploymentExpectation expectationName="Komercyjne doświadczenie w programowaniu">
					<p>NIE</p>
				</EmploymentExpectation>
			</EmploymentExpectations>
			<SectionTitle>Edukacja</SectionTitle>
			<TextArea>
				<p>{/*{student.education}*/}</p>
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
