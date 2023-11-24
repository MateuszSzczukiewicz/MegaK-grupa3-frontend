import styled from "styled-components";

export const RedRectangleStyle = styled.div`
    height: 40px;
    text-align: center;
    padding: 7.5px;
    margin: 10px;
    background-color: ${({ theme }) => theme.color.red1};
    color: ${({ theme }) => theme.color.white};
`