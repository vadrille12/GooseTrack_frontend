import { AddTaskBtnStyled, AddTaskBtnContainer } from './AddTaskBtn.styled';

export const AddTaskBtn = ({ onOpen, setAction }) => {
  return (
    <AddTaskBtnContainer>
      <AddTaskBtnStyled
        onClick={() => {
          onOpen();
          setAction();
        }}
      >
        <span>+</span>Add task
      </AddTaskBtnStyled>
    </AddTaskBtnContainer>
  );
};
