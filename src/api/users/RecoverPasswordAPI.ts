import axios from 'axios';

export const recoverPassword = async (recover: {
	email: string;
}): Promise<
	| { isSuccess: true }
	| {
			message?: string;
			isSuccess: false;
	  }
> => {
	try {
		console.log(recover);
		const res = await axios.post(`${import.meta.env.VITE_API_KEY}/user/recover`, recover, {
			withCredentials: true,
		});
		return res.data;
	} catch (err: Error) {
		return {
			message: err.message,
			isSuccess: false,
		};
	}
};
