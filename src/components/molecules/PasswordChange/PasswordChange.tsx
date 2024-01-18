import { useContext, useEffect, useState } from 'react';
import { PrimaryButton } from '../../atoms/PrimaryButton/PrimaryButton';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { StyledInput } from '../LoginForm/LoginForm.styles';
import {
	passwordChangeFormSchema,
	PasswordChangeFormSchemaType,
} from '../../../types/PasswordChangeFormSchema.types';
import { ChangePasswordType } from '../../../types/changePassword.type';
import { changePassword } from '../../../api/users/ChangePasswordAPI';
import { UserContext } from '../../../contexts/user.context';

export const PasswordChange = () => {
	const { user } = useContext(UserContext);

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors, isSubmitSuccessful },
	} = useForm<PasswordChangeFormSchemaType>({
		resolver: zodResolver(passwordChangeFormSchema),
	});

	const [formState, setFormState] = useState({
		loading: false,
		submitted: false,
		error: '',
	});

	useEffect(() => {
		reset();
	}, [isSubmitSuccessful]);

	const onSubmit = async ({ currentPassword, newPassword }: ChangePasswordType) => {
		try {
			setFormState((prevState) => ({ ...prevState, loading: true, submitted: false, error: '' }));
			console.log(user);
			console.log(user.userId, currentPassword, newPassword);
			const data = await changePassword({
				userId: user.userId,
				oldPwd: currentPassword,
				newPwd: newPassword,
			});
			if (data.isSuccess) {
				setFormState((prevState) => ({ ...prevState, submitted: true }));
			} else {
				setFormState((prevState) => ({ ...prevState, error: `Wystąpił błąd: ${data.message}` }));
			}
			setFormState((prevState) => ({ ...prevState, loading: false }));
		} catch (err) {
			setFormState((prevState) => ({ ...prevState, loading: false }));
			setFormState((prevState) => ({ ...prevState, error: `Wystąpił błąd: ${err}` }));
		}
	};

	return (
		<>
			<p>Zmień hasło</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="currentPassword"
					control={control}
					defaultValue=""
					render={({ field }) => (
						<StyledInput {...field} type={'password'} placeholder={'Wpisz aktualne hasło'} />
					)}
				/>
				{errors.currentPassword && <p className="error">{errors.currentPassword.message}</p>}
				<Controller
					name="newPassword"
					control={control}
					defaultValue=""
					render={({ field }) => (
						<StyledInput {...field} type={'password'} placeholder={'Wpisz nowe hasło'} />
					)}
				/>
				{errors.newPassword && <p className="error">{errors.newPassword.message}</p>}
				<Controller
					name="repeatPassword"
					control={control}
					defaultValue=""
					render={({ field }) => (
						<StyledInput {...field} type={'password'} placeholder={'Powtórz nowe hasło'} />
					)}
				/>
				{errors.repeatPassword && <p className="error">{errors.repeatPassword.message}</p>}
				{errors.confirm && <p className="error">{errors.confirm.message}</p>}

				<PrimaryButton text="Zatwierdź"></PrimaryButton>
				<p className={formState.error && 'error'}>
					{formState.loading && 'Wysyłanie formularza...'}
					{formState.submitted && `Hasło zostało zmienione.`}
					{formState.error && `${formState.error}`}
				</p>
			</form>
		</>
	);
};
