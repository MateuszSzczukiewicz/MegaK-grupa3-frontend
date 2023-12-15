import { ChangeEvent, SetStateAction } from 'react';

export type ShowNextPortfolioInputType = {
	e: ChangeEvent<HTMLInputElement>;
	setIsPortfolioInputHidden: {
		(value: SetStateAction<boolean[]>): void;
		(value: SetStateAction<boolean[]>): void;
		(value: SetStateAction<boolean[]>): void;
		(value: SetStateAction<boolean[]>): void;
		(arg0: boolean[]): void;
	};
};

export type ShowNextProjectInputType = {
	e: ChangeEvent<HTMLInputElement>;
	setIsProjectInputHidden: {
		(value: SetStateAction<boolean[]>): void;
		(value: SetStateAction<boolean[]>): void;
		(value: SetStateAction<boolean[]>): void;
		(arg0: boolean[]): void;
	};
};
