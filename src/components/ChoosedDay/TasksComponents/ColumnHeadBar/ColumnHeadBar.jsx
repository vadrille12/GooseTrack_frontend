import {
  ColumnHeadBarStyled,
  TaskTitle,
  TaskHeaderBtn,
} from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ taskName, onOpen, setAction, setColumn }) => {
  return (
    <ColumnHeadBarStyled>
      <TaskTitle>{taskName}</TaskTitle>
      <TaskHeaderBtn
        onClick={() => {
          onOpen();
          setAction();
          setColumn();
        }}
      ></TaskHeaderBtn>
    </ColumnHeadBarStyled>
  );
};
