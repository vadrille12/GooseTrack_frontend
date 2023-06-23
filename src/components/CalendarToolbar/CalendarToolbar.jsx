import { CalendarToolbarStyled } from './CalendarToolbar.styled';
import { ChangeTypeDate } from './ChangeTypeDate/ChangeTypeDate';
import { DateBar } from './DateBar/DateBar';

export const CalendarToolbar = () => {
  return (
    <CalendarToolbarStyled>
      <DateBar />
      <ChangeTypeDate />
    </CalendarToolbarStyled>
  );
};
