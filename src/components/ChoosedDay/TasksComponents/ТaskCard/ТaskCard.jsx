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
import { useAuth } from '../../../../hooks/useAuth';
import {
  BackgroundName,
  UserNameIcon,
} from 'components/Header/UserInfo/User.styled';
import { Draggable } from 'react-beautiful-dnd';

export const TaskCard = ({
  task,
  onOpen,
  setAction,
  setColumn,
  onEdit,
  index,
}) => {
  const { title, priority, category } = task;

  function getInitials(name) {
    if (name) {
      const initials = name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase();
      return initials;
    } else {
      return name;
    }
  }

  const { name, avatarURL } = useAuth();

  const displayName = avatarURL ? (
    <img src={avatarURL} alt="UserPicture" style={{ borderRadius: '50%' }} />
  ) : (
    <BackgroundName style={{ borderRadius: '50%' }}>
      <UserNameIcon>{getInitials(name)}</UserNameIcon>
    </BackgroundName>
  );

  return (
    <Draggable draggableId={task._id} index={index}>
      {provided => (
        <TaskCardStyled
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <TaskText>{title}</TaskText>
          <TaskContainer>
            <AvatarGroupContainer>
              <Avatar>{displayName}</Avatar>
              {priority === 'low' && <StatusLow>Low</StatusLow>}
              {priority === 'medium' && <StatusMedium>Medium</StatusMedium>}
              {priority === 'high' && <StatusHigh>High</StatusHigh>}
            </AvatarGroupContainer>
            <EditBtnBar
              onOpen={onOpen}
              setAction={setAction}
              setColumn={setColumn}
              category={category}
              task={task}
              onEdit={onEdit}
            />
          </TaskContainer>
        </TaskCardStyled>
      )}
    </Draggable>
  );
};
