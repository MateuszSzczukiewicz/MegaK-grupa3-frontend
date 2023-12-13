import styled from 'styled-components';
import { PrimaryButtonStyles } from '../../atoms/PrimaryButton/PrimaryButton.styles.ts';

export const StyledAside = styled.aside`
	display: flex;
	gap: 25px;
	flex-direction: column;

	${({ theme }) => theme.mq.md} {
		flex-direction: row;
	}
`;

export const StudentPrimaryInfoSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	align-self: self-start;
	padding-top: 30px;
	padding-bottom: 9px;
	margin-bottom: 25px;
	background-color: ${({ theme }) => theme.color.grey6};
`;

export const StyledButton = styled(PrimaryButtonStyles)`
	width: 200px;
`;
