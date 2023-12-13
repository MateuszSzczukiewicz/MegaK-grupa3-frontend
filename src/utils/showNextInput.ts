import {
	ShowNextPortfolioInputType,
	ShowNextProjectInputType,
} from '../types/ShowNextInputType.types.ts';

export const showNextPortfolioInput = ({
	e,
	setIsPortfolioInputHidden,
}: ShowNextPortfolioInputType) => {
	switch (e.target.name) {
		case 'portfolioUrl1':
			if (e.target.value !== '') {
				setIsPortfolioInputHidden([false, true, true]);
			} else {
				setIsPortfolioInputHidden([true, true, true]);
			}
			break;
		case 'portfolioUrl2':
			if (e.target.value !== '') {
				setIsPortfolioInputHidden([false, false, true]);
			} else {
				setIsPortfolioInputHidden([false, true, true]);
			}
			break;
		case 'portfolioUrl3':
			if (e.target.value !== '') {
				setIsPortfolioInputHidden([false, false, false]);
			} else {
				setIsPortfolioInputHidden([false, false, true]);
			}
			break;
		case 'portfolioUrl4':
			if (e.target.value === '') {
				setIsPortfolioInputHidden([false, false, false]);
			}
			break;
	}
};

export const showNextProjectInput = ({ e, setIsProjectInputHidden }: ShowNextProjectInputType) => {
	switch (e.target.name) {
		case 'projectUrl1':
			if (e.target.value !== '') {
				setIsProjectInputHidden([false, true]);
			} else {
				setIsProjectInputHidden([true, true]);
			}
			break;
		case 'projectUrl2':
			if (e.target.value !== '') {
				setIsProjectInputHidden([false, false]);
			} else {
				setIsProjectInputHidden([true, false]);
			}
			break;
		case 'projectUrl3':
			if (e.target.value === '') {
				setIsProjectInputHidden([false, false]);
			}
			break;
	}
};
