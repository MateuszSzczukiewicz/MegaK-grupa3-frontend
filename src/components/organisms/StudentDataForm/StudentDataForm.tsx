import { Controller, useForm } from 'react-hook-form';
import { StyledInput } from '../../molecules/LoginForm/LoginForm.styles';
import { PrimaryButton } from '../../atoms/PrimaryButton/PrimaryButton';
import { StudentFormWrapper, StyledSelect, StyledTextArea } from './StudentDataForm.styles';
import { useCallback, useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	studentFormSchema,
	StudentFormSchemaType,
} from '../../../types/StudentFormSchemaType.types';
import { showNextPortfolioInput, showNextProjectInput } from '../../../utils/showNextInput';
import {
	canTakeApprenticeshipEnum,
	expectedContractTypeEnum,
	expectedTypeWorkEnum,
} from '../../../types/StudentForm.enum';
import { StudentEntity, StudentFormType } from '../../../types/StudentFormType.types';
import { updateStudent } from '../../../api/students/UpdateStudentAPI';
import { getStudent } from '../../../api/students/GetStudentAPI';

export const StudentDataForm = ({ id }: { id: string }) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<StudentFormSchemaType>({
		resolver: zodResolver(studentFormSchema),
	});

	const [isPortfolioInputHidden, setIsPortfolioInputHidden] = useState([true, true, true]);
	const [isProjectInputHidden, setIsProjectInputHidden] = useState([true, true]);
	const [formState, setFormState] = useState({
		loading: false,
		submitted: false,
		error: '',
	});
	const [userData, setUserData] = useState<StudentEntity | null>(null);
	const [downloadUserData, setDownloadUserData] = useState(false);

	const fetchData = useCallback(async () => {
		try {
			const data = await getStudent(id);
			if (data.id) {
				setUserData(data);
				setDownloadUserData(true);
			} else {
				setDownloadUserData(true);
			}
		} catch (error) {
			console.error(error);
			setDownloadUserData(true);
		}
	}, [id]);

	useEffect(() => {
		(async () => {
			try {
				await fetchData();
			} catch (e) {
				console.error('Error fetching students:', e);
			}
		})();
	}, [fetchData]);

	const onSubmit = async ({
		email,
		tel,
		firstName,
		lastName,
		gitHubUserName,
		portfolioUrl1,
		portfolioUrl2,
		portfolioUrl3,
		portfolioUrl4,
		projectUrl1,
		projectUrl2,
		projectUrl3,
		bio,
		expectedTypeWork,
		targetWorkCity,
		expectedContractType,
		expectedSalary,
		canTakeApprenticeship,
		monthsOfCommercialExp,
		education,
		workExperience,
		courses,
	}: StudentFormType) => {
		try {
			setFormState((prevState) => ({ ...prevState, loading: true, submitted: false }));
			const dataForUpdate = {
				email,
				tel,
				firstName,
				lastName,
				gitHubUserName,
				portfolioUrls: [portfolioUrl1, portfolioUrl2, portfolioUrl3, portfolioUrl4].filter(
					(url) => url?.length > 0,
				),
				projectUrls: [projectUrl1, projectUrl2, projectUrl3].filter((url) => url?.length > 0),
				bio,
				expectedTypeWork,
				targetWorkCity,
				expectedContractType,
				expectedSalary,
				canTakeApprenticeship,
				monthsOfCommercialExp,
				education,
				workExperience,
				courses,
			};
			console.log(dataForUpdate);

			const data = await updateStudent({ id, dataForUpdate });
			if (data.isSuccess) {
				setFormState((prevState) => ({ ...prevState, submitted: true }));
			} else {
				setFormState((prevState) => ({ ...prevState, submitted: true }));
				setFormState((prevState) => ({ ...prevState, error: `Wystąpił błąd: ${data.error}` }));
			}
			setFormState((prevState) => ({ ...prevState, loading: false }));
		} catch (err) {
			console.error(err);
			setFormState((prevState) => ({ ...prevState, loading: false }));
			setFormState((prevState) => ({ ...prevState, error: `Wystąpił błąd: ${err}` }));
		}
	};

	return (
		downloadUserData && (
			<StudentFormWrapper>
				<p>
					{formState.loading && 'Wysyłanie formularza...'}
					{formState.submitted && 'Formularz został wysłany.'}
					{formState.error && `${formState.error}`}
				</p>
				<h2>Dodaj lub edytuj swoje dane:</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div>
						<label>
							E-mail* <br />
							<Controller
								name="email"
								control={control}
								defaultValue={userData ? userData.email ?? '' : ''}
								render={({ field }) => <StyledInput {...field} type="email" />}
							/>
							{errors.email && <p>{errors.email.message}</p>}
						</label>
						<label>
							Numer telefonu <br />
							<Controller
								name="tel"
								control={control}
								defaultValue={userData ? userData.tel ?? '' : ''}
								render={({ field }) => <StyledInput {...field} type="tel" />}
							/>
							{errors.tel && <p>{errors.tel.message}</p>}
						</label>
						<label>
							Imię* <br />
							<Controller
								name="firstName"
								control={control}
								defaultValue={userData?.firstName ?? ''}
								render={({ field }) => <StyledInput {...field} type="text" />}
							/>
							{errors.firstName && <p>{errors.firstName.message}</p>}
						</label>
						<label>
							Nazwisko* <br />
							<Controller
								name="lastName"
								control={control}
								defaultValue={userData ? userData.lastName : ''}
								render={({ field }) => <StyledInput {...field} type="text" />}
							/>
							{errors.lastName && <p>{errors.lastName.message}</p>}
						</label>
						<label>
							Login GitHuba <br />
							<Controller
								name="gitHubUserName"
								control={control}
								defaultValue={userData ? userData.gitHubUserName ?? '' : ''}
								render={({ field }) => <StyledInput {...field} type="text" />}
							/>
							{errors.gitHubUserName && <p>{errors.gitHubUserName.message}</p>}
						</label>
						<label>
							Linki do portfolio <br />
							<Controller
								name="portfolioUrl1"
								control={control}
								defaultValue={userData ? userData.portfolioUrls[0]?.portfolioUrl : ''}
								render={({ field }) => (
									<StyledInput
										{...field}
										type="text"
										onChange={(e) => {
											field.onChange(e);
											showNextPortfolioInput({ e, setIsPortfolioInputHidden });
										}}
									/>
								)}
							/>
							{errors.portfolioUrl1 && <p>{errors.portfolioUrl1.message}</p>}
							<Controller
								name="portfolioUrl2"
								control={control}
								defaultValue={userData ? userData.portfolioUrls[1]?.portfolioUrl : ''}
								render={({ field }) => (
									<StyledInput
										{...field}
										type="url"
										onChange={(e) => {
											field.onChange(e);
											showNextPortfolioInput({ e, setIsPortfolioInputHidden });
										}}
										className={`${isPortfolioInputHidden[0] && !field.value && 'hidden'}`}
									/>
								)}
							/>
							{errors.portfolioUrl2 && <p>{errors.portfolioUrl2.message}</p>}
							<Controller
								name="portfolioUrl3"
								control={control}
								defaultValue={userData ? userData.portfolioUrls[2]?.portfolioUrl : ''}
								render={({ field }) => (
									<StyledInput
										{...field}
										type="url"
										onChange={(e) => {
											field.onChange(e);
											showNextPortfolioInput({ e, setIsPortfolioInputHidden });
										}}
										className={`${isPortfolioInputHidden[1] && !field.value && 'hidden'}`}
									/>
								)}
							/>
							{errors.portfolioUrl3 && <p>{errors.portfolioUrl3.message}</p>}
							<Controller
								name="portfolioUrl4"
								control={control}
								defaultValue={userData ? userData.portfolioUrls[3]?.portfolioUrl : ''}
								render={({ field }) => (
									<StyledInput
										{...field}
										type="url"
										onChange={(e) => {
											field.onChange(e);
											showNextPortfolioInput({ e, setIsPortfolioInputHidden });
										}}
										className={`${isPortfolioInputHidden[2] && !field.value && 'hidden'}`}
									/>
								)}
							/>
							{errors.portfolioUrl4 && <p>{errors.portfolioUrl4.message}</p>}
						</label>
						<label>
							Linki do projektu zaliczeniowego <br />
							<Controller
								name="projectUrl1"
								control={control}
								defaultValue={userData ? userData.projectUrls[0]?.projectUrl : ''}
								render={({ field }) => (
									<StyledInput
										{...field}
										type="url"
										onChange={(e) => {
											field.onChange(e);
											showNextProjectInput({ e, setIsProjectInputHidden });
										}}
									/>
								)}
							/>
							{errors.projectUrl1 && <p>{errors.projectUrl1.message}</p>}
							<Controller
								name="projectUrl2"
								control={control}
								defaultValue={userData ? userData.projectUrls[1]?.projectUrl : ''}
								render={({ field }) => (
									<StyledInput
										{...field}
										type="url"
										onChange={(e) => {
											field.onChange(e);
											showNextProjectInput({ e, setIsProjectInputHidden });
										}}
										className={`${isProjectInputHidden[0] && !field.value && 'hidden'}`}
									/>
								)}
							/>
							{errors.projectUrl2 && <p>{errors.projectUrl2.message}</p>}
							<Controller
								name="projectUrl3"
								control={control}
								defaultValue={userData ? userData.projectUrls[2]?.projectUrl : ''}
								render={({ field }) => (
									<StyledInput
										{...field}
										type="url"
										onChange={(e) => {
											field.onChange(e);
											showNextProjectInput({ e, setIsProjectInputHidden });
										}}
										className={`${isProjectInputHidden[1] && !field.value && 'hidden'}`}
									/>
								)}
							/>
							{errors.projectUrl3 && <p>{errors.projectUrl3.message}</p>}
						</label>
						<label className="large">
							Bio <br />
							<Controller
								name="bio"
								control={control}
								defaultValue={userData?.bio || ''}
								render={({ field }) => <StyledTextArea {...field} />}
							/>
							{errors.bio && <p>{errors.bio.message}</p>}
						</label>
						<label>
							Preferowane miejsce pracy <br />
							<Controller
								name="expectedTypeWork"
								control={control}
								defaultValue={userData ? userData.expectedTypeWork : 'Bez znaczenia'}
								render={({ field }) => (
									<StyledSelect {...field}>
										<option value={expectedTypeWorkEnum.LOCAL}>Na miejscu</option>
										<option value={expectedTypeWorkEnum.FLEXIBLE}>Gotowość do przeprowadzki</option>
										<option value={expectedTypeWorkEnum.REMOTE}>Wyłącznie zdalnie</option>
										<option value={expectedTypeWorkEnum.HYBRID}>Hybrydowo</option>
										<option value={expectedTypeWorkEnum.NOT_IMPORTANT}>Bez znaczenia</option>
									</StyledSelect>
								)}
							/>
						</label>
						<label>
							Miasto docelowe, gdzie chciałbyś/chciałabyś pracować <br />
							<Controller
								name="targetWorkCity"
								control={control}
								defaultValue={userData ? userData.targetWorkCity ?? '' : ''}
								render={({ field }) => <StyledInput {...field} type="text" />}
							/>
						</label>
						<label>
							Oczekiwany typ kontraktu <br />
							<Controller
								name="expectedContractType"
								control={control}
								defaultValue={userData ? userData.expectedContractType : 'Brak preferencji'}
								render={({ field }) => (
									<StyledSelect {...field}>
										<option value={expectedContractTypeEnum.UOP}>Tylko UoP</option>
										<option value={expectedContractTypeEnum.B2B}>Możliwe B2B</option>
										<option value={expectedContractTypeEnum.UZ_UOD}>Możliwe UZ/UoD</option>
										<option value={expectedContractTypeEnum.NOT_IMPORTANT}>Brak preferencji</option>
									</StyledSelect>
								)}
							/>
						</label>
						<label>
							Oczekiwane wynagrodzenie miesięczne netto (zł) <br />
							<Controller
								name="expectedSalary"
								control={control}
								defaultValue={userData ? userData.expectedSalary ?? '' : ''}
								render={({ field }) => <StyledInput {...field} type="number" min="0" />}
							/>
							{errors.expectedSalary && <p>{errors.expectedSalary.message}</p>}
						</label>
						<label>
							Czy wyrażasz zgodę na odbycie bezpłatnych praktyk/stażu na początek? <br />
							<Controller
								name="canTakeApprenticeship"
								control={control}
								defaultValue={userData ? userData.canTakeApprenticeship : 'nie'}
								render={({ field }) => (
									<StyledSelect {...field}>
										<option value={canTakeApprenticeshipEnum.YES}>Tak</option>
										<option value={canTakeApprenticeshipEnum.NO}>Nie</option>
									</StyledSelect>
								)}
							/>
						</label>
						<label>
							Ilość miesięcy doświadczenia komercyjnego w programowaniu <br />
							<Controller
								name="monthsOfCommercialExp"
								control={control}
								defaultValue={userData ? userData.monthsOfCommercialExp ?? 0 : 0}
								render={({ field }) => <StyledInput {...field} type="number" min="0" />}
							/>
						</label>
						<label className="large">
							Przebieg edukacji <br />
							<Controller
								name="education"
								control={control}
								defaultValue={userData ? userData.education ?? '' : ''}
								render={({ field }) => <StyledTextArea {...field} />}
							/>
							{errors.education && <p>{errors.education.message}</p>}
						</label>
						<label className="large">
							Przebieg doświadczenia zawodowego <br />
							<Controller
								name="workExperience"
								control={control}
								defaultValue={userData ? userData.workExperience ?? '' : ''}
								render={({ field }) => <StyledTextArea {...field} />}
							/>
							{errors.workExperience && <p>{errors.workExperience.message}</p>}
						</label>
						<label className="large">
							Kursy i certyfikaty związane z programowaniem <br />
							<Controller
								name="courses"
								control={control}
								defaultValue={userData ? userData.courses ?? '' : ''}
								render={({ field }) => <StyledTextArea {...field} />}
							/>
							{errors.courses && <p>{errors.courses.message}</p>}
						</label>
					</div>
					<PrimaryButton text="Wyślij formularz"></PrimaryButton>
				</form>
			</StudentFormWrapper>
		)
	);
};
