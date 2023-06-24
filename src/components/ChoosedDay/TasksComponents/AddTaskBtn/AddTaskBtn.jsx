import { AddTaskBtnStyled } from './AddTaskBtn.styled';

export const AddTaskBtn = ({ onOpen }) => {
  return (
    <AddTaskBtnStyled onClick={onOpen}>
      <span>+</span>Add task
    </AddTaskBtnStyled>
  );
};
