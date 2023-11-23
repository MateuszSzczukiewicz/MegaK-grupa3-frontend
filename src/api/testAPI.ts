import axios from "axios";

export async function getTest(id: string): Promise<{id: string, name: string}> {
    try {
        const res = await axios.get(`http://localhost:3000/test/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function addTest(name: string): Promise<{id: string, name: string}> {
    try {
        const res = await axios.post('http://localhost:3000/test/', {
            name,
        });
        return res.data;
    } catch (error) {
        return error;
    }
}