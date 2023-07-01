import { useSelector } from 'react-redux';

import { selectUser } from 'redux/auth/selectors';

import {
  Wrapper,
  UserName,
  UserPicture,
  UserNameIcon,
  BackgroundName,
} from './UserInfo.styled';

export const UserInfo = () => {
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
    <img src={avatarURL} alt="UserPicture" />
  ) : (
    <BackgroundName className="initials">
      <UserNameIcon>{getInitials(name)}</UserNameIcon>
    </BackgroundName>
  );
  return (
    <Wrapper>
      <UserName>{name}</UserName>
      <UserPicture>{displayName}</UserPicture>
    </Wrapper>
  );
};
