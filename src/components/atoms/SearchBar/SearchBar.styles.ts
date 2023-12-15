import styled from 'styled-components';

export const SearchBarStyles = styled.div``;
export const SearchInputStyle = styled.input`
	float: left;
	width: 80%;
	height: 40px;
	margin: 15px 0;
	padding-left: 5px;
	border: none;
	font-size: ${({ theme }) => theme.font.size.md};
	color: ${({ theme }) => theme.color.grey4};
	background-color: ${({ theme }) => theme.color.grey8};
	&:focus {
		outline: none;
	}
	${({ theme }) => theme.mq.sm} {
		width: 350px;
	}
`;
export const LoupDivStyle = styled.div`
	float: left;
	height: 40px;
	margin: 15px 0;
	padding: 5px 10px;
	line-height: 40px;
	cursor: pointer;
	background-color: ${({ theme }) => theme.color.grey8};
`;
