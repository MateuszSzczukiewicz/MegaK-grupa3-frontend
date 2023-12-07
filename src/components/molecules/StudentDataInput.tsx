import { ReactNode, FC, ChangeEvent } from 'react';
import { Controller, Control, FieldError } from 'react-hook-form';
import { StyledInput } from './LoginForm/LoginForm.styles';
import { StudentFormType } from '../../types/StudentFormType.types.ts';

interface StudentDataInputProps {
	label: ReactNode;
	name: string;
	type: string;
	control: Control;
	error?: FieldError;
	userData: StudentFormType;
}

export const StudentDataInput: FC<StudentDataInputProps> = ({
	label,
	name,
	type,
	control,
	error,
	userData,
}: StudentDataInputProps) => (
	<label>
		{label}
		<br />
		<Controller
			name={name}
			control={control}
			defaultValue={userData ? userData.name ?? '' : ''}
			render={({ field }) => (
				<StyledInput
					{...field}
					type={type}
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						field.onChange(e);
					}}
				/>
			)}
		/>
		{error && <p>{error.message}</p>}
	</label>
);
