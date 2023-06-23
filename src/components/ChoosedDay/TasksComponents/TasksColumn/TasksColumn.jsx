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
      {/* <TaskItem>
        <ColumnHeadBar>{tasksNames[0]}</ColumnHeadBar>
        <ColumnTasksList />
        <AddTaskBtn></AddTaskBtn>
      </TaskItem>
      <TaskItem>
        <ColumnHeadBar>{tasksNames[1]}</ColumnHeadBar>
        <ColumnTasksList />
        <AddTaskBtn></AddTaskBtn>
      </TaskItem>
      <TaskItem>
        <ColumnHeadBar>{tasksNames[2]}</ColumnHeadBar>
        <ColumnTasksList />
        <AddTaskBtn></AddTaskBtn>
      </TaskItem> */}
    </TasksColumnStyled>
  );
};
