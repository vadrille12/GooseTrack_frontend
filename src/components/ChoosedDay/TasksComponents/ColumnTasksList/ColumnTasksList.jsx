import { Droppable } from 'react-beautiful-dnd';

import { ColumnTasksListStyled } from './ColumnTasksList.styled';
import { TaskCard } from '../ТaskCard/ТaskCard';
import { nanoid } from '@reduxjs/toolkit';

export const ColumnTasksList = ({
  tasks,
  onOpen,
  setAction,
  setColumn,
  onEdit,
}) => {
  return (
    <Droppable droppableId={nanoid()}>
      {provided => (
        <ColumnTasksListStyled
          ref={provided.innerRef}
          {...provided.droppableProps}
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
      )}
    </Droppable>
  );
};
