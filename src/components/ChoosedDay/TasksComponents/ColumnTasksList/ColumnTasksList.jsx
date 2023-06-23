import { TaskCard } from '../ТaskCard/ТaskCard';
import { ColumnTasksListStyled } from './ColumnTasksList.styled';

export const ColumnTasksList = () => {
  return (
    <ColumnTasksListStyled>
      <TaskCard />
    </ColumnTasksListStyled>
  );
};
