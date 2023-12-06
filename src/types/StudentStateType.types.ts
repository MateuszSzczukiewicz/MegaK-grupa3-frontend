export type StudentStateType = {
	courseCompletion: number;
	courseEngagement: number;
	projectDegree: number;
	teamProjectDegree: number;
	targetWorkCity: string;
	expectedContractType: string;
	expectedSalary: {
		min: number;
		max: number;
	};
	canTakeApprenticeship: boolean;
	monthsOfCommercialExp: number;
};
