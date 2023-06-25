import {
  ChangeTypeDateStyled,
  MonthBnt,
  DayBnt,
} from './ChangeTypeDate.styled';
import moment from 'moment';

export const ChangeTypeDate = () => {
  const currentDate = moment().format('YYYY-MM-DD');

  return (
    <ChangeTypeDateStyled>
      <MonthBnt to={`month/${currentDate}`}>Month</MonthBnt>
      <DayBnt to={`day/${currentDate}`}>Day</DayBnt>
    </ChangeTypeDateStyled>
  );
};
