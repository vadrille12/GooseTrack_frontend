import {
  ColumnHeadBarStyled,
  TaskTitle,
  TaskHeaderBtn,
} from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ taskName, onOpen, setAction }) => {
  return (
    <ColumnHeadBarStyled>
      <TaskTitle>{taskName}</TaskTitle>
      <TaskHeaderBtn
        onClick={() => {
          onOpen();
          setAction();
        }}
      ></TaskHeaderBtn>
    </ColumnHeadBarStyled>
  );
};
