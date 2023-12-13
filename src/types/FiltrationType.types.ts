import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { StudentStateType } from './StudentStateType.types.ts';

export type FiltrationPropsType = {
	toggleFilterVisible: MouseEventHandler;
	filters: StudentStateType;
	setFilters: Dispatch<SetStateAction<StudentStateType>>;
};
