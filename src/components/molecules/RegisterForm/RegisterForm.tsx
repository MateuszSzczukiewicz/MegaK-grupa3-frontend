import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { StyledInput } from '../LoginForm/LoginForm.styles';
import { decomposeLink } from '../../../utils/decomposeLink.ts';
import { registerUser } from '../../../api/user/RegisterUserAPI.ts';
import { RegisterFormType } from '../../../types/RegisterForm.types.ts';
import { StyledButton, StyledForm, StyledP } from './RegisterForm.styles.ts';

export const RegisterForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [formState, setFormState] = useState({
		loading: false,
		submitted: false,
		error: '',
	});

	const onSubmit = async ({ link, password }: RegisterFormType) => {
		const { userId, activationToken } = decomposeLink(link);

		try {
			setFormState((prevState) => ({ ...prevState, loading: true, submitted: false }));
			const data = await registerUser(userId, activationToken, password);
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
		<>
			<StyledP>
				{formState.loading && 'Wysyłanie formularza...'}
				{formState.submitted && 'Formularz został wysłany.'}
				{formState.error && `${formState.error}`}
			</StyledP>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<div>
					<Controller
						name="link"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<StyledInput {...field} type="text" placeholder="Wpisz link aktywujący" />
						)}
					/>
				</div>
				<div>
					<Controller
						name="password"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<StyledInput
								{...field}
								type="password"
								placeholder="Hasło"
								autoComplete="current-password"
							/>
						)}
					/>
					{errors.password && <p>Hasło jest wymagane!</p>}
				</div>
				<StyledButton type="submit">Aktywuj swoje konto</StyledButton>
			</StyledForm>
		</>
	);
};
