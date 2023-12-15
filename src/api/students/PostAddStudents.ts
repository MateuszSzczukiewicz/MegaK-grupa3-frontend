import axios from 'axios';
import {Student} from "../../types/HrStudentAddTypes/HrStudentsAdd.type";

export const PostAddStudents = async (data:Omit<Student, "id">) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_API_KEY}/admin/addStudents/json`, JSON.stringify(data));
        return res.data;
    } catch (err: Error) {
        return {
            message: err.message,
            isSuccess: false,
        };
    }
};