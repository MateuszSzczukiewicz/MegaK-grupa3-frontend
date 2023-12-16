import { ArrowStyle, StudentRowStyle, ButtonsStyle } from './StudentRow.styles.ts';
import { PrimaryButton } from '../../atoms/PrimaryButton/PrimaryButton';
import { StudentRowInfo } from '../../atoms/StudentRowInfo/StudentRowInfo';
import { ChevronDownIcon } from '../../../assets/icons/ChevronDownIcon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StudentRatings } from '../StudentRatings/StudentRatings';
import { StudentRowPropsType } from '../../../types/StudentsPageProps.types.ts';
import {PatchStudentHired} from "../../../api/hrs/PatchStudentHired";

export const StudentRow = ({
	studentId,
	firstName,
	lastName,
	reservationDate,
	gitHubUserName,
	simplified,
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
}: StudentRowPropsType) => {
	const [showInfo, setShowInfo] = useState(false);

	const arrowStyle = showInfo ? { rotate: '180deg' } : { rotate: '0deg' };
	const navigate = useNavigate();

	const hired = async () => {
		await PatchStudentHired(studentId as String);
	}

	return (
		<StudentRowStyle>
			<StudentRowInfo
				studentId={studentId}
				firstName={firstName}
				lastName={lastName}
				gitHubUserName={gitHubUserName ? `https://github.com/${gitHubUserName}.png` : null}
				reservationDate={!simplified ? reservationDate : null}
			/>

			<ButtonsStyle>
				{simplified ? (
					<PrimaryButton text={'Zarezerwuj rozmowę'} />
				) : (
					<>
						<PrimaryButton text={'Pokaż CV'} onClick={()=>navigate(`/cv/${studentId}`)}/>
						<PrimaryButton text={'Brak zainteresowania'} />
						<PrimaryButton text={'Zatrudniony'} onClick={hired} />
					</>
				)}
				<ArrowStyle style={arrowStyle} onClick={() => setShowInfo((prevState) => !prevState)}>
					<ChevronDownIcon />
				</ArrowStyle>
			</ButtonsStyle>

			{showInfo ? (
				<StudentRatings
					courseCompletion={courseCompletion}
					courseEngagement={courseEngagement}
					projectDegree={projectDegree}
					teamProjectDegree={teamProjectDegree}
					expectedTypeWork={expectedTypeWork}
					targetWorkCity={targetWorkCity}
					expectedContractType={expectedContractType}
					expectedSalary={expectedSalary}
					canTakeApprenticeship={canTakeApprenticeship}
					monthsOfCommercialExp={monthsOfCommercialExp}
				/>
			) : null}
		</StudentRowStyle>
	);
};
