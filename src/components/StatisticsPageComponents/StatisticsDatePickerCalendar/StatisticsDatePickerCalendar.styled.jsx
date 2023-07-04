import styled from 'styled-components';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const StatisticsDatePickerCalendar = styled.div`
  .react-datepicker {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    background-color: #3e85f3;
    padding-top: 16px;
    border-radius: 16px;
    color: white;
    overflow: hidden;
    border: none;
    padding-left: 4px;
    padding-right: 4px;
    height: 336px;
    font-size: 14px;
    font-family: Inter;
    font-weight: 300;
    line-height: calc((18 / 14) * 100%);

    @media (min-width: 375px) {
      width: 300px;
    }

    @media (min-width: 768px) {
      top: calc(100% + 5px);
      left: -285px;
      width: 337px;
      height: 376px;
    }

    @media (min-width: 1440px) {
      top: calc(100% + 1px);
      left: -400px;
    }

    &__header {
      font-size: 14px;
      font-weight: 300;
      line-height: calc((18 / 14) * 100%);
      background-color: #3e85f3;
      color: white;
    }
    &__month-container {
      background-color: #3e85f3;
    }

    &__day--outside-month {
      opacity: 0.35;
    }
    &__day {
      color: #ffffff;
      margin: 6px 6px;
      font-weight: 300;
      @media (min-width: 768px) {
        font-size: 18px;
        margin: 9px 9px;
        line-height: calc((24 / 18) * 100%);
      }
      &:hover {
        border-radius: 50%;
        background-color: #ffffff;
        color: #3e85f3;
        opacity: 35%;
      }
      &--selected {
        border-radius: 50%;
        opacity: 1;
        background-color: #3e85f3;
        color: #ffffff;
        outline: none;
      }
      &--keyboard-selected {
        border-radius: 50%;
        opacity: 1;
        background-color: #3e85f3;
        color: #ffffff;
        outline: none;
        @media (min-width: 768px) {
        }
      }
    }

    &__day-name {
      color: #ffffff;
      text-align: center;
      font-size: 14px;
      font-family: Inter;
      font-weight: 400;
      line-height: 18px;
      padding-bottom: 12px;
      padding-top: 12px;
      @media (min-width: 768px) {
        padding-right: 30px;
        padding-left: 10px;

        font-size: 24px;
        font-weight: 400;
        line-height: calc((28 / 24) * 100%);
      }
    }
    &__current-month {
      color: white;
      @media (min-width: 768px) {
        font-size: 24px;
        font-weight: 600;
        line-height: calc((28 / 24) * 100%);
      }
    }
  }

  .react-datepicker__day--highlighted,
  .react-datepicker__month-text--highlighted,
  .react-datepicker__quarter-text--highlighted,
  .react-datepicker__year-text--highlighted {
    border-radius: 50%;
    opacity: 1;
    background-color: #ffffff;
    color: #3e85f3;
    outline: none;
  }
`;

export const StatisticsDatePickerInput = styled(DatePicker)`
  display: none;
`;
