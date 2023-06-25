import { CalendarToolBarStyled } from './CalendarToolBar.styled';
import { ChangeTypeDate } from './ChangeTypeDate/ChangeTypeDate';
import { DateBar } from './DateBar/DateBar';

export const CalendarToolBar = ({
  today,
  typeSelect,
  prevDayHandler,
  nextDayHandler,
  typeMonthHendler,
  typeDayHendler,
}) => {
  return (
    <CalendarToolBarStyled>
      <DateBar
        today={today}
        typeSelect={typeSelect}
        prevDayHandler={prevDayHandler}
        nextDayHandler={nextDayHandler}
      />
      <ChangeTypeDate
        typeSelect={typeSelect}
        typeMonthHendler={typeMonthHendler}
        typeDayHendler={typeDayHendler}
      />
    </CalendarToolBarStyled>
  );
};
