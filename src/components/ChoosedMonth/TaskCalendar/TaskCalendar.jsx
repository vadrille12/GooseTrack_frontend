import { Task } from './TaskCalendar.styled';

export const TaskCalendar = ({ task }) => {
  const { title, priority } = task;
  return <Task priority={priority}>{title}</Task>;
};
// priority: [low | medium | high] | обов'язково
