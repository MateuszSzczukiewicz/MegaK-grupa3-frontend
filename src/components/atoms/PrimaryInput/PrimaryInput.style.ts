import styled from "styled-components";

export const PrimaryInputStyle = styled.input`
  height: 40px;
  margin: 10px;
  padding-left: 5px;
  border: none;
  font-size: ${({ theme }) => theme.font.size.md};
  color: ${({ theme }) => theme.color.grey4};
  background-color: ${({ theme }) => theme.color.grey8};
  &:focus{
    outline: none;
  }
  ${({ theme }) => theme.mq.sm}{
    width: 300px;
  }
`