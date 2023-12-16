export type ChangePasswordType = {
	currentPassword: string;
	newPassword: string;
};
export type ChangePasswordResponse = { isSuccess: boolean; message?: string };
