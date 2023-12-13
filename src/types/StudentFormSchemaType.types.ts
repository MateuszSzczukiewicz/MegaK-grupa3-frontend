import { z } from 'zod';
import {
	canTakeApprenticeshipEnum,
	expectedContractTypeEnum,
	expectedTypeWorkEnum,
} from './StudentForm.enum.ts';
import { checkGithubLogin } from '../utils/checkGithubLogin';

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

export const studentFormSchema = z.object({
	email: z
		.string({ required_error: 'E-mail jest wymagany!' })
		.email('Niepoprawny adres e-mail.')
		.min(1, {
			message: 'E-mail jest wymagany!',
		}),
	tel: z.string().regex(phoneRegex, 'Niepoprawny numer telefonu.').or(z.literal('')).optional(),
	firstName: z.string({ required_error: 'Imię jest wymagane!' }).min(1, {
		message: 'Imię jest wymagane!',
	}),
	lastName: z.string({ required_error: 'Nazwisko jest wymagane!' }).min(1, {
		message: 'Nazwisko jest wymagane!',
	}),
	gitHubUserName: z
		.string()
		.refine(async (gitHubLogin) => await checkGithubLogin(gitHubLogin), {
			message: 'Podany login GitHub nie istnieje.',
		})
		.or(z.literal(''))
		.optional(),
	portfolioUrl1: z.string().url('Nieprawidłowy link.').or(z.literal('')).optional(),
	portfolioUrl2: z.string().url('Nieprawidłowy link.').or(z.literal('')).optional(),
	portfolioUrl3: z.string().url('Nieprawidłowy link.').or(z.literal('')).optional(),
	portfolioUrl4: z.string().url('Nieprawidłowy link.').or(z.literal('')).optional(),
	projectUrl1: z.string().url('Nieprawidłowy link.').or(z.literal('')).optional(),
	projectUrl2: z.string().url('Nieprawidłowy link.').or(z.literal('')).optional(),
	projectUrl3: z.string().url('Nieprawidłowy link.').or(z.literal('')).optional(),
	bio: z.string().optional(),
	expectedTypeWork: z.enum(Object.values(expectedTypeWorkEnum) as [string, ...string[]]),
	targetWorkCity: z.string().optional(),
	expectedContractType: z.enum(Object.values(expectedContractTypeEnum) as [string, ...string[]]),
	expectedSalary: z.string().optional(),
	canTakeApprenticeship: z.enum(Object.values(canTakeApprenticeshipEnum) as [string, ...string[]]),
	monthsOfCommercialExp: z.coerce.number().min(0, 'Musisz podać liczbę dodatnią.').optional(),
	education: z.string().optional(),
	workExperience: z.string().optional(),
	courses: z.string().optional(),
});

export type StudentFormSchemaType = z.infer<typeof studentFormSchema>;
