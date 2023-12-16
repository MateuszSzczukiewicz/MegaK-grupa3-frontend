import axios from 'axios';

export const PatchStudentHired = async (data:string) => {
    try {
        const res = await axios.patch(`${import.meta.env.VITE_API_KEY}/hr/students/hired`, data);
        return res.data;
    } catch (err: Error) {
        return {
            message: err.message,
            isSuccess: false,
        };
    }
};