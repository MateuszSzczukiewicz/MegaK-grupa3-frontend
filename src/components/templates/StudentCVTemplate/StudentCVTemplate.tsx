import { StudentPrimaryInfo } from '../../organisms/StudentPrimaryInfo/StudentPrimaryInfo';
import { StudentAchievements } from '../../organisms/StudentAchievements/StudentAchievements';
import { ContentWrapper } from './StudentCVTemplate.styles';
import { useEffect, useState, useCallback } from 'react';
import { getStudentCV } from '../../../api/students/GetStudentCVAPI.ts';
import { StudentCVType } from '../../../types/StudentCVType.types.ts';

export const StudentCVTemplate = ({ studentId }: { studentId: string | undefined }) => {
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
			} catch (err) {
				console.error('Error in useEffect:', err);
			}
		})();
	}, [fetchData]);

	return (
		<ContentWrapper>
			{studentData && <StudentPrimaryInfo {...studentData} />}
			{studentData && <StudentAchievements {...studentData} />}
		</ContentWrapper>
	);
};
