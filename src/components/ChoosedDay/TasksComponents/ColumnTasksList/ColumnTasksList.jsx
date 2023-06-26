import { TaskCard } from '../ТaskCard/ТaskCard';
import { ColumnTasksListStyled } from './ColumnTasksList.styled';

export const ColumnTasksList = ({ tasks, onOpen, setAction }) => {
  return (
    <ColumnTasksListStyled>
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
          onOpen={onOpen}
          setAction={setAction}
        />
      ))}
    </ColumnTasksListStyled>
  );
};
