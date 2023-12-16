import styled from "styled-components";

export const TableStyle = styled.table`
    display: flex;
    font-size: 20px;
    flex-basis: 80%;
    left: 10%;
    overflow-x: scroll;
    margin: 20px 8%;
    text-align: center;
    button{width:100%};
    tbody{
      margin: 0 auto;
    }
    tbody>tr{
      background-color: ${({ theme }) => theme.color.grey1};
      min-width: 150px;
      height: 70px;
      th{
        min-width: 150px;
        padding: 10px;
      }
    }
    tbody>tr:nth-child(even){
      background-color: ${({ theme }) => theme.color.grey3};
    }
    tbody>tr>td{
      min-width: 150px;
      line-height: 70px;
      padding: 0 5px;
    }
    ul{
      list-style: none;
      li{
        line-height: 50px;
        text-align: left;
      }
    }
    @media (min-width: 1140px){
      overflow-x: hidden;
      button{width:auto};
    }
`