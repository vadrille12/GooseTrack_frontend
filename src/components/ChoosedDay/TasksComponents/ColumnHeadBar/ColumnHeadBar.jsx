import {
  ColumnHeadBarStyled,
  TaskTitle,
  TaskHeaderBtn,
} from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ taskName }) => {
  return (
    <ColumnHeadBarStyled>
      <TaskTitle>{taskName}</TaskTitle>
      <TaskHeaderBtn></TaskHeaderBtn>
    </ColumnHeadBarStyled>
  );
};
