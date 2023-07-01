import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

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

import {
  BackgroundName,
  UserNameIcon,
} from 'components/Header/UserInfo/UserInfo.styled';
import { selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

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

  const { name, avatarURL } = useSelector(selectUser);

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
