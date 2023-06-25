import { DayCalendarHead } from './TasksComponents/DayCalendarHead/DayCalendarHead';
import { TasksColumnsList } from './TasksComponents/TasksColumnsList/TasksColumnsList';
import { ChoosedDayStyled } from './ChoosedDay.styled';

// import { useParams } from 'react-router-dom';
// просто коммент

const ChoosedDay = () => {
  // const { currentDay: targetDate } = useParams();
  return (
    <ChoosedDayStyled>
      <DayCalendarHead />
      <TasksColumnsList />
    </ChoosedDayStyled>
  );
};

export default ChoosedDay;
