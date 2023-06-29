import styled from 'styled-components';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePickerCalendar = styled.div`
  display: block;
  /* margin-top: 8px; */
  .react-datepicker {
    position: absolute;
    top: 5px;
    left: -14px;

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
      width: 327px;
    }
    @media (min-width: 768px) {
      top: 5px;
      left: 8px;
      width: 337px;
      height: 376px;
    }
    @media (min-width: 1440px) {
      top: -190px;
      left: 208px;
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
      &--weekend {
        opacity: 35%;
      }
      &--today {
        border-radius: 50%;
        opacity: 1;
        background-color: #ffffff;
        color: #3e85f3;
      }
      &--selected {
        border-radius: 50%;
        opacity: 1;
        background-color: #ffffff;
        color: #3e85f3;
        outline: none;
      }
      &--keyboard-selected {
        border-radius: 50%;
        opacity: 1;
        background-color: #ffffff;
        color: #3e85f3;
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
        padding-right: 28px;
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
    &__year {
    }
    &__navigation--years {
      background-color: #ffffff;
      font-size: 11px;

      &:hover {
      }
    }
    &__year-option {
      background-color: #ffffff;
      color: #3e85f3;
      &:hover {
        background-color: #3e85f3;
        color: #ffffff;
        font-size: 18px;
      }
    }
    &__year-dropdown {
      background-color: #3e85f3;
      &::-webkit-scrollbar {
        width: 10px;
        background: #ffffff;
        border-radius: 8px;
      }
      &::-webkit-scrollbar-thumb {
        background: #3e85f3;
        border-radius: 8px;
      }
    }
  }
`;
export const DatePickerInput = styled(DatePicker)`
  box-sizing: border-box;
  display: block;
  height: 42px;
  width: 100%;
  border: 1px solid ${props => props.theme.input_border_2};
  border-radius: 8px;
  padding: 14px;
  background: ${props => props.theme.page_bg};

  font-weight: 600;
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);
  color: ${props => props.theme.title};
  outline: none;
  cursor: pointer;
  @media (min-width: 375px) {
    width: 299px;
  }
  @media (min-width: 768px) {
    width: 354px;
    height: 46px;
    padding: 14px 0 14px 18px;
    font-size: 16px;
    line-height: calc((18 / 16) * 100%);
  }
  @media (min-width: 1440px) {
    margin-bottom: 0px;
  }
  &::placeholder {
    font-family: Inter;
    font-size: 14px;
    line-height: 1.29;

    color: rgba(17, 17, 17, 0.15);

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: calc((18 / 16) * 100%);
    }
  }
  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.scroll_bar};
  }

  &.is-valid {
    border: 1px solid #3cbc81;
  }

  &.is-invalid {
    border: 1px solid #e74a3b;
  }
`;
