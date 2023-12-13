import styled from 'styled-components';

export const PrimaryInputStyle = styled.input`
	height: 60px;
	margin: 10px;
	padding-left: 10px;
	border: none;
	font-size: ${({ theme }) => theme.font.size.md};
	color: ${({ theme }) => theme.color.grey4};
	background-color: ${({ theme }) => theme.color.grey8};

	&:focus {
		outline: none;
	}

	${({ theme }) => theme.mq.sm} {
		width: 300px;
	}
`;
