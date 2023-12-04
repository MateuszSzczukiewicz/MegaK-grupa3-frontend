import styled from 'styled-components';

export const StyledBackground = styled.div`
	position: fixed;
	width: 100%;
	left: 0;
	top: 0;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
`;

export const StyledFiltration = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.color.black};
	padding: 20px;
	top: 0;
	left: 0;
	width: 100%;
	height: auto;

	${({ theme }) => theme.mq.xl} {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		position: fixed;
		width: auto;
		height: auto;
	}
`;

export const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 11px;
`;

export const StyledH2 = styled.h2`
	font-size: ${({ theme }) => theme.font.size.xxl};
	font-weight: ${({ theme }) => theme.font.weight.bold};
	color: ${({ theme }) => theme.color.white};
`;

export const StyledButton = styled.button`
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 27px;
	background: ${({ theme }) => theme.color.grey1};
	color: ${({ theme }) => theme.color.white};
	font-size: ${({ theme }) => theme.font.size.xxs};
	font-weight: ${({ theme }) => theme.font.weight.medium};
	padding: 8px;
	gap: 2px;
	border: none;
	cursor: pointer;
`;

export const Group = styled.div`
	margin-bottom: 20px;
`;

export const StyledH3 = styled.h3`
	font-size: ${({ theme }) => theme.font.size.xs};
	font-weight: ${({ theme }) => theme.font.weight.medium};
	color: ${({ theme }) => theme.color.white};
	margin-bottom: 10px;
`;

export const StyledList = styled.ul`
	display: flex;
	gap: 8px;
`;

export const StyledInput = styled.input`
	height: 28px;
	width: 95px;
	background-color: ${({ theme }) => theme.color.grey1};
	font-size: ${({ theme }) => theme.font.size.xxs};
	font-weight: ${({ theme }) => theme.font.weight.medium};
	border: none;
	padding: 5px 10px;
	margin-right: 13px;

	&:focus {
		outline: none;
	}

	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

export const ButtonsGroup = styled.div`
	align-self: end;
	display: flex;
	gap: 30px;
`;
