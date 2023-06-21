import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnTasksList } from '../ColumnTasksList/ColumnTasksList';
import { TaskItem, TasksColumnStyled } from './TasksColumn.styled';

export const TasksColumn = () => {
  const tasksNames = ['To do', 'In progress', 'Done'];

  return (
    <TasksColumnStyled>
      {tasksNames.map((columnName, index) => (
        <TaskItem key={index}>
          <ColumnHeadBar taskName={columnName}></ColumnHeadBar>
          <ColumnTasksList />
          <AddTaskBtn></AddTaskBtn>
        </TaskItem>
      ))}
    </TasksColumnStyled>
  );
};
