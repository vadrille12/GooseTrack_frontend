import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';

export const PrivateRoute = () => {
  const IsLoggedIn = useSelector(selectToken);

  return IsLoggedIn ? (
    <div style={{ display: 'flex' }}>
      <Outlet />
    </div>
  ) : (
    <Navigate to="/" replace />
  );
};
