import { useForm, Controller } from 'react-hook-form';
import {
	StyledButton,
	StyledForm,
	StyledInput,
	StyledP,
	Wrapper,
	StyledButtons,
} from './LoginForm.styles.ts';
import { useContext, useState } from 'react';
import { loginUser } from '../../../api/users/LoginUserAPI.ts';
import { UserFormType } from '../../../types/UserForm.types.ts';
import { signInSchema, SignInSchemaType } from '../../../types/SignInSchema.types.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserContext } from '../../../contexts/user.context';
import { RegisterButton } from '../../atoms/RegisterButton/RegisterButton';
import { recoverPassword } from '../../../api/users/RecoverPasswordAPI';

export const LoginForm = () => {
	const [loginError, setLoginError] = useState('');
	const { setUser } = useContext(UserContext);
	const [info, setInfo] = useState('');

	const {
		control,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<SignInSchemaType>({
		resolver: zodResolver(signInSchema),
	});

	const handleClick = async () => {
		setLoginError('');
		setInfo('');
		const recover = {
			email: watch('email'),
		};
		try {
			if (recover.email === '') {
				setInfo('Wpisz email aby odzyskać hasło.');
			} else {
				const data = await recoverPassword(recover);
				if (data.isSuccess) {
					setInfo('Nowe hasło zostało wysłane na Twój email.');
				} else {
					setInfo('Wystąpił błąd.');
				}
			}
		} catch (err) {
			setInfo(`Wystąpił błąd: ${err}`);
		}
	};

	const onSubmit = async ({ email, pwd }: UserFormType) => {
		setLoginError('');
		setInfo('');
		try {
			console.log(email, pwd);
			const response = await loginUser(email, pwd);
			if (response.isSuccess) {
				setUser({
					userFullName: response.userFullName,
					userId: response.userId,
					userRole: response.userRole,
				});
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
			{info && <StyledP>{info}</StyledP>}
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
			<Wrapper>
				<StyledButtons type="button" onClick={handleClick}>
					Zapomniałeś hasła?
				</StyledButtons>
				<RegisterButton />
			</Wrapper>
		</StyledForm>
	);
};
