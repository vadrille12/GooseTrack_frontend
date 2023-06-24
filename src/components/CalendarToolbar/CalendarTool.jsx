import { CalendarToolBarStyled } from './CalendarTool.styled';
import { ChangeTypeDate } from './ChangeTypeDate/ChangeTypeDate';
import { DateBar } from './DateBar/DateBar';
// коммент
export const CalendarTool = () => {
  return (
    <CalendarToolBarStyled>
      <DateBar />
      <ChangeTypeDate />
    </CalendarToolBarStyled>
  );
};
