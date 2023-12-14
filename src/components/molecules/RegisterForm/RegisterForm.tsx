import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { StyledInput } from '../LoginForm/LoginForm.styles';
import { StyledButton } from '../../organisms/Register/Register.styles.ts';
import { decomposeLink } from '../../../utils/decomposeLink.ts';
import { registerUser } from '../../../api/user/RegisterUserAPI.ts';
import { RegisterFormType } from '../../../types/RegisterForm.types.ts';

export const RegisterForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = async ({ link, password }: RegisterFormType) => {
		const { userId, activationToken } = decomposeLink(link);

		try {
			await registerUser(userId, activationToken, password);
		} catch (err) {
			console.error('Error during registration:', err);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
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
		</form>
	);
};
