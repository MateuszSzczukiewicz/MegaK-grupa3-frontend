export type AddHrType = {
	email: string;
	fullName: string;
	company: string;
	maxReservationStudents: number;
};

export type CreateHrResponse = { message: string; isSuccess: false } | { isSuccess: true };
