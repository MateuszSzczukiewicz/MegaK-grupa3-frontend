import { StudentEntity } from './StudentFormType.types';
import { HrInterface } from './Hr.type';

export type GetUserResponseType =
	| {
			id: string;
			email: string;
			active: boolean;
			role: UserRole;
			student: StudentEntity;
			hr: HrInterface;
	  }
	| {
			message: string;
			isSuccess: false;
	  };

export enum UserRole {
	ADMIN,
	STUDENT,
	HR,
}
