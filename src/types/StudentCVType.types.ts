export type PortfolioUrlType = {
	id: string;
	portfolioUrl: string;
};

export type ProjectUrlType = {
	id: string;
	projectUrl: string;
};

export type BonusProjectUrlType = {
	id: string;
	bonusProjectUrl: string;
};

export type StudentCVType = {
	id: string;
	tel: string;
	firstName: string;
	lastName: string;
	gitHubUserName: string;
	bio: string;
	canTakeApprenticeship: string;
	courses: string;
	courseCompletion: number;
	courseEngagement: number;
	education: string;
	email: string;
	expectedContractType: string;
	expectedSalary: string;
	expectedTypeWork: string;
	monthsOfCommercialExp: number;
	targetWorkCity: string;
	workExperience: string;
	status: number;
	projectDegree: number;
	teamProjectDegree: number;
	projectUrls: ProjectUrlType[];
	portfolioUrls: PortfolioUrlType[];
	bonusProjectUrls: BonusProjectUrlType[];
};
