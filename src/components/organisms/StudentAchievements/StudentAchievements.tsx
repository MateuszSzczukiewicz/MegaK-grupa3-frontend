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
import { StudentCVType } from '../../../types/StudentCVType.types.ts';

export const StudentAchievements = ({
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
	education,
	courses,
	workExperience,
	portfolioUrls,
	projectUrls,
	bonusProjectUrls,
}: StudentCVType) => {
	return (
		<StudentAchievementsWrapper>
			<SectionTitle>Oceny</SectionTitle>
			<Grades>
				<EmploymentExpectation expectationName="Ocena przejścia kursu">
					<GradeStars gradeNumber={courseCompletion}></GradeStars>
				</EmploymentExpectation>
				<EmploymentExpectation expectationName="Ocena aktywności i zaangażowania na kursie">
					<GradeStars gradeNumber={courseEngagement}></GradeStars>
				</EmploymentExpectation>
				<EmploymentExpectation expectationName="Ocena kodu w projekcie własnym">
					<GradeStars gradeNumber={projectDegree}></GradeStars>
				</EmploymentExpectation>
				<EmploymentExpectation expectationName="Ocena pracy w zespole Scrum">
					<GradeStars gradeNumber={teamProjectDegree}></GradeStars>
				</EmploymentExpectation>
			</Grades>
			<SectionTitle>Oczekiwanie w stosunku do zatrudnienia</SectionTitle>
			<EmploymentExpectations>
				<EmploymentExpectation expectationName="Preferowane miejsce pracy">
					<p>{expectedTypeWork}</p>
				</EmploymentExpectation>
				<EmploymentExpectation expectationName="Docelowe miasto, gdzie chce pracować kandydat">
					<p>{targetWorkCity}</p>
				</EmploymentExpectation>
				<EmploymentExpectation expectationName="Oczekiwany typ kontraktu">
					<p>{expectedContractType}</p>
				</EmploymentExpectation>
				<EmploymentExpectation expectationName="Oczekiwane wynagrodzenie miesięczne netto">
					<p>{expectedSalary}</p>
				</EmploymentExpectation>
				<EmploymentExpectation expectationName="Zgoda na odbycie bezpłatnych praktyk/stażu na początek">
					<p>{canTakeApprenticeship}</p>
				</EmploymentExpectation>
				<EmploymentExpectation expectationName="Komercyjne doświadczenie w programowaniu">
					<p>{monthsOfCommercialExp}</p>
				</EmploymentExpectation>
			</EmploymentExpectations>
			<SectionTitle>Edukacja</SectionTitle>
			<TextArea>
				<p>{education}</p>
			</TextArea>
			<SectionTitle>Kursy</SectionTitle>
			<TextArea>
				<p>{courses}</p>
			</TextArea>
			<SectionTitle>Doświadczenie zawodowe</SectionTitle>
			<TextArea>
				<p>{workExperience}</p>
			</TextArea>
			<SectionTitle>Portfolio</SectionTitle>
			<TextArea>
				{portfolioUrls &&
					portfolioUrls.length > 0 &&
					portfolioUrls.map(({ portfolioUrl, id }) => <Link link={portfolioUrl} key={id} />)}
			</TextArea>
			<SectionTitle>Projekt w zespole Scrumowym</SectionTitle>
			<TextArea>
				{projectUrls &&
					projectUrls.length > 0 &&
					projectUrls.map(({ projectUrl, id }) => <Link link={projectUrl} key={id} />)}
			</TextArea>
			<SectionTitle>Projekt na zaliczenie</SectionTitle>
			<TextArea>
				{bonusProjectUrls &&
					bonusProjectUrls.length > 0 &&
					bonusProjectUrls.map(({ bonusProjectUrl, id }) => (
						<Link link={bonusProjectUrl} key={id} />
					))}
			</TextArea>
		</StudentAchievementsWrapper>
	);
};
