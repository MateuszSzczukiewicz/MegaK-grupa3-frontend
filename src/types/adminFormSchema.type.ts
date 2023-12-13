import { z } from 'zod';

export const adminFormSchema = z.object({
	email: z
		.string({ required_error: 'E-mail jest wymagany!' })
		.email('Niepoprawny adres e-mail.')
		.min(1, {
			message: 'E-mail jest wymagany!',
		}),
	fullName: z.string({ required_error: 'Imię i nazwisko jest wymagane!' }).min(1, {
		message: 'Imię i nazwisko jest wymagane!!',
	}),
	company: z.string({ required_error: 'Nazwa firmy jest wymagana!' }).min(1, {
		message: 'Nazwa firmy jest wymagana!',
	}),
	maxReservationStudents: z.coerce
		.number({ required_error: 'Pole jest wymagane!' })
		.int('Podaj liczbę całkowitą.')
		.min(1, 'Liczba musi być większa od 0.')
		.max(999, 'Liczba musi być mniejsza niż 1000.'),
});

export type AdminFormSchemaType = z.infer<typeof adminFormSchema>;
