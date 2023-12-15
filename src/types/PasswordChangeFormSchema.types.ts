import { z } from 'zod';

export const passwordChangeFormSchema = z
	.object({
		currentPassword: z.string({ required_error: 'To pole jest wymagane!' }).min(1, {
			message: 'To pole jest wymagane!',
		}),
		newPassword: z.string({ required_error: 'To pole jest wymagane!' }).min(1, {
			message: 'To pole jest wymagane!',
		}),
		repeatPassword: z.string({ required_error: 'To pole jest wymagane!' }).min(1, {
			message: 'To pole jest wymagane!',
		}),
	})
	.refine((data) => data.newPassword === data.repeatPassword, {
		message: 'Podane hasła nie są takie same.',
		path: ['confirm'],
	});

export type PasswordChangeFormSchemaType = z.infer<typeof passwordChangeFormSchema>;
