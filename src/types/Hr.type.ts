import { UserType } from './User.type';
import { StudentEntity } from './StudentFormType.types';

export type HrInterface = {
	id: string;
	fullName: string;
	company: string;
	maxReservationStudent: number;
	studentInterview: HrToStudentInterface[];
	user: UserType;
};

export interface HrToStudentInterface {
	id: string;
	studentId: string;
	hrId: string;
	student: StudentEntity;
	hr: HrInterface;
	reservationTo: Date;
}
