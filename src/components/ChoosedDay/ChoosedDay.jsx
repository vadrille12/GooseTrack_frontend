import { DayCalendarHead } from './TasksComponents/DayCalendarHead/DayCalendarHead';
import { TasksColumnsList } from './TasksComponents/TasksColumnsList/TasksColumnsList';
import { ChoosedDayStyled } from './ChoosedDay.styled';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/tasks/operations';
import {
  selectTasks,
  selectIsLoading,
  selectError,
} from '../../redux/tasks/selectors';
import Spinner from 'components/Spinner/spinner';

const ChoosedDay = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const tasks = useSelector(selectTasks);

  console.log(tasks);

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
