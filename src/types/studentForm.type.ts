import {
	canTakeApprenticeshipEnum,
	expectedContractTypeEnum,
	expectedTypeWorkEnum,
	StudentStatusEnum,
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

type PortfolioUrl = {
	id: string;
	portfolioUrl: string;
	student: StudentEntity;
};

type ProjectUrl = {
	id: string;
	projectUrl: string;
	student: StudentEntity;
};

type BonusProjectUrl = {
	id: string;
	bonusUrl: string;
	student: StudentEntity;
};

export type StudentEntity = {
	email?: string;
	id: string;
	tel: string;
	firstName: string;
	lastName: string;
	courseCompletion: number;
	courseEngagement: number;
	projectDegree: number;
	teamProjectDegree: number;
	gitHubUserName: string;
	bio: string;
	expectedTypeWork: expectedTypeWorkEnum;
	targetWorkCity: string;
	expectedContractType: expectedContractTypeEnum;
	expectedSalary: string;
	canTakeApprenticeship: string;
	monthsOfCommercialExp: number;
	education: string;
	workExperience: string;
	courses: string;
	status: StudentStatusEnum;
	portfolioUrls: PortfolioUrl[];
	projectUrls: ProjectUrl[];
	bonusProjectUrls: BonusProjectUrl[];
	// hrs: HrStudentEntity[];
	// user: UserEntity;
};
