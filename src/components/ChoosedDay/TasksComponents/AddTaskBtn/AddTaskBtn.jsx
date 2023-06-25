import { AddTaskBtnStyled } from './AddTaskBtn.styled';

export const AddTaskBtn = ({ onOpen, setAction }) => {
  return (
    <AddTaskBtnStyled
      onClick={() => {
        onOpen();
        setAction();
      }}
    >
      <span>+</span>Add task
    </AddTaskBtnStyled>
  );
};
