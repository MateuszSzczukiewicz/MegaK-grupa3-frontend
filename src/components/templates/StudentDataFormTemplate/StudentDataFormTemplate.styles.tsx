import styled from 'styled-components';

export const StudentFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
  align-items: center;
  margin-top: 26px;
	color: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.mq.xs} {

  }

  ${({ theme }) => theme.mq.md} {

  }
  }
`;

export const StyledTextArea = styled.textarea`
	width: 350px;
	height: 100px;
	background-color: ${({ theme }) => theme.color.grey1};
	margin-bottom: 15px;
	border: none;
	padding: 6px 17px;

	&:focus {
		outline: none;
	}
`;

export const StyledSelect = styled.select`
	width: 350px;
	height: 40px;
	background-color: ${({ theme }) => theme.color.grey1};
	margin-bottom: 15px;
	border: none;
	padding: 6px 17px;

	&:focus {
		outline: none;
	}
`;
