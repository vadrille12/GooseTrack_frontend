import React from 'react';
import { ColumnTasksListStyled } from './ColumnTasksList.styled';
import { TaskCard } from '../ТaskCard/ТaskCard';

export const ColumnTasksList = ({
  tasks,
  onOpen,
  setAction,
  setColumn,
  onEdit,
  provided,
  snapshot,
}) => {
  return (
    <ColumnTasksListStyled
      ref={provided.innerRef}
      {...provided.droppableProps}
      isDraggingOver={snapshot.isDraggingOver}
    >
      {tasks.map((task, index) => (
        <TaskCard
          key={task._id}
          task={task}
          onOpen={onOpen}
          setAction={setAction}
          setColumn={setColumn}
          onEdit={onEdit}
          index={index}
        />
      ))}
      {provided.placeholder}
    </ColumnTasksListStyled>
  );
};
