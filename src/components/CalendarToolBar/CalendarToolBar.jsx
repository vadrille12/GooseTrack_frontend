import { CalendarToolBarStyled } from './CalendarToolBar.styled';
import { ChangeTypeDate } from './ChangeTypeDate/ChangeTypeDate';
import { DateBar } from './DateBar/DateBar';
// коммент
export const CalendarToolBar = () => {
  return (
    <CalendarToolBarStyled>
      <DateBar />
      <ChangeTypeDate />
    </CalendarToolBarStyled>
  );
};
