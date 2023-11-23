import styled from 'styled-components';

export const StudentsComponentDiv = styled.div`
    width: 80%;
    margin: 25px auto;
`;
export const StudentsHeader = styled.header`
    margin: 2px 0;
    background-color: ${({ theme }) => theme.color.grey2};
`
export const StudentsMain = styled.main`
    padding: 0 10px;
    background-color: ${({ theme }) => theme.color.grey2};
`
export const HeaderBtnsSpan = styled.span`
    width: 200px;
    margin-left: 10px;
    padding: 10px;
    line-height: 60px;
    font-size: ${({ theme }) => theme.font.size.md};
    cursor: pointer;
    background-color: transparent;
    color: ${({ theme }) => theme.color.grey5};
`;
export const Hr = styled.hr`
    margin: 0 10px;
    border-color: ${({ theme }) => theme.color.grey1};
`;
export const SearchInput = styled.input`
    width: 250px;
    height: 30px;
    margin: 10px 0;
    padding-left: 5px;
    border: none;
    background-color: ${({ theme }) => theme.color.grey1};
`;
export const LoupDiv = styled.div`
    float: left;
    height: 30px;
    margin: 10px 0;
    padding: 5px;
    line-height: 22.5px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.grey1};
`;
export const FilterBtn = styled.button`
    float: right;
    height: 30px;
    margin: 10px;
    padding: 10px;
    line-height: 12.5px;
    border: none;
    background-color: ${({ theme }) => theme.color.grey1};
    color: ${({ theme }) => theme.color.grey5};
`