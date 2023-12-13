import { StyledUserElement, StyledPhoto, StyledName } from './UserElement.styles';
import { TriangleIcon } from '../../../assets/icons/TriangleIcon';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { getStudentCV } from '../../../api/students/GetStudentCVAPI.ts';
import { StudentCVType } from '../../../types/StudentCVType.types.ts';

export const UserElement = ({ studentId }: { studentId: string | undefined }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/profile');
	};
	const [studentData, setStudentData] = useState<StudentCVType | null>(null);

	const fetchData = useCallback(async () => {
		try {
			const data = await getStudentCV(studentId);
			setStudentData(data);
		} catch (err) {
			console.error('Error fetching students:', err);
		}
	}, [studentId]);

	useEffect(() => {
		(async () => {
			try {
				await fetchData();
				console.log(studentData);
			} catch (err) {
				console.error('Error in useEffect:', err);
			}
		})();
	}, [fetchData, studentData]);

	return (
		<StyledUserElement onClick={handleClick}>
			<StyledPhoto />
			{studentData && (
				<StyledName>
					{studentData.firstName} {studentData.lastName}
				</StyledName>
			)}
			<TriangleIcon />
		</StyledUserElement>
	);
};
