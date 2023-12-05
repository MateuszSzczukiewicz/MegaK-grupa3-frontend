import {
	canTakeApprenticeshipEnum,
	expectedContractTypeEnum,
	expectedTypeWorkEnum,
} from './studentForm.enum';

export type StudentFormType = {
	email: string;
	tel: string;
	firstName: string;
	lastName: string;
	gitHubUserName: string;
	portfolioUrl1: string;
	portfolioUrl2: string;
	portfolioUrl3: string;
	portfolioUrl4: string;
	projectUrl1: string;
	projectUrl2: string;
	projectUrl3: string;
	bio: string;
	expectedTypeWork: expectedTypeWorkEnum;
	targetWorkCity: string;
	expectedContractType: expectedContractTypeEnum;
	expectedSalary: string;
	canTakeApprenticeship: canTakeApprenticeshipEnum;
	monthsOfCommercialExp: number;
	education: string;
	workExperience: string;
	courses: string;
};

export type UpdateStudentType = {
	email: string;
	tel: string;
	firstName: string;
	lastName: string;
	gitHubUserName: string;
	portfolioUrls: string[];
	projectUrls: string[];
	bio: string;
	expectedTypeWork: expectedTypeWorkEnum;
	targetWorkCity: string;
	expectedContractType: expectedContractTypeEnum;
	expectedSalary: string;
	canTakeApprenticeship: canTakeApprenticeshipEnum;
	monthsOfCommercialExp: number;
	education: string;
	workExperience: string;
	courses: string;
};
