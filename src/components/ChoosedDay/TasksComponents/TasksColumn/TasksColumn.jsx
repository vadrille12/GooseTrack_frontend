import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { TasksColumnStyled, TaskItem } from './TasksColumn.styled';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnTasksList } from '../ColumnTasksList/ColumnTasksList';
import { TaskModal } from 'components/TaskModal/TaskModal';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import { editTask } from 'redux/tasks/operations';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

const tasksNames = ['To do', 'In progress', 'Done'];

export const TasksColumn = ({ tasks, setTasks }) => {
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState('edit');
  const [column, setColumn] = useState('To do');
  const [taskToEdit, setTaskToEdit] = useState({});

  const dispatch = useDispatch();

  const onDragEnd = async result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId) {
      return;
    }

    const taskId = draggableId;
    const newCategory = Object.keys(droppableIds).find(
      key => droppableIds[key] === result.destination.droppableId
    );
    const formattedCategory = newCategory.toLowerCase().replace(/\s+/g, '-');

    try {
      await dispatch(editTask({ _id: taskId, category: formattedCategory }));
    } catch (error) {}
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

  const droppableIds = tasksNames.reduce((acc, columnName) => {
    const id = nanoid();
    acc[columnName] = id;
    return acc;
  }, {});

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
            <Droppable droppableId={droppableIds[columnName].toString()}>
              {(provided, snapshot) => (
                <ColumnTasksList
                  tasks={categorizedTasks[columnName]}
                  onOpen={openModal}
                  setAction={() => setAction('edit')}
                  setColumn={() => setColumn(columnName)}
                  onEdit={setTaskToEdit}
                  column={columnName}
                  provided={provided}
                  snapshot={snapshot}
                />
              )}
            </Droppable>
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
