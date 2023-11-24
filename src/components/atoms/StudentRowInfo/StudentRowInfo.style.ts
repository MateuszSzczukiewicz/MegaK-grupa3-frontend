import styled from "styled-components";

export const StudentRowInfoStyle = styled.div`
    display: flex;
`
export const ImgStyle = styled.img`
    float: left;
    width: 50px;
    height: 50px;
    margin: 0 20px 0 60px;
    border-radius: 100%;
`
export const BStyle = styled.p`
    color: ${({ theme }) => theme.color.white};
`
export const DateStyle = styled.p`
    float: left;
`
export const NameStyle = styled.span`
    line-height: 60px;
    color: ${({ theme }) => theme.color.white};
`