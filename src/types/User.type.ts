import { HrInterface } from './Hr.type';
import { UserRole } from './GetUserResponse.type';
import { StudentEntity } from './StudentFormType.types';

export type UserType = {
	userFullName: string;
	userId: string;
	userRole: number | null;
};

export type FindOneUserResponse = {
	id: string;
	email: string;
	active: boolean;
	role: UserRole;
	student: StudentEntity;
	hr: HrInterface;
};
