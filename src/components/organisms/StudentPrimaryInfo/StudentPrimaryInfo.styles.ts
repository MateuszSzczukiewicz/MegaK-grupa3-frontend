import styled from 'styled-components';

export const StyledSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	align-self: self-start;
	width: 250px;
	padding-top: 30px;
	padding-bottom: 9px;
	background-color: ${({ theme }) => theme.color.grey6};
`;
