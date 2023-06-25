import { TaskCard } from '../ТaskCard/ТaskCard';
import { ColumnTasksListStyled } from './ColumnTasksList.styled';

export const ColumnTasksList = ({ onOpen, setAction }) => {
  return (
    <ColumnTasksListStyled>
      <TaskCard onOpen={onOpen} setAction={setAction} />
    </ColumnTasksListStyled>
  );
};
