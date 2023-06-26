import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';

export const PublicRoute = () => {
  const location = useLocation();
  const IsLoggedIn = useSelector(selectToken);

  return !IsLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={location?.state?.from ?? '/calendar'} replace />
  );
};
