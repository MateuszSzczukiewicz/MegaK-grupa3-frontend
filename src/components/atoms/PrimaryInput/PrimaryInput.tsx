import { PrimaryInputStyle } from './PrimaryInput.styles';
import { PrimaryInputPropsType } from '../../../types/PrimaryInputType.types';

export const PrimaryInput = ({ type, placeholder, onChange }: PrimaryInputPropsType) => (
	<PrimaryInputStyle type={type ?? 'text'} placeholder={placeholder} onChange={onChange} />
);
