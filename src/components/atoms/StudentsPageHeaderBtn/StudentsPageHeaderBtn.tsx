import { ActiveHeaderBtnStyle, HeaderBtnStyle } from './StudentsPageHeaderBtn.styles.ts';
import { StudentsPageHeaderBtnPropsType } from '../../../types/StudentsPageProps.types.ts';

export const StudentsPageHeaderBtn = ({
	active,
	text,
	setActive,
}: StudentsPageHeaderBtnPropsType) =>
	!active ? (
		<HeaderBtnStyle onClick={setActive}> {text} </HeaderBtnStyle>
	) : (
		<ActiveHeaderBtnStyle onClick={setActive}> {text} </ActiveHeaderBtnStyle>
	);
