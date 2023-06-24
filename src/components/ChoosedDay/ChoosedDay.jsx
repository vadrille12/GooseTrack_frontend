import { DayCalendarHead } from './TasksComponents/DayCalendarHead/DayCalendarHead';
import { TasksColumnsList } from './TasksComponents/TasksColumnsList/TasksColumnsList';
import { CalendarToolBar } from '../CalendarToolBar/CalendarToolBar';
import { ChoosedDayStyled } from './ChoosedDay.styled';
import { TaskModal } from 'components/TaskModal/TaskModal';

// import { useParams } from 'react-router-dom';
// просто коммент

export const ChoosedDay = () => {
  // const { currentDay: targetDate } = useParams();
  return (
    <ChoosedDayStyled>
      <CalendarToolBar />
      <DayCalendarHead />
      <TasksColumnsList />
      <TaskModal></TaskModal>
    </ChoosedDayStyled>
  );
};
