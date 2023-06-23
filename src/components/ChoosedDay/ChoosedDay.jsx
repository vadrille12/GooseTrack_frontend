import { CalendarToolBar } from 'components/CalendarToolBar/CalendarToolBar';
import { ChoosedDayStyled } from '../ChoosedDay/ChoosedDay.styled';
import { DayCalendarHead } from './TasksComponents/DayCalendarHead/DayCalendarHead';
import { TasksColumnsList } from './TasksComponents/TasksColumnsList/TasksColumnsList';
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
