import { DayCalendarHead } from './TasksComponents/DayCalendarHead/DayCalendarHead';
import { TasksColumnsList } from './TasksComponents/TasksColumnsList/TasksColumnsList';
import { CalendarTool } from '../CalendarTool/CalendarTool';
import { ChoosedDayStyled } from './ChoosedDay.styled';
// import { useParams } from 'react-router-dom';
// просто коммент

export const ChoosedDay = () => {
  // const { currentDay: targetDate } = useParams();
  return (
    <ChoosedDayStyled>
      <CalendarTool />
      <DayCalendarHead />
      <TasksColumnsList />
    </ChoosedDayStyled>
  );
};
