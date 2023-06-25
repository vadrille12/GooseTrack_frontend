import {
  ChangeTypeDateStyled,
  MonthBnt,
  DayBnt,
} from './ChangeTypeDate.styled';

export const ChangeTypeDate = () => {
  return (
    <ChangeTypeDateStyled>
      <MonthBnt to="month">Month</MonthBnt>
      <DayBnt to="day">Day</DayBnt>
    </ChangeTypeDateStyled>
  );
};
