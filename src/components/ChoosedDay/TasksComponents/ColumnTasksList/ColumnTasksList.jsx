import { TaskCard } from '../ТaskCard/ТaskCard';
import { ColumnTasksListStyled } from './ColumnTasksList.styled';

export const ColumnTasksList = ({
  tasks,
  onOpen,
  setAction,
  setColumn,
  onEdit,
}) => {
  return (
    <ColumnTasksListStyled>
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
          onOpen={onOpen}
          setAction={setAction}
          setColumn={setColumn}
          onEdit={onEdit}
        />
      ))}
    </ColumnTasksListStyled>
  );
};
