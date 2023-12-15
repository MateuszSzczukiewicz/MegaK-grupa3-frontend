import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PrimaryButton } from '../../atoms/PrimaryButton/PrimaryButton';
import { adminFormSchema, AdminFormSchemaType } from '../../../types/adminFormSchema.type';
import { AddHrType } from '../../../types/addHr.type';
import { StyledInput } from '../../molecules/LoginForm/LoginForm.styles';
import { AdminFormWrapper } from './AdminAddHrForm.style';
import { addHr } from '../../../api/hrs/AddHr';

export const AdminAddHrForm = () => {
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors, isSubmitSuccessful },
	} = useForm<AdminFormSchemaType>({
		resolver: zodResolver(adminFormSchema),
	});

	const [formState, setFormState] = useState({
		loading: false,
		submitted: false,
		error: '',
	});

	const [data, setData] = useState<AddHrType | null>(null);

	useEffect(() => {
		reset();
	}, [isSubmitSuccessful]);

	const onSubmit = async ({ email, fullName, company, maxReservationStudents }: AddHrType) => {
		setData(null);
		try {
			setFormState((prevState) => ({ ...prevState, loading: true, submitted: false, error: '' }));

			const data = await addHr({ email, fullName, company, maxReservationStudents });
			console.log(data);
			if (data.isSuccess) {
				setFormState((prevState) => ({ ...prevState, submitted: true }));
				setData({ email, fullName, company, maxReservationStudents });
			} else {
				console.log(data);
				setFormState((prevState) => ({ ...prevState, error: `Wystąpił błąd: ${data.message}` }));
			}
			setFormState((prevState) => ({ ...prevState, loading: false }));
		} catch (err) {
			console.log(err);
			setFormState((prevState) => ({ ...prevState, loading: false }));
			setFormState((prevState) => ({ ...prevState, error: `Wystąpił błąd: ${err}` }));
		}
	};

	return (
		<AdminFormWrapper>
			<p className={formState.error && 'error'}>
				{formState.loading && 'Wysyłanie formularza...'}
				{formState.submitted &&
					`Poprawnie dodano osobę z HR:  ${data?.fullName}, ${data?.company}.`}
				{formState.error && `${formState.error}`}
			</p>
			<h2>Dodaj HR do bazy danych:</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label>
						E-mail* <br />
						<Controller
							name="email"
							control={control}
							defaultValue=""
							render={({ field }) => <StyledInput {...field} type="email" />}
						/>
						{errors.email && <p>{errors.email.message}</p>}
					</label>
					<label>
						Imię i nazwisko* <br />
						<Controller
							name="fullName"
							control={control}
							defaultValue=""
							render={({ field }) => <StyledInput {...field} type="text" />}
						/>
						{errors.fullName && <p>{errors.fullName.message}</p>}
					</label>
					<label>
						Nazwa firmy* <br />
						<Controller
							name="company"
							control={control}
							defaultValue=""
							render={({ field }) => <StyledInput {...field} type="text" />}
						/>
						{errors.company && <p>{errors.company.message}</p>}
					</label>
					<label>
						Maksymalna liczba osób "Do rozmowy"* <br />
						<Controller
							name="maxReservationStudents"
							control={control}
							render={({ field }) => <StyledInput {...field} type="number" min="0" />}
						/>
						{errors.maxReservationStudents && <p>{errors.maxReservationStudents.message}</p>}
					</label>
				</div>
				<PrimaryButton text="Dodaj do bazy danych"></PrimaryButton>
			</form>
		</AdminFormWrapper>
	);
};
