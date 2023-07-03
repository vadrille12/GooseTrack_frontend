import React, { useState } from 'react';
import {
  ChangeTypeDateStyled,
  MonthBnt,
  DayBnt,
} from './ChangeTypeDate.styled';
import moment from 'moment';

export const ChangeTypeDate = () => {
  const currentDate = moment().format('YYYY-MM-DD');
  const [activeType, setActiveType] = useState('month');

  const handleTypeChange = type => {
    setActiveType(type);
  };

  return (
    <ChangeTypeDateStyled>
      <MonthBnt
        to={`month/${currentDate}`}
        className={activeType === 'month' ? 'active' : ''}
        onClick={() => handleTypeChange('month')}
      >
        Month
      </MonthBnt>
      <DayBnt
        to={`day/${currentDate}`}
        className={activeType === 'day' ? 'active' : ''}
        onClick={() => handleTypeChange('day')}
      >
        Day
      </DayBnt>
    </ChangeTypeDateStyled>
  );
};
