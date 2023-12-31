import { CalendarToolBarStyled } from './CalendarToolBar.styled';
import { ChangeTypeDate } from './ChangeTypeDate/ChangeTypeDate';
import { DateBar } from './DateBar/DateBar';

export const CalendarToolBar = () => {
  return (
    <CalendarToolBarStyled>
      <DateBar />
      <ChangeTypeDate />
    </CalendarToolBarStyled>
  );
};
