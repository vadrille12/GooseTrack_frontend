import styled from 'styled-components';

import { variables } from '../../../Styles/GlobalStyle';

export const Cell = styled.div`
  width: 48px;
  height: 93px;
  text-align: right;
  border-bottom: 1px solid #dce3e580;
  border-right: 1px solid #dce3e580;

  @media screen and (min-width: calc(${variables.breakpoint.tablet} - 0.1px)) {
    width: 99px;
    height: 143px;
  }

  @media screen and (min-width: calc(${variables.breakpoint.desktop} - 0.1px)) {
    width: 155px;
    height: 125px;
  }

  &:nth-child(n + 29) {
    border-bottom: none;
  }

  &:nth-child(7n) {
    border-right: none;
  }
`;

export const CalendarWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 338px;
  height: 470px;
  margin: auto;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  background: ${variables.colors.background};

  @media screen and (min-width: calc(${variables.breakpoint.tablet} - 0.1px)) {
    width: 704px;
    height: 710px;
  }
  @media screen and (min-width: calc(${variables.breakpoint.desktop} - 0.1px)) {
    width: 1087px;
    height: 625px;
  }
`;
