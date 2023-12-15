import styled from "styled-components";

export const FormStyle = styled.form`
    position: relative;
    border: 2px dashed red;
    height: 100px;
    margin: 20px;
    color: ${({theme})=>theme.color.grey3};
    text-align: center;
    padding: 10px;
    overflow: hidden;
      input{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border: none;
        cursor: pointer;
        color: ${({ theme }) => theme.color.grey3};
        opacity: 0;
      }
`