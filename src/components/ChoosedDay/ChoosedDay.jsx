import { ChoosedDayStyled } from '../ChoosedDay/ChoosedDay.styled';
import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';
import { TasksColumnsList } from './TasksColumnsList/TasksColumnsList';

export const ChoosedDay = () => {
  return (
    <ChoosedDayStyled>
      <DayCalendarHead />
      <TasksColumnsList />
    </ChoosedDayStyled>
  );
};
