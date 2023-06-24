import { useState } from 'react';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnTasksList } from '../ColumnTasksList/ColumnTasksList';
import { TaskItem, TasksColumnStyled } from './TasksColumn.styled';
import { TaskModal } from 'components/TaskModal/TaskModal';

export const TasksColumn = () => {
  const [showModal, setShowModal] = useState(false);
  const tasksNames = ['To do', 'In progress', 'Done'];

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <TasksColumnStyled>
      {tasksNames.map((columnName, index) => (
        <TaskItem key={index}>
          <ColumnHeadBar
            taskName={columnName}
            onOpen={openModal}
          ></ColumnHeadBar>
          <ColumnTasksList />
          <AddTaskBtn onOpen={openModal}></AddTaskBtn>

          {showModal && <TaskModal onClose={closeModal} />}
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
