import { ColumnHeadBarStyled, TaskTitle } from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ taskName }) => {
  return (
    <ColumnHeadBarStyled>
      <TaskTitle>{taskName}</TaskTitle>
      <button>+</button>
    </ColumnHeadBarStyled>
  );
};
