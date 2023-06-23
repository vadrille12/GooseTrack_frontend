import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';
import { ChoosedDayStyled } from '../ChoosedDay/ChoosedDay.styled';
import { DayCalendarHead } from './TasksComponents/DayCalendarHead/DayCalendarHead';
import { TasksColumnsList } from './TasksComponents/TasksColumnsList/TasksColumnsList';
// import { useParams } from 'react-router-dom';

export const ChoosedDay = () => {
  // const { currentDay: targetDate } = useParams();
  return (
    <ChoosedDayStyled>
      <CalendarToolbar />
      <DayCalendarHead />
      <TasksColumnsList />
    </ChoosedDayStyled>
  );
};
