import styled from 'styled-components';

export const StudentPrimaryInfoSection = styled.section`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
  width: 100%;
	margin-bottom: 20px;
	padding-top: 30px;
	padding-bottom: 9px;
	background-color: ${({ theme }) => theme.color.grey6};
  
  button {
    width: 200px;
    margin: 0 0 14px;
  }

  ${({ theme }) => theme.mq.md} {
    width: 250px;
    align-self: self-start;
    margin-bottom: 0;
  }
}
`;
