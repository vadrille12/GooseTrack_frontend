import { EditBtnBar } from '../EditBtnBar/EditBtnBar';
import {
  Avatar,
  AvatarGroupContainer,
  StatusLow,
  TaskCardStyled,
  TaskContainer,
  TaskText,
  StatusMedium,
  StatusHigh,
} from './ТaskCard.styled';

export const TaskCard = ({ task, onOpen, setAction }) => {
  const { title, priority } = task;

  return (
    <TaskCardStyled>
      <TaskText>{title}</TaskText>
      <TaskContainer>
        <AvatarGroupContainer>
          <Avatar>ava</Avatar>
          {priority === 'low' && <StatusLow>Low</StatusLow>}
          {priority === 'medium' && <StatusMedium>Medium</StatusMedium>}
          {priority === 'high' && <StatusHigh>High</StatusHigh>}
        </AvatarGroupContainer>
        <EditBtnBar onOpen={onOpen} setAction={setAction} />
      </TaskContainer>
    </TaskCardStyled>
  );
};
