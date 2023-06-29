import { useSelector } from 'react-redux';
import {
  selectToken,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name, email, phone, birthday, skype, avatarURL } =
    useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const accessToken = useSelector(selectToken);

  return {
    isRefreshing,
    isLoggedIn,
    name,
    email,
    phone,
    birthday,
    skype,
    avatarURL,
    accessToken,
  };
};
