import styled from 'styled-components';

export const StudentsPageFooterStyles = styled.footer`
	color: ${({ theme }) => theme.color.white};
	float: right;
	display: flex;
	margin: 20px 0;
`;

export const ButtonStyle = styled.button`
	margin: auto 5px;
	width: 25px;
	height: 25px;
	color: ${({ theme }) => theme.color.grey1};
	cursor: pointer;

	&:disabled {
		color: ${({ theme }) => theme.color.grey5};
		cursor: auto;
	}
`;

export const SelectStyle = styled.select`
	height: 25px;
	margin: auto 5px;
	cursor: pointer;

	&:focus {
		outline: none;
	}
`;

export const RowsCounterStyle = styled.span`
	margin: 0 15px;
`;
