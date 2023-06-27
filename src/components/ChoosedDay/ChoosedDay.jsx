import { DayCalendarHead } from './TasksComponents/DayCalendarHead/DayCalendarHead';
import { TasksColumnsList } from './TasksComponents/TasksColumnsList/TasksColumnsList';
import { ChoosedDayStyled } from './ChoosedDay.styled';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const tasks = [
  {
    title: 'To do 1',
    start: '09:00',
    end: '10:00',
    priority: 'low',
    date: '2023-06-25',
    category: 'done',
  },
  {
    title: 'To do 2',
    start: '09:00',
    end: '10:00',
    priority: 'low',
    date: '2023-06-25',
    category: 'to-do',
  },
  {
    title: 'To do 3',
    start: '09:00',
    end: '10:00',
    priority: 'low',
    date: '2023-06-23',
    category: 'to-do',
  },
  {
    title: 'To do 4',
    start: '09:00',
    end: '10:00',
    priority: 'high',
    date: '2023-06-24',
    category: 'in-progress',
  },
  {
    title: 'To do 5',
    start: '09:00',
    end: '10:00',
    priority: 'low',
    date: '2023-06-25',
    category: 'to-do',
  },
  {
    title: 'To do 6 To do 6To do 6To do 6To do 6To do 6To do 6To do 6To do 6',
    start: '09:00',
    end: '10:00',
    priority: 'medium',
    date: '2023-06-26',
    category: 'to-do',
  },

  {
    title: 'To do 6 To do 6To do 6To do 6To do 6To do 6To do 6To do 6To do 6',
    start: '09:00',
    end: '10:00',
    priority: 'low',
    date: '2023-06-27',
    category: 'to-do',
  },

  {
    title: 'To dodo 6To do 6To do 6To do 6To do 6To do 6To do 6To do 6',
    start: '09:00',
    end: '10:00',
    priority: 'medium',
    date: '2023-06-27',
    category: 'to-do',
  },

  {
    title: 'To dodo 6To do 6To do 6To do 6To do 6To do 6To do 6To do 6',
    start: '09:00',
    end: '10:00',
    priority: 'high',
    date: '2023-06-27',
    category: 'to-do',
  },

  {
    title: 'To do 6 To do 6To do 6To do 6To do 6To do 6To do 6To do 6To do 6',
    start: '09:00',
    end: '10:00',
    priority: 'low',
    date: '2023-06-27',
    category: 'done',
  },

  {
    title: 'To dodo 6To do 6To do 6To do 6To do 6To do 6To do 6To do 6',
    start: '09:00',
    end: '10:00',
    priority: 'medium',
    date: '2023-06-27',
    category: 'in-progress',
  },

  {
    title: 'To dodo 6To do 6To do 6To do 6To do 6To do 6To do 6To do 6',
    start: '09:00',
    end: '10:00',
    priority: 'high',
    date: '2023-06-29',
    category: 'in-progress',
  },

  {
    title: 'To do 6 To do 6To do 6To do 6To do 6To do 6To do 6To do 6To do 6',
    start: '09:00',
    end: '10:00',
    priority: 'low',
    date: '2023-06-27',
    category: '30',
  },

  {
    title: 'To dodo 6To do 6To do 6To do 6To do 6To do 6To do 6To do 6',
    start: '09:00',
    end: '10:00',
    priority: 'medium',
    date: '2023-06-27',
    category: '30',
  },

  {
    title: 'To dodo 6To do 6To do 6To do 6To do 6To do 6To do 6To do 6',
    start: '09:00',
    end: '10:00',
    priority: 'high',
    date: '2023-06-27',
    category: 'to-do',
  },

  {
    title: 'To do 6 To do 6To do 6To do 6To do 6To do 6To do 6To do 6To do 6',
    start: '09:00',
    end: '10:00',
    priority: 'low',
    date: '2023-06-31',
    category: 'done',
  },

  {
    title: 'To dodo 6To do 6To do 6To do 6To do 6To do 6To do 6To do 6',
    start: '09:00',
    end: '10:00',
    priority: 'medium',
    date: '2023-06-30',
    category: 'in-progress',
  },

  {
    title: 'To dodo 6To do 6To do 6To do 6To do 6To do 6To do 6To do 6',
    start: '09:00',
    end: '10:00',
    priority: 'high',
    date: '2023-06-30',
    category: 'in-progress',
  },
  {
    title: 'To do 6 To do 6To do 6To do 6To do 6To do 6To do 6To do 6To do 6',
    start: '09:00',
    end: '10:00',
    priority: 'low',
    date: '2023-06-28',
    category: 'to-do',
  },

  {
    title: 'To dodo 6To do 6To do 6To do 6To do 6To do 6To do 6To do 6',
    start: '09:00',
    end: '10:00',
    priority: 'medium',
    date: '2023-06-28',
    category: 'to-do',
  },

  {
    title: 'To dodo 6To do 6To do 6To do 6To do 6To do 6To do 6To do 6',
    start: '09:00',
    end: '10:00',
    priority: 'high',
    date: '2023-06-28',
    category: 'to-do',
  },

  {
    title: 'To do 6 To do 6To do 6To do 6To do 6To do 6To do 6To do 6To do 6',
    start: '09:00',
    end: '10:00',
    priority: 'low',
    date: '2023-06-29',
    category: 'done',
  },

  {
    title: 'To dodo 6To do 6To do 6To do 6To do 6To do 6To do 6To do 6',
    start: '09:00',
    end: '10:00',
    priority: 'medium',
    date: '2023-06-29',
    category: 'in-progress',
  },

  {
    title: 'To dodo 6To do 6To do 6To do 6To do 6To do 6To do 6To do 6',
    start: '09:00',
    end: '10:00',
    priority: 'high',
    date: '2023-06-29',
    category: 'in-progress',
  },
];

const ChoosedDay = () => {
  const { currentDay: targetDate } = useParams();
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const filtered = tasks.filter(task => task.date === targetDate);
    setFilteredTasks(filtered);
  }, [targetDate]);

  return (
    <ChoosedDayStyled>
      <DayCalendarHead />
      <TasksColumnsList tasks={filteredTasks} />
    </ChoosedDayStyled>
  );
};

export default ChoosedDay;
