import { Task } from './TaskCalendar.styled';

export const TaskCalendar = ({ task, onOpen, setTask }) => {
  const { title, priority } = task;
  // priority: [low | medium | high] |
  return (
    <Task
      priority={priority}
      onClick={() => {
        setTask(task);
        onOpen();
      }}
    >
      {title}
    </Task>
  );
};
