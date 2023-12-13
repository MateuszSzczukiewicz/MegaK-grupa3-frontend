import styled from 'styled-components';

export const FilterButtonStyle = styled.button`
    display: flex;
    justify-content: space-around;
    float: right;
    height: 40px;
    margin: 15px 0 15px 0;
    padding: 10px;
    line-height: 20px;
    border: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.grey8};
    color: ${({ theme }) => theme.color.grey5};
`