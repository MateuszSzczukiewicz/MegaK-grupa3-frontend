import { useForm, Controller } from 'react-hook-form';
import { StyledInput } from './LoginForm.styles.ts';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../api/user/LoginUserAPI.ts';
import { setUser } from '../../../features/user-slice.ts';
import { UserFormType } from '../../../types/UserForm.types.ts';
import { signInSchema, SignInSchemaType } from '../../../types/SignInSchema.types.ts';
import { zodResolver } from '@hookform/resolvers/zod';

export const LoginForm = () => {
	const navigate = useNavigate();
	// const dispatch = useDispatch();
	const [loginError, setLoginError] = useState('');

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInSchemaType>({
		resolver: zodResolver(signInSchema),
	});

	const onSubmit = async ({ email, pwd }: UserFormType) => {
		console.log('Submitting form with:', { email, pwd });
		try {
			const response = await loginUser(email, pwd);
			if (response.success) {
				// dispatch(setUser(response.user));
				navigate('/students');
			} else {
				setLoginError('Dane logowania nieprawidłowe');
				console.error('Login failed');
			}
		} catch (err) {
			console.error('Login Error:', err);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<Controller
					name="email"
					control={control}
					defaultValue=""
					render={({ field }) => (
						<StyledInput {...field} type="text" placeholder="E-mail" autoComplete="username" />
					)}
				/>
				{errors.email && <p>E-mail jest wymagany</p>}
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
				{errors.pwd && <p>Hasło jest wymagane!</p>}
				{loginError && <p>{loginError}</p>}
			</div>
		</form>
	);
};
