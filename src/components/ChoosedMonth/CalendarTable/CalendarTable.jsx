import { startOfMonth, getDay } from 'date-fns';
import { useParams } from 'react-router';

import {
  Cell,
  CalendarWrapper,
  LabelCell,
  TodayLabelCell,
  OtherMonthLabelCell,
} from './CalendarTable.styled';

import { TaskCalendar } from '../TaskCalendar/TaskCalendar';

const isCurrentDay = date => {
  const today = new Date();
  if (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getYear() === today.getYear()
  ) {
    return true;
  }
  return false;
};

const isCurrentMonth = (date, curentDate) => {
  if (date.getMonth() === curentDate.getMonth()) {
    return true;
  }
  return false;
};

const isCurrentTask = (date, task) => {
  const day = trimDate(date);
  if (task.date === day) {
    return true;
  }
  return false;
};

const gotolink = day => {
  return `/calendar/day/${trimDate(day)}`;
};

const trimDate = date => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

const extendDate = string => {
  return new Date(string);
};

export const CalendarTable = ({ tasks }) => {
  const { currentDate } = useParams();
  const dateSelected = extendDate(currentDate);
  const weekFirstDay = getDay(startOfMonth(dateSelected));
  const calendar = [];

  const daysToAddInPreviousMonth = weekFirstDay === 0 ? 6 : weekFirstDay - 1;
  const firstDay = new Date(
    startOfMonth(dateSelected) - daysToAddInPreviousMonth * 3600 * 1000 * 24
  );

  for (let i = 0; i < 42; i++) {
    const result = new Date(firstDay.getTime() + i * 86400000);
    calendar.push(result);
  }

  return (
    <CalendarWrapper>
      {calendar.map((day, index) => (
        <Cell to={gotolink(day)} key={index}>
          {isCurrentDay(day) ? (
            <TodayLabelCell>{day.getDate()}</TodayLabelCell>
          ) : isCurrentMonth(day, dateSelected) ? (
            <LabelCell>{day.getDate()}</LabelCell>
          ) : (
            <OtherMonthLabelCell>{day.getDate()}</OtherMonthLabelCell>
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
