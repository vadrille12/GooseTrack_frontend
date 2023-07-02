import styled from 'styled-components';

import { variables } from '../../../Styles/GlobalStyle';

export const Cell = styled.li`
  position: relative;
  width: 48px;
  height: 93px;
  text-align: right;
  border-bottom: 1px solid ${props => props.theme.tabl_border};
  border-right: 1px solid ${props => props.theme.tabl_border};
  background: ${props => props.theme.page_bg};
  padding-top: 31px;
  padding-bottom: 1px;
  cursor: pointer;

  @media screen and (min-width: calc(${variables.breakpoints.tablet} - 0.1px)) {
    width: 99px;
    height: 143px;
    padding-top: 41px;
  }

  @media screen and (min-width: calc(${variables.breakpoints
      .desktop} - 0.1px)) {
    width: 155px;
    height: 125px;
  }

  &:nth-child(-n + 7) {
    border-top: 1px solid ${props => props.theme.tabl_border};
  }

  &:nth-child(7n + 1) {
    border-left: 1px solid ${props => props.theme.tabl_border};
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

  transition: ${variables.transitions.standart};
  &:hover,
  :focus {
    transform: translateY(-2px);
    box-shadow: ${variables.shadow.shadow};
  }
`;

export const LabelWrapper = styled.div`
  max-height: 93px;
  padding-top: 2px;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  @media screen and (min-width: calc(${variables.breakpoints.tablet} - 0.1px)) {
    max-height: 103px;
    padding-left: 4px;
    padding-right: 4px;
  }

  @media screen and (min-width: calc(${variables.breakpoints
      .desktop} - 0.1px)) {
    padding-left: 8px;
    padding-right: 8px;
  }

  &::-webkit-scrollbar-thumb {
    /* color of the scroll thumb */
    background-color: ${props => props.theme.tabl_border};
    /* roundness of the scroll thumb */
    border-radius: 3px;
    /* creates padding around scroll thumb */
    border: 2px solid ${props => props.theme.tabl_border};
  }

  &::-webkit-scrollbar {
    /* width of the entire scrollbar */
    width: 4px;
  }
`;

export const LabelCell = styled.div`
  position: absolute;
  top: 8px;
  right: 4px;

  padding: 4px 6px;

  border-radius: 6px;

  color: ${props => props.theme.text_3};
  font-size: 12px;
  font-family: Inter;
  font-weight: 700;
  line-height: 1.17;
  text-transform: uppercase;

  @media screen and (min-width: calc(${variables.breakpoints.tablet} - 0.1px)) {
    top: 14px;
    right: 14px;

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
  color: #d3d3d3;
`;

export const CalendarWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 340px;
  height: 564px;
  margin: auto;

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
