import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { startOfMonth, getDay } from 'date-fns';

import { TaskCalendar } from '../TaskCalendar/TaskCalendar';
import { TaskModal } from 'components/TaskModal/TaskModal';

import {
  Cell,
  CalendarWrapper,
  LabelCell,
  TodayLabelCell,
  OtherMonthLabelCell,
  LabelWrapper,
} from './CalendarTable.styled';

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

const setCategory = column => {
  switch (column) {
    case 'to-do':
      return 'To do';
    case 'in-progress':
      return 'In progress';
    case 'done':
      return 'Done';
    default:
      return null;
  }
};

export const CalendarTable = ({ tasks }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({});
  const { currentDate } = useParams();
  const dateSelected = extendDate(currentDate);
  const weekFirstDay = getDay(startOfMonth(dateSelected));
  const calendar = [];

  const daysToAddInPreviousMonth = weekFirstDay === 0 ? 6 : weekFirstDay - 1;
  const firstDay = new Date(
    startOfMonth(dateSelected) - daysToAddInPreviousMonth * 3600 * 1000 * 24
  );

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const navigateToLink = (e, day) => {
    if (e.target === e.currentTarget) {
      navigate(gotolink(day));
    }
    return;
  };

  for (let i = 0; i < 42; i++) {
    const result = new Date(firstDay.getTime() + i * 86400000);
    calendar.push(result);
  }

  return (
    <CalendarWrapper>
      {calendar.map((day, index) => (
        <Cell onClick={e => navigateToLink(e, day)} key={index}>
          {isCurrentDay(day) ? (
            <TodayLabelCell>{day.getDate()}</TodayLabelCell>
          ) : isCurrentMonth(day, dateSelected) ? (
            <LabelCell>{day.getDate()}</LabelCell>
          ) : (
            <OtherMonthLabelCell>{day.getDate()}</OtherMonthLabelCell>
          )}
          <LabelWrapper>
            {tasks.map((task, index) =>
              isCurrentTask(day, task) ? (
                <TaskCalendar
                  key={day.toString() + index.toString()}
                  task={task}
                  onOpen={openModal}
                  setTask={() => {
                    setTaskToEdit(task);
                  }}
                />
              ) : null
            )}
          </LabelWrapper>
        </Cell>
      ))}
      {showModal && (
        <TaskModal
          action={'edit'}
          onClose={closeModal}
          column={setCategory(taskToEdit.category)}
          taskToEdit={taskToEdit}
        />
      )}
    </CalendarWrapper>
  );
};
