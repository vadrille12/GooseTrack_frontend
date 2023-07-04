import { DayCalendarHead } from './TasksComponents/DayCalendarHead/DayCalendarHead';
import { TasksColumnsList } from './TasksComponents/TasksColumnsList/TasksColumnsList';
import { ChoosedDayStyled } from './ChoosedDay.styled';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectTasks,
  selectIsLoading,
  selectError,
} from '../../redux/tasks/selectors';
import Spinner from 'components/Spinner/spinner';

const ChoosedDay = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const tasks = useSelector(selectTasks);

  const { currentDay: targetDate } = useParams();
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const filtered = tasks.filter(task => task.date === targetDate);
    setFilteredTasks(filtered);
  }, [targetDate, tasks]);

  return (
    <ChoosedDayStyled>
      {isLoading && !error && <Spinner />}
      <DayCalendarHead />
      <TasksColumnsList tasks={filteredTasks} />
    </ChoosedDayStyled>
  );
};

export default ChoosedDay;
