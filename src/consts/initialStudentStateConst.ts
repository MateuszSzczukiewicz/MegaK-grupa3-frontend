import { StudentStateType } from '../types/StudentStateType.types.ts';

export const INITIAL_STUDENT_STATE: StudentStateType = {
	courseCompletion: 0,
	courseEngagement: 0,
	projectDegree: 0,
	teamProjectDegree: 0,
	targetWorkCity: '',
	expectedContractType: '',
	expectedSalary: {
		min: 0,
		max: 0,
	},
	canTakeApprenticeship: false,
	monthsOfCommercialExp: 0,
};
