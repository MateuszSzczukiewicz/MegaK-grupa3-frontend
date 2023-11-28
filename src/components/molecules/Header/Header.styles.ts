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
	align-items: center;
	justify-content: space-between;
	width: 1430px;
`;

export const StyledLogo = styled.img`
	height: 55px;
`;
