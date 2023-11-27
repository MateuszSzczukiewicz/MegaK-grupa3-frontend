import styled from "styled-components";

export const StudentRowInfoStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    margin: 0;
    width: 100%;
    ${({ theme }) => theme.mq.sm}{
      width: 400px;
      margin: 10px 0 0 25px;
    }
`
export const ImgStyle = styled.img`
    float: left;
    width: 50px;
    height: 50px;
    margin-left: 30px;
    margin-right: 15px;
    border-radius: 100%;
`
export const BStyle = styled.p`
    color: ${({ theme }) => theme.color.white};
`
export const DateStyle = styled.p`
    margin-right: 0;
    ${({ theme }) => theme.mq.sm}{
      margin-right: 40px;
    }
`
export const NameStyle = styled.span`
    line-height: 60px;
    color: ${({ theme }) => theme.color.white};
`