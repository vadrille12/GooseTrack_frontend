import {
  ColumnTasksListStyled,
  TaskText,
  TaskContainer,
  Avatar,
  Status,
  AvatarGroupContainer,
  EditBntContainer,
  MoveBtn,
  EditBtn,
  DeleteBtn,
} from './ColumnTasksList.styled';

export const ColumnTasksList = () => {
  return (
    <ColumnTasksListStyled>
      <TaskText>
        textwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
      </TaskText>
      <TaskContainer>
        <AvatarGroupContainer>
          <Avatar>ava</Avatar>
          <Status>Low</Status>
        </AvatarGroupContainer>
        <EditBntContainer>
          <MoveBtn>mu</MoveBtn>
          <EditBtn>ed</EditBtn>
          <DeleteBtn>del</DeleteBtn>
        </EditBntContainer>
      </TaskContainer>
    </ColumnTasksListStyled>
  );
};
