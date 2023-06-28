import { AddTaskBtnStyled, AddTaskBtnContainer } from './AddTaskBtn.styled';

export const AddTaskBtn = ({ onOpen, setAction, setColumn }) => {
  return (
    <AddTaskBtnContainer>
      <AddTaskBtnStyled
        onClick={() => {
          onOpen();
          setAction();
          setColumn();
        }}
      >
        <span>+</span>Add task
      </AddTaskBtnStyled>
    </AddTaskBtnContainer>
  );
};
