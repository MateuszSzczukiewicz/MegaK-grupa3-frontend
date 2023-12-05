import axios from 'axios';

export const getStudent = async (id) => {
	const res = await axios.get(`http://localhost:3000/student/${id}`);
	return res.data;
};
