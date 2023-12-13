import styled from 'styled-components';

export const StudentsHeaderStyle = styled.header`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin: 1px 0;
	background-color: ${({ theme }) => theme.color.grey6};
	${({ theme }) => theme.mq.sm} {
		justify-content: start;
	}
`;
