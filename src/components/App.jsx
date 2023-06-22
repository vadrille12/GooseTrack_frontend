import {
  lazy,
  // useEffect
} from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Container } from 'Styles/Container';
import { GlobalStyle } from 'Styles/GlobalStyle';

// import { PublicRoute } from 'components/PublicRoute';
// import { PrivateRoute } from 'components/PrivateRoute';
import { MainLayout } from 'components/MainLayout/MainLayout';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const AccountPage = lazy(() => import('pages/AccountPage/AccountPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage/CalendarPage'));
const StatisticsPage = lazy(() => import('pages/StatisticsPage/StatisticsPage.jsx'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage.jsx'));

export function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refresh());
  // }, [dispatch]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />

          {/* <Route element={<PublicRoute />}> */}
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          {/* </Route> */}

          {/* <Route element={<PrivateRoute />}> */}
          <Route path="account" element={<AccountPage />} />
          <Route path="calendar" element={<CalendarPage />}>
            {/* <Route path="month" element={null} />
            <Route path="month/:month" element={null} />
            <Route path="day" element={null} />
            <Route path="day/:date" element={null} /> */}
          </Route>
          <Route path="statistics" element={<StatisticsPage />} />
          {/* </Route> */}

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </Container>
  );
}
