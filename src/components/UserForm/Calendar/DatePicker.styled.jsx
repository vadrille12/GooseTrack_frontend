import { styled } from '@mui/material/styles';
import { DatePicker as DatePickerCalendar } from '@mui/x-date-pickers/DatePicker';
import { variables } from 'Styles/GlobalStyle';

export const DatePicker = styled(DatePickerCalendar)`
  box-sizing: border-box;
  width: 100%;
  font-weight: 600;
  font-family: Inter;
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);
  outline: none;
  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.15);
  transition: ${variables.transitions.standart};

  cursor: text;

  &.is-valid {
    border: 1px solid #3cbc81;
  }
  &.is-invalid {
    border: 1px solid #e74a3b;
  }
  &.error-success {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.title};
    transition: ${variables.transitions.standart};
  }

  & .MuiInputBase-input {
    padding: 0px 0px 0px 14px;
    font-size: 14px;
    line-height: 1.29;
    height: 18px;
    font-weight: 600;
  }
  .MuiOutlinedInput-root {
    outline: none;
    border: none;

    .MuiOutlinedInput-notchedOutline {
      border: none;
    }
  }

  .MuiInputBase-root {
    height: 42px;
    border-radius: 8px;
    border-radius: 8px;
    font-family: Inter;

    border: 0.1px solid rgba(255, 255, 255, 0.15);
    &:hover,
    &:focus {
      border: 1px solid white;
      transition: ${variables.transitions.standart};
    }
  }

  input::placeholder {
    font-family: Inter;
    font-size: 14px;
    color: ${props => props.theme.title};
    font-weight: 600;
    opacity: 1;
    outline: none;
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
  & .MuiButtonBase-root {
    margin-left: 18px;
    padding: 4px;
    border-radius: 1%;
    stroke: #ffffff;
    margin: 0px 27px;
  }

  && .MuiSvgIcon-root {
    color: #111111;
    width: 30px;
    height: 30px;
    font-size: 18px;
  }

  &.MuiFormControl-root {
    background-color: inherit;
  }

  @media (min-width: 375px) {
    width: 299px;
  }

  @media (min-width: 768px) {
    width: 354px;

    font-size: 16px;
    line-height: 1.12;

    .MuiStack-root {
      color: ${props => props.theme.title};
    }

    && .MuiInputBase-root {
      height: 46px;
      /* border: 0.1px solid rgba(255, 255, 255, 0.12); */
    }

    && .MuiInputBase-input {
      padding: 0px 0px 0px 18px;
      font-size: 16px;
      line-height: 1.12;
      height: 20px;
      font-weight: 600;
    }
  }
`;
export const PopperDateStyles = {
  '& .MuiDateCalendar-root': {
    height: '336px',
    fontFamily: 'Inter',
  },
  '& .MuiPaper-root': {
    backgroundColor: '#3E85F3',
    borderRadius: '16px',
    fontFamily: 'Inter',
    position: 'absolute',
    top: '5px',
    left: '-10px',
    fontSize: '34px',
  },
  '& .MuiPickersCalendarHeader-root': {
    position: 'relative',
    justifyContent: 'center',
  },
  '& .MuiPickersCalendarHeader-labelContainer': {
    margin: 0,
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: '20px',
    lineHeight: 1.2,
  },
  '& .MuiButtonBase-root.MuiIconButton-root.MuiPickersCalendarHeader-switchViewButton':
    { display: 'none' },
  '& .MuiPickersDay-root': {
    color: '#FFFFFF',
    fontWeight: 300,
    fontSize: '14px',
    lineHeight: 1.33,
    fontFamily: 'Inter',
    padding: '20px',
  },
  '& .MuiPickersArrowSwitcher-spacer': {
    display: 'none',
  },
  '& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button':
    {
      position: 'absolute',
      left: '35px',
      top: '9px',
      color: '#FFFFFF',
      width: '18px',
      height: '18px',
    },
  '& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeStart.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button':
    {
      position: 'absolute',
      top: '9px',
      right: '35px',
      color: '#FFFFFF',
      width: '18px',
      height: '18px',
    },
  '& .MuiDayCalendar-header': {
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  },
  '& .MuiTypography-root.MuiTypography-caption.MuiDayCalendar-weekDayLabel': {
    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: 1.28,
  },

  '& .MuiPickersYear-yearButton': {
    color: '#FFFFFF',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: 1.28,
  },
  '& .MuiPickersYear-yearButton.Mui-selected': {
    backgroundColor: '#FFFFFF',
    color: '#3E85F3',
    borderRadius: '24px',
  },
  '& .MuiPickersYear-yearButton.Mui-wekend': {
    opacity: '35%',
  },
  '& .MuiPickersYear-yearButton.Mui-today.Mui-selected': {
    backgroundColor: '#FFFFFF',
    color: '#3E85F3',
    borderRadius: '24px',
    border: 'none',
  },
  '& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected': {
    backgroundColor: '#FFFFFF',
    color: '#3E85F3',
    borderRadius: '24px',
    width: '32px',
    height: '32px',
  },

  '& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected.MuiPickersDay-dayWithMargin.MuiPickersDay-today':
    {
      fill: '#FFFFFF',
      backgroundColor: '#FFFFFF',
      color: '#3E85F3',
      borderRadius: '24px',
      width: '32px',
      height: '32px',
    },

  '@media (min-width: 768px)': {
    '& .MuiDateCalendar-root': {
      width: '337px',
      minHeight: '354px',
    },
    '& .MuiPaper-root': {
      padding: '15px 18px',
      scroll: 'none',
      position: 'absolute',
      top: '5px',
      left: '-10px',
    },
    '& .MuiPickersCalendarHeader-labelContainer': {
      fontSize: '24px',
      lineHeight: 1.17,
    },
    '& .MuiTypography-root.MuiTypography-caption.MuiDayCalendar-weekDayLabel': {
      fontSize: '18px',
      lineHeight: 1.33,
      padding: '22px',
    },
    '& .MuiPickersYear-yearButton': {
      fontSize: '18px',
      lineHeight: 1.33,
    },
    '& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button':
      {
        left: '55px',
        top: '9px',
      },
    '& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeStart.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button':
      {
        top: '9px',
        right: '55px',
      },
    '& .MuiPickersDay-root': {
      color: '#FFFFFF',
      fontWeight: 300,
      fontSize: '18px',
      lineHeight: 1.33,
      fontFamily: 'Inter',
      padding: '22px',
    },
  },

  '@media (min-width: 1440px)': {
    '& .MuiDateCalendar-root': {
      width: '337px',
      minHeight: '334px',
    },
    '& .MuiPaper-root': {
      padding: '15px 18px',
      scroll: 'none',
      position: 'absolute',
      top: '-190px',
      left: '190px',
    },
    '& .MuiPickersCalendarHeader-labelContainer': {
      fontSize: '24px',
      lineHeight: 1.17,
    },
    '& .MuiTypography-root.MuiTypography-caption.MuiDayCalendar-weekDayLabel': {
      fontSize: '18px',
      lineHeight: 1.33,
    },
    '& .MuiDayCalendar-weekend': { opacity: '35%' },
    '& .MuiPickersYear-yearButton': {
      fontSize: '18px',
      lineHeight: 1.33,
    },
    '& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button':
      {
        left: '55px',
        top: '9px',
      },
    '& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeStart.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button':
      {
        top: '9px',
        right: '55px',
      },
  },
};
