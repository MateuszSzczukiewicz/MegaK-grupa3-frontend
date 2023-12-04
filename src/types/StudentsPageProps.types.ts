import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

export type StudentsPageMainPropsType = {
	simplified: boolean;
	toggleFilterVisible: MouseEventHandler;
};

export type StudentsPageHeaderPropsType = {
	simplified: boolean;
	setSimplified: Dispatch<SetStateAction<boolean>>;
};

export type StudentsPageHeaderBtnPropsType = {
	active: boolean;
	text: string;
	setActive: () => void;
};

export type StudentsPageFooterPropsType = {
	rowsLimit: number;
	setRowsLimit: Dispatch<SetStateAction<number>>;
	LengthOfStudentsList: number;
	activePage: number;
	setActivePage: Dispatch<SetStateAction<number>>;
};

export type StudentRowInfoPropsType = {
	simplified?: boolean;
	studentId?: string;
	firstName: string;
	lastName: string;
	reservationDate?: string | null;
	gitHubUserName?: string | null;
};

export type StudentRatingPropsType = {
	courseCompletion: number;
	courseEngagement: number;
	projectDegree: number;
	teamProjectDegree: number;
	expectedTypeWork: string;
	targetWorkCity: string;
	expectedContractType: string;
	expectedSalary: string;
	canTakeApprenticeship: string;
	monthsOfCommercialExp: number;
};

export type StudentSingleRatingType = {
	title: string;
	ratingValue: string | number;
};

export type StudentRowPropsType = StudentRowInfoPropsType & StudentRatingPropsType;
