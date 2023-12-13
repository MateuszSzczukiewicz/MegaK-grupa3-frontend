import { ChangeEvent } from 'react';

export type PrimaryInputPropsType = {
	type: string;
	placeholder?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
