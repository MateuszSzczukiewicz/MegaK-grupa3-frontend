import styled from 'styled-components';

export const StyledLabel = styled.label`
	display: flex;
	gap: 5px;
	margin-bottom: 10px;
	width: 100%;
	font-size: ${({ theme }) => theme.font.size.xs};
	font-weight: ${({ theme }) => theme.font.weight.medium};
	color: ${({ theme }) => theme.color.white};
`;

export const StyledInput = styled.input.attrs({ type: 'radio' })`
	-webkit-appearance: none;
	appearance: none;
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	font: inherit;
	color: currentColor;
	width: 15px;
	height: 15px;
	border: 1px solid ${({ theme }) => theme.color.grey1};
	border-radius: 50%;

	&::before {
		content: '';
		width: 15px;
		height: 15px;
		border-radius: 50%;
		transform: scale(0);
		transition: 120ms transform ease-in-out;
		background-color: ${({ theme }) => theme.color.white};
	}

	&:checked::before {
		transform: scale(1);
	}

	&:focus {
		outline-offset: max(2px, 0.15em);
	}
`;
