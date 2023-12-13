import styled from 'styled-components';

export const HeaderBtnStyle = styled.span`
	display: block;
	float: left;
	text-align: center;
	width: 200px;
	height: 72px;
	margin-left: 10px;
	padding: 10px;
	line-height: 60px;
	font-size: ${({ theme }) => theme.font.size.lg};
	cursor: pointer;
	background-color: transparent;
	color: ${({ theme }) => theme.color.grey5};
`;
export const ActiveHeaderBtnStyle = styled.span`
	display: block;
	float: left;
	text-align: center;
	width: 200px;
	height: 72px;
	margin-left: 10px;
	padding: 10px;
	line-height: 60px;
	font-size: ${({ theme }) => theme.font.size.lg};
	cursor: pointer;
	background-color: transparent;
	color: ${({ theme }) => theme.color.white};
	border-bottom: 2px solid ${({ theme }) => theme.color.red1};
`;
