import { TasksColumn } from '../TasksColumn/TasksColumn';
import { TasksColumnsListStyled } from './TasksColumnsList.styled';

export const TasksColumnsList = ({ tasks }) => {
  return (
    <TasksColumnsListStyled>
      <TasksColumn tasks={tasks} />
    </TasksColumnsListStyled>
  );
};
