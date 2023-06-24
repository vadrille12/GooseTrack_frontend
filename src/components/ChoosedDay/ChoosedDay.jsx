import { ChoosedDayStyled } from '../ChoosedDay/ChoosedDay.styled';
import { DayCalendarHead } from './TasksComponents/DayCalendarHead/DayCalendarHead';
import { TasksColumnsList } from './TasksComponents/TasksColumnsList/TasksColumnsList';
import { CalendarToolBar } from '../CalendarToolBar/CalendarToolBar';
// import { useParams } from 'react-router-dom';

export const ChoosedDay = () => {
  // const { currentDay: targetDate } = useParams();
  return (
    <ChoosedDayStyled>
      <CalendarToolBar />
      <DayCalendarHead />
      <TasksColumnsList />
    </ChoosedDayStyled>
  );
};
