import { useForm, Controller } from 'react-hook-form';
import { StyledInput } from './LoginForm.styles.ts';

export const LoginForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async () => {
		console.log('logged');
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
				{errors.username && <p>E-mail jest wymagany</p>}
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
		</form>
	);
};
