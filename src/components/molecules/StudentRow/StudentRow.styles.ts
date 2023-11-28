import styled from 'styled-components';

export const StudentRowStyle = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 0 10px;
    padding-top: 10px;
    color: ${({ theme }) => theme.color.grey5};
    &:not(:last-child){
      border-bottom: 20px solid ${({ theme }) => theme.color.black};
    }
    ${({ theme }) => theme.mq.sm}{
      flex-direction: row;
      justify-content: space-around;
    }
    ${({ theme }) => theme.mq.xl}{
      justify-content: space-between;
    }
`
export const ButtonsStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    ${({ theme }) => theme.mq.sm}{
      flex-direction: row;
      justify-content: space-around;
    }
`
export const ArrowStyle = styled.div`
    display: flex;
    margin: 15px auto;
    cursor: pointer;
    transition: .6s;
    ${({ theme }) => theme.mq.sm}{
      margin: 15px;
    }
`