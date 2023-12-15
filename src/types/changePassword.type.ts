export type ChangePasswordType = {
	currentPassword: string;
	newPassword: string;
};
export type ChangePasswordResponse = { message: string; isSuccess: false } | { isSuccess: true };
