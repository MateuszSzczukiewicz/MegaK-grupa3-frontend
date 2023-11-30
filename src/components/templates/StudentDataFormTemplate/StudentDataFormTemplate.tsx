import { Controller, useForm } from 'react-hook-form';
import { StyledInput } from '../../molecules/LoginForm/LoginForm.styles';
import { PrimaryButton } from '../../atoms/PrimaryButton/PrimaryButton';
import { StudentFormWrapper, StyledSelect, StyledTextArea } from './StudentDataFormTemplate.styles';

export const StudentDataFormTemplate = () => {
	const {
		handleSubmit,
		formState: { errors, isSubmitting },
		control,
	} = useForm();
	return (
		<StudentFormWrapper>
			<form onSubmit={handleSubmit((data) => console.log(data))}>
				<div>
					<Controller
						name="email"
						control={control}
						required
						render={({ field }) => <StyledInput {...field} type="email" placeholder="E-mail" />}
					/>
					{errors.email && <p>E-mail jest wymagany</p>}
				</div>
				<div>
					<Controller
						name="phone"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<StyledInput {...field} type="tel" placeholder="Numer telefonu" />
						)}
					/>
				</div>
				<div>
					<Controller
						name="firstName"
						control={control}
						required
						render={({ field }) => <StyledInput {...field} type="text" placeholder="Imię" />}
					/>
					{errors.firstName && <p>Imię jest wymagane!</p>}
				</div>
				<div>
					<Controller
						name="lastName"
						control={control}
						required
						render={({ field }) => <StyledInput {...field} type="text" placeholder="Nazwisko" />}
					/>
					{errors.firstName && <p>Nazwisko jest wymagane!</p>}
				</div>
				<div>
					<Controller
						name="githubUsername"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<StyledInput {...field} type="text" placeholder="Login GitHuba" />
						)}
					/>
				</div>
				<div>
					<Controller
						name="portfolioUrl1"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<StyledInput {...field} type="url" placeholder="Link do portfolio (1)" />
						)}
					/>
				</div>
				<div>
					<Controller
						name="portfolioUrl2"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<StyledInput {...field} type="url" placeholder="Link do portfolio (2)" />
						)}
					/>
				</div>
				<div>
					<Controller
						name="portfolioUrl3"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<StyledInput {...field} type="url" placeholder="Link do portfolio (3)" />
						)}
					/>
				</div>
				<div>
					<Controller
						name="projectUrl1"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<StyledInput
								{...field}
								type="url"
								placeholder="Link do projektu zaliczeniowego (1)"
							/>
						)}
					/>
				</div>
				<div>
					<Controller
						name="projectUrl2"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<StyledInput
								{...field}
								type="url"
								placeholder="Link do projektu zaliczeniowego (2)"
							/>
						)}
					/>
				</div>
				<div>
					<Controller
						name="projectUrl3"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<StyledInput
								{...field}
								type="url"
								placeholder="Link do projektu zaliczeniowego (3)"
							/>
						)}
					/>
				</div>
				<div>
					<Controller
						name="bio"
						control={control}
						defaultValue=""
						render={({ field }) => <StyledTextArea {...field} placeholder="Bio" />}
					/>
				</div>
				<div>
					<Controller
						name="expectedTypeWork"
						control={control}
						defaultValue="noMatter"
						render={({ field }) => (
							<StyledSelect {...field} placeholder="Preferowane miejsce pracy">
								<option value="onPlace">Na miejscu</option>
								<option value="readinessToMove">Gotowość do przeprowadzki</option>
								<option value="remoteOnly">Wyłącznie zdalnie</option>
								<option value="hybrid">Hybrydowo</option>
								<option value="noMatter">Bez znaczenia</option>
							</StyledSelect>
						)}
					/>
				</div>
				<div>
					<Controller
						name="targetWorkCity"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<StyledInput {...field} type="text" placeholder="Miasto docelowe" />
						)}
					/>
				</div>
				<div>
					<Controller
						name="expectedContractType"
						control={control}
						defaultValue="noMatter"
						render={({ field }) => (
							<StyledSelect {...field} placeholder="Oczekiwany typ kontraktu">
								<option value="contractOfEmployment">Tylko UoP</option>
								<option value="b2b">Możliwe B2B</option>
								<option value="mandateContract">Możliwe UZ/UoD</option>
								<option value="noMatter">Brak preferencji</option>
							</StyledSelect>
						)}
					/>
				</div>
				<div>
					<Controller
						name="targetWorkCity"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<StyledInput
								{...field}
								type="text"
								placeholder="Oczekiwane wynagrodzenie miesięczne netto (zł)"
							/>
						)}
					/>
				</div>
				<div>
					<Controller
						name="canTakeApprenticeship"
						control={control}
						defaultValue="no"
						render={({ field }) => (
							<StyledSelect {...field} placeholder="Oczekiwany typ kontraktu">
								<option value="yes">Tak</option>
								<option value="no">Nie</option>
							</StyledSelect>
						)}
					/>
				</div>
				<div>
					<Controller
						name="monthsOfCommercialExp"
						control={control}
						defaultValue="0"
						render={({ field }) => (
							<StyledInput
								{...field}
								type="number"
								placeholder="Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu"
							/>
						)}
					/>
				</div>
				<div>
					<Controller
						name="education"
						control={control}
						defaultValue=""
						render={({ field }) => <StyledTextArea {...field} placeholder="Przebieg edukacji" />}
					/>
				</div>
				<div>
					<Controller
						name="workExperience"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<StyledTextArea {...field} placeholder="Przebieg doświadczenia zawodowego" />
						)}
					/>
				</div>
				<div>
					<Controller
						name="courses"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<StyledTextArea
								{...field}
								placeholder="Kursy i certyfikaty związane z programowaniem"
							/>
						)}
					/>
				</div>
				<PrimaryButton text="Wyślij formularz"></PrimaryButton>
			</form>
		</StudentFormWrapper>
	);
};
