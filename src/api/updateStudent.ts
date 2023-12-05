import axios from 'axios';
import { UpdateStudentType } from '../types/studentForm.type';

export const updateStudent = async (id: string, data: UpdateStudentType) => {
	console.log(data);
	const res = await axios.put(`http://localhost:3000/student/${id}`, data);
	return res.data;
};
