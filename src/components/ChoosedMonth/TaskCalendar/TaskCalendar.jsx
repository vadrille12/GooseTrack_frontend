import { Task } from './TaskCalendar.styled';

export const TaskCalendar = ({ task, onOpen, setCategory }) => {
  const { title, priority } = task;
  // priority: [low | medium | high] |
  return (
    <Task
      priority={priority}
      onClick={() => {
        setCategory(task.category);
        onOpen();
      }}
    >
      {title}
    </Task>
  );
};
