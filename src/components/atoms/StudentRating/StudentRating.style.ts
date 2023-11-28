import styled from 'styled-components';

export const StudentRatingStyle = styled.div`
    margin: 1px 1px;
    background-color: #222;
    max-width: none;
    width: 100%;
    ${({ theme }) => theme.mq.xl}{
      width: unset;
    }
`
export const TitleStyle = styled.h2`
    margin: 10px;
    font-size: ${({ theme }) => theme.font.size.xxs};
`
export const RatingValueStyle = styled.p`
    margin: 20px 10px;
  font-size: ${({ theme }) => theme.font.size.xs};
`
export const BStyle = styled.b`
    white-space: nowrap;
`