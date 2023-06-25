import { startOfMonth, getDay, endOfMonth } from 'date-fns';
import { useParams } from 'react-router';

import {
  Cell,
  CalendarWrapper,
  LabelCell,
  TodayLabelCell,
} from './CalendarTable.styled';

import { TaskCalendar } from '../TaskCalendar/TaskCalendar';

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
];

const isCurrentDay = (day, month) => {
  const today = new Date();
  if (today.getDate() === day && today.getMonth() === month.getMonth()) {
    return true;
  }
  return false;
};

const isCurrentTask = (day, task) => {
  const taskDate = new Date(task.date);
  if (taskDate.getDate() === day) {
    return true;
  }
  return false;
};

export const CalendarTable = () => {
  const { currentDate } = useParams();
  const dateSelected = new Date(currentDate);
  const firstDay = getDay(startOfMonth(dateSelected));
  const lastDay = endOfMonth(dateSelected).getDate();
  const calendar = [];

  const daysToAdd = firstDay === 0 ? 6 : firstDay - 1;
  for (let i = 0; i < daysToAdd; i++) {
    calendar.push('');
  }
  for (let i = 1; i <= lastDay; i++) {
    calendar.push(i);
  }
  for (let i = calendar.length; i < 35; i++) {
    calendar.push('');
  }

  return (
    <CalendarWrapper>
      {calendar.map((day, index) => (
        <Cell key={index}>
          {isCurrentDay(day, dateSelected) ? (
            <TodayLabelCell>{day}</TodayLabelCell>
          ) : (
            <LabelCell>{day}</LabelCell>
          )}
          {tasks.map((task, index) =>
            isCurrentTask(day, task) ? (
              <TaskCalendar
                key={day.toString() + index.toString()}
                task={task}
              />
            ) : null
          )}
        </Cell>
      ))}
    </CalendarWrapper>
  );
};
