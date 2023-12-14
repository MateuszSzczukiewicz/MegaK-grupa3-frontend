import styled from 'styled-components';

export const AdminPageWrapper = styled.div`
	width: 80%;
	margin: 25px auto;
	max-width: 1600px;

	div {
		background-color: ${({ theme }) => theme.color.grey8};
	}
`;
