import axios from 'axios';
import { StudentEntity } from '../types/studentForm.type';

export const getStudent = async (id: string): Promise<StudentEntity> => {
	try {
		const res = await axios.get(`http://localhost:3000/student/${id}`);
		return res.data;
	} catch (e) {
		return e;
	}
};
