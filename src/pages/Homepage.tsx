import { Header } from '../components/atoms/Header/Header.tsx';
import {useEffect} from "react";
import {addTest, getTest} from "../api/testAPI";

export const Homepage = () => {

	useEffect(() => {
		(async () => {
			const data = await getTest('123');
			console.log(data);
		})()
	}, [])

	useEffect(() => {
		(async () => {
			const data = await addTest('testowy');
			console.log(data);
		})()
	}, [])

	return <Header />;
};
