import axios from 'axios';

export const loginUser = async (email: string, pwd: string) => {
	const url = `${import.meta.env.VITE_API_KEY}/auth/login`;
	try {
		// axios.defaults.withCredentials = true;
		const response = await axios.post(
			url,
			{
				email,
				pwd,
			},
			{
				withCredentials: true,
				// headers: {
				// 	crossDomain: true,
				// 	'Content-Type': 'application/json',
				// 	'Access-Control-Allow-Origin': 'https://api.radek.smallhost.pl',
				// 	'Access-Control-Allow-Credentials': 'true',
				// 	'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
				// },
				// 	'Access-Control-Allow-Credentials': 'true',
				// 	'Access-Control-Allow-Origin': 'https://radek.smallhost.pl',
				// 	'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
				// },
			},
		);

		if (response.status === 201) {
			console.log(response.data);
			return response.data;
		} else {
			return { isSuccess: false };
		}
	} catch (err) {
		console.error('Error logging user:', err);
		return { isSuccess: false };
	}
};
