import {
  lazy,
  Suspense,
  // useEffect
} from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

// import { Container } from 'Styles/Container';
import { GlobalStyle } from 'Styles/GlobalStyle';

// import { PublicRoute } from 'components/PublicRoute';
// import { PrivateRoute } from 'components/PrivateRoute';
import { MainLayout } from 'components/MainLayout/MainLayout';
import { Container } from 'Styles/Container';
import CalendarPage from 'pages/CalendarPage/CalendarPage';
import { ChoosedMonth } from './ChoosedMonth/ChoosedMonth';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const AccountPage = lazy(() => import('pages/AccountPage/AccountPage'));
// const CalendarPage = lazy(() => import('pages/CalendarPage/CalendarPage'));
const StatisticsPage = lazy(() =>
  import('pages/StatisticsPage/StatisticsPage.jsx')
);

const ChoosedDay = lazy(() => import('./ChoosedDay/ChoosedDay'));
const ChoosedMonth = lazy(() => import('./ChoosedMonth/ChoosedMonth'));

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
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          {/* <Route element={<PublicRoute />}> */}
          <Route path="/" element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          {/* </Route> */}

          {/* <Route element={<PrivateRoute />}> */}
          <Route path="/" element={<MainLayout />}>
            <Route path="account" element={<AccountPage />} />
            <Route path="calendar" element={<CalendarPage />}>
              <Route path="month/:currentDate" element={<ChoosedMonth />} />
              <Route path="day/:currentDay" element={<ChoosedDay />} />
            </Route>
            <Route path="statistics" element={<StatisticsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          {/* </Route> */}
        </Routes>
      </Suspense>
      <GlobalStyle />
    </Container>
  );
}
