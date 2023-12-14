import { z } from 'zod';

export const signInSchema = z.object({
	email: z.string().email('Niepoprawny adres email'),
	pwd: z.string(),
});
export type SignInSchemaType = z.infer<typeof signInSchema>;
