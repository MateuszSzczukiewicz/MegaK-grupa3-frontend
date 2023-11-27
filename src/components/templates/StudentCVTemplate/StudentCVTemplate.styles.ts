import styled from 'styled-components';

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
  align-items: center;
  margin-top: 26px;
	color: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.mq.xs} {
    margin: 26px 10px;
  }

  ${({ theme }) => theme.mq.md} {
    flex-direction: row;
    margin: 26px 75px;
  }
  }
`;
