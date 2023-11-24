import styled from 'styled-components';

export const StudentsMainStyle = styled.main`
    padding: 0 20px;
    background-color: ${({ theme }) => theme.color.grey6};
`
export const HrStyle = styled.hr`
    border-bottom: none;
    border-color: ${({ theme }) => theme.color.grey8};
`;