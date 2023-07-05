import { lazy, Suspense, useEffect } from 'react';
import { refresh } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';

import { PublicRoute } from 'components/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute';

import { GlobalStyle } from 'Styles/GlobalStyle';
import { MainLayout } from 'components/MainLayout/MainLayout';
import { Container } from 'Styles/Container';
import Spinner from './Spinner/spinner';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const AccountPage = lazy(() => import('pages/AccountPage/AccountPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage/CalendarPage'));
const StatisticsPage = lazy(() =>
  import('pages/StatisticsPage/StatisticsPage.jsx')
);
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage.jsx'));
const ChoosedDay = lazy(() => import('./ChoosedDay/ChoosedDay'));
const ChoosedMonth = lazy(() => import('./ChoosedMonth/ChoosedMonth'));

export function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch, token]);

  return (
    <Container>
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<MainPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<MainLayout />}>
              <Route path="account" element={<AccountPage />} />
              <Route path="calendar" element={<CalendarPage />}>
                <Route path="month/:currentDate" element={<ChoosedMonth />} />
                <Route path="day/:currentDay" element={<ChoosedDay />} />
              </Route>
              <Route path="statistics" element={<StatisticsPage />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <GlobalStyle />
    </Container>
  );
}
