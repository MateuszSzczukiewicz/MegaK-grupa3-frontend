import { useForm } from 'react-hook-form';

export const StudentDataFormTemplate = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
		getValues,
	} = useForm();
	return <form onSubmit={handleSubmit((data) => console.log(data))}></form>;
};
