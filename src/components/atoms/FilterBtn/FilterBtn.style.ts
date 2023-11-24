import styled from 'styled-components';

export const FilterButtonStyle = styled.button`
    display: flex;
    justify-content: space-around;
    float: right;
    height: 40px;
    margin: 10px 0 10px 10px;
    padding: 10px;
    line-height: 20px;
    border: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.grey7};
    color: ${({ theme }) => theme.color.grey5};
`