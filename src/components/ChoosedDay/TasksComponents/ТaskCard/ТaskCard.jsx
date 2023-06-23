import { EditBtnBar } from '../EditBtnBar/EditBtnBar';
import {
  Avatar,
  AvatarGroupContainer,
  Status,
  TaskCardStyled,
  TaskContainer,
  TaskText,
} from './ТaskCard.styled';

export const TaskCard = () => {
  return (
    <TaskCardStyled>
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
    </TaskCardStyled>
  );
};
