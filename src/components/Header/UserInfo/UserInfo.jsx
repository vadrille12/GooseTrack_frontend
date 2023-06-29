import {
  Wrapper,
  UserName,
  UserPicture,
  UserNameIcon,
  BackgroundName,
} from './User.styled';
import { useAuth } from '../../../hooks/useAuth';

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

  const { name, avatarURL } = useAuth();

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

