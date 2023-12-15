import { useForm, Controller } from 'react-hook-form';
import { StyledButton, StyledForm, StyledInput, StyledP } from './LoginForm.styles.ts';
import { useContext, useState } from 'react';
import { loginUser } from '../../../api/user/LoginUserAPI.ts';
import { UserFormType } from '../../../types/UserForm.types.ts';
import { signInSchema, SignInSchemaType } from '../../../types/SignInSchema.types.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserContext } from '../../../contexts/user.context';

export const LoginForm = ({ onLogin }: { onLogin: (role: number) => void }) => {
	const [loginError, setLoginError] = useState('');
	const { setUser } = useContext(UserContext);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInSchemaType>({
		resolver: zodResolver(signInSchema),
	});

	const onSubmit = async ({ email, pwd }: UserFormType) => {
		try {
			const response = await loginUser(email, pwd);
			setUser({
				userFullName: response.userFullName,
				userId: response.userId,
				userRole: response.userRole,
			});
			if (response.isSuccess) {
				onLogin(response.userRole);
			} else {
				setLoginError('Dane logowania nieprawidłowe');
				console.error('Login failed');
			}
		} catch (err) {
			console.error('Login Error:', err);
		}
	};

	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			{loginError && <StyledP>{loginError}</StyledP>}
			{errors.email && <StyledP>E-mail jest wymagany</StyledP>}
			<div>
				<Controller
					name="email"
					control={control}
					defaultValue=""
					render={({ field }) => (
						<StyledInput {...field} type="text" placeholder="E-mail" autoComplete="username" />
					)}
				/>
			</div>
			<div>
				<Controller
					name="pwd"
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
			</div>
			<StyledButton type="submit">Zaloguj się</StyledButton>
		</StyledForm>
	);
};
