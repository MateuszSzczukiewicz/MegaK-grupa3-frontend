import styled from "styled-components";

export const StudentProfileStyle = styled.div`
    width: 80%;
    max-width: 1600px;
    margin: 20px auto;
    p{
      color: ${({ theme }) => theme.color.grey1};
    }
    hr{
      border-color: ${({ theme }) => theme.color.black};
      border-bottom: none;
    }
`