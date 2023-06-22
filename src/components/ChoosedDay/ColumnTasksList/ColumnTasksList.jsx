import { EditBtnBar } from '../EditBtnBar/EditBtnBar';
import {
  ColumnTasksListStyled,
  TaskText,
  TaskContainer,
  Avatar,
  Status,
  AvatarGroupContainer,
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
        <EditBtnBar />
      </TaskContainer>
    </ColumnTasksListStyled>
  );
};
