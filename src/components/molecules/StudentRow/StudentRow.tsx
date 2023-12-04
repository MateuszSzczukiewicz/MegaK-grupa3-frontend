import { ArrowStyle, StudentRowStyle, ButtonsStyle } from './StudentRow.styles.ts';
import { PrimaryButton } from '../../atoms/PrimaryButton/PrimaryButton';
import { StudentRowInfo } from '../../atoms/StudentRowInfo/StudentRowInfo';
import { ChevronDownIcon } from '../../../assets/icons/ChevronDownIcon';
import { useState } from 'react';
import { StudentRatings } from '../StudentRatings/StudentRatings';
import { StudentRowPropsType } from '../../../types/StudentsPageProps.types.ts';

export const StudentRow = ({
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

	return (
		<StudentRowStyle>
			<StudentRowInfo
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
						<PrimaryButton text={'Pokaż CV'} />
						<PrimaryButton text={'Brak zainteresowania'} />
						<PrimaryButton text={'Zatrudniony'} />
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
