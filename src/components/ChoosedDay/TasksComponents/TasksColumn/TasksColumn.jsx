import { useState } from 'react';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnTasksList } from '../ColumnTasksList/ColumnTasksList';
import { TaskItem, TasksColumnStyled } from './TasksColumn.styled';
import { TaskModal } from 'components/TaskModal/TaskModal';

export const TasksColumn = ({ tasks }) => {
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState('edit');
  const [column, setColumn] = useState('to-do');

  const tasksNames = ['To do', 'In progress', 'Done'];

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const categorizedTasks = {
    'To do': tasks.filter(task => task.category === 'to-do'),
    'In progress': tasks.filter(task => task.category === 'in-progress'),
    Done: tasks.filter(task => task.category === 'done'),
  };

  return (
    <TasksColumnStyled>
      {tasksNames.map((columnName, index) => (
        <TaskItem key={index}>
          <ColumnHeadBar
            taskName={columnName}
            onOpen={openModal}
            setAction={() => setAction('add')}
            setColumn={() => setColumn(columnName)}
          ></ColumnHeadBar>
          <ColumnTasksList
            tasks={categorizedTasks[columnName]}
            onOpen={openModal}
            setAction={() => setAction('edit')}
          />
          <AddTaskBtn
            onOpen={openModal}
            setAction={() => setAction('add')}
            setColumn={() => setColumn(columnName)}
          ></AddTaskBtn>

          {showModal && (
            <TaskModal action={action} onClose={closeModal} column={column} />
          )}
        </TaskItem>
      ))}
    </TasksColumnStyled>
  );
};
