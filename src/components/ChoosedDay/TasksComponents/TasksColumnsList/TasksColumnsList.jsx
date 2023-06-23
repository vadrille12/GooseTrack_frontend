import { TasksColumn } from '../TasksColumn/TasksColumn';
import { TasksColumnsListStyled } from './TasksColumnsList.styled';

export const TasksColumnsList = () => {
  return (
    <TasksColumnsListStyled>
      <TasksColumn />
    </TasksColumnsListStyled>
  );
};
