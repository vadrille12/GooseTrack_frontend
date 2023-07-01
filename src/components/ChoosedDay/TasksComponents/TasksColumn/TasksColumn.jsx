import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { TasksColumnStyled, TaskItem } from './TasksColumn.styled';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnTasksList } from '../ColumnTasksList/ColumnTasksList';
import { TaskModal } from 'components/TaskModal/TaskModal';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';

const tasksNames = ['To do', 'In progress', 'Done'];

export const TasksColumn = ({ tasks, setTasks }) => {
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState('edit');
  const [column, setColumn] = useState('To do');
  const [taskToEdit, setTaskToEdit] = useState({});

  const onDragEnd = result => {
    const { destination, source } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceColumn = tasksNames[source.droppableId];
    const destinationColumn = tasksNames[destination.droppableId];

    const sourceTasks = categorizedTasks[sourceColumn];
    const movedTask = sourceTasks[source.index];

    const updatedSourceTasks = [...sourceTasks];
    updatedSourceTasks.splice(source.index, 1);

    const destinationTasks = categorizedTasks[destinationColumn];
    const updatedDestinationTasks = [...destinationTasks];
    updatedDestinationTasks.splice(destination.index, 0, movedTask);

    const updatedCategorizedTasks = {
      ...categorizedTasks,
      [sourceColumn]: updatedSourceTasks,
      [destinationColumn]: updatedDestinationTasks,
    };

    const newState = {
      ...tasks,
      [column]: updatedCategorizedTasks,
    };

    setTasks(newState);
  };

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
    <DragDropContext onDragEnd={onDragEnd}>
      <TasksColumnStyled>
        {tasksNames.map((columnName, index) => (
          <TaskItem key={columnName}>
            <ColumnHeadBar
              taskName={columnName}
              onOpen={openModal}
              setAction={() => setAction('add')}
              setColumn={() => setColumn(columnName)}
            />
            <ColumnTasksList
              tasks={categorizedTasks[columnName]}
              onOpen={openModal}
              setAction={() => setAction('edit')}
              setColumn={() => setColumn(columnName)}
              onEdit={setTaskToEdit}
            />
            <AddTaskBtn
              onOpen={openModal}
              setAction={() => setAction('add')}
              setColumn={() => setColumn(columnName)}
            />

            {showModal && (
              <TaskModal
                action={action}
                onClose={closeModal}
                column={column}
                taskToEdit={taskToEdit}
              />
            )}
          </TaskItem>
        ))}
      </TasksColumnStyled>
    </DragDropContext>
  );
};
