import styled from 'styled-components';

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80px;
	background-color: ${({ theme }) => theme.color.grey8};
`;

export const StyledWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 30px;

	${({ theme }) => theme.mq.md} {
		width: 80%;
	}
`;

export const StyledLogo = styled.img`
	height: 55px;
`;
