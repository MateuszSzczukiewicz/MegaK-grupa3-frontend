import styled from "styled-components";

export const StudentsPageFooterStyle = styled.footer `
    float: right;
    display: flex;
    margin: 20px 0;
`
export const ButtonStyle = styled.button `
    margin: auto 5px;
    width: 25px;
    height: 25px;
    color: ${({ theme }) => theme.color.grey1};
    &:disabled{
      color: ${({ theme }) => theme.color.grey5};
    }
`
export const SelectStyle = styled.select `
    height: 25px;
    margin: auto 5px;
`
export const RowsCounterStyle = styled.span `
    margin: 0 15px;
`