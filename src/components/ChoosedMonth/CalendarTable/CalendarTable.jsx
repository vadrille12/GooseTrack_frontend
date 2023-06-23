import { startOfMonth, getDay, endOfMonth } from 'date-fns';

import { Cell, CalendarWrapper } from './CalendarTable.styled';

// temporary constant. in future I'll get it in props or in store
const currentMonth = new Date();

export const CalendarTable = () => {
  const firstDay = getDay(startOfMonth(currentMonth));
  const lastDay = endOfMonth(currentMonth).getDate();
  const calendar = [];

  for (let i = 1; i < firstDay; i++) {
    calendar.push('');
  }
  for (let i = 1; i <= lastDay; i++) {
    calendar.push(i.toString());
  }
  for (let i = calendar.length; i < 35; i++) {
    calendar.push('');
  }

  return (
    <CalendarWrapper>
      {calendar.map((day, index) => (
        <Cell key={index}>{day}</Cell>
      ))}
    </CalendarWrapper>
  );
};
