import styled from 'styled-components';

import { variables } from '../../../Styles/GlobalStyle';

const customGrey = '#dce3e580';

export const Cell = styled.div`
  width: 48px;
  height: 93px;
  text-align: right;
  border-bottom: 1px solid ${props => props.theme.tabl_border};
  border-right: 1px solid ${props => props.theme.tabl_border};
  padding: 0px 2px;
  background: ${props => props.theme.page_bg};
  padding: 0px 2px;
  overflow-y: scroll;
  overflow-x: hidden;
  cursor: pointer;

  @media screen and (min-width: calc(${variables.breakpoints.tablet} - 0.1px)) {
    width: 99px;
    height: 143px;
    padding: 0px 4px;
  }

  @media screen and (min-width: calc(${variables.breakpoints
      .desktop} - 0.1px)) {
    width: 155px;
    height: 125px;
    padding: 0px 8px;
  }

  &:nth-child(-n + 7) {
    border-top: 1px solid ${customGrey};
  }

  &:nth-child(7n + 1) {
    border-left: 1px solid ${customGrey};
  }

  &:nth-child(1) {
    border-top-left-radius: 8px;
  }

  &:nth-child(7) {
    border-top-right-radius: 8px;
  }

  &:nth-child(36) {
    border-bottom-left-radius: 8px;
  }

  &:nth-child(42) {
    border-bottom-right-radius: 8px;
  }

  &:hover,
  :focus {
    box-shadow: ${variables.shadow.shadow};
  }

  &::-webkit-scrollbar-thumb {
    /* color of the scroll thumb */
    background-color: ${customGrey};
    /* roundness of the scroll thumb */
    border-radius: 3px;
    /* creates padding around scroll thumb */
    border: 2px solid ${customGrey};
  }

  &::-webkit-scrollbar {
    /* width of the entire scrollbar */
    width: 4px;
  }
`;

export const LabelCell = styled.div`
  display: inline-block;

  margin-top: 8px;
  margin-right: 4px;
  padding: 4px 6px;

  border-radius: 6px;

  color: ${props => props.theme.text_3};
  font-size: 12px;
  font-family: Inter;
  font-weight: 700;
  line-height: 1.17;
  text-transform: uppercase;

  @media screen and (min-width: calc(${variables.breakpoints.tablet} - 0.1px)) {
    margin-top: 14px;
    margin-right: 14px;

    padding: 4px 8px;

    border-radius: 8px;

    font-size: 16px;
    line-height: 1.125;
  }
`;

export const TodayLabelCell = styled(LabelCell)`
  background-color: ${variables.colors.primary};
  color: ${variables.colors.white};
`;

export const OtherMonthLabelCell = styled(LabelCell)`
  color: ${props => props.theme.page_bg};
`;

export const CalendarWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 340px;
  height: 564px;
  margin: auto;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.tabl_border};
  background: ${variables.colors.background};

  @media screen and (min-width: calc(${variables.breakpoints.tablet} - 0.1px)) {
    width: 704px;
    height: 860px;
  }
  @media screen and (min-width: calc(${variables.breakpoints
      .desktop} - 0.1px)) {
    width: 1087px;
    height: 750px;
  }
`;
