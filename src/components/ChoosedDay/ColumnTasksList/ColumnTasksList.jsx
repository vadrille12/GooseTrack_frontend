import {
  ColumnTasksListStyled,
  TaskText,
  TaskContainer,
  Avatar,
  Status,
  AvatarGroupContainer,
  EditBntContainer,
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
          <button>mu</button>
          <button>ed</button>
          <button>del</button>
        </EditBntContainer>
      </TaskContainer>
    </ColumnTasksListStyled>
  );
};
