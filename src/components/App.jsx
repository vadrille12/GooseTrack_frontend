import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

// import { PublicRoute } from 'components/PublicRoute';
// import { PrivateRoute } from 'components/PrivateRoute';
// import { MainLayout } from 'components/MainLayout/MainLayout';

// const MainPage = lazy(() => import('../../pages/MainPage'));
// const AccountPage = lazy(() => import('../../pages/AccountPage'));
// const CalendarPage = lazy(() => import('../../pages/CalendarPage'));
// const StatisticsPage = lazy(() => import('../../pages/StatisticsPage'));
// const LoginPage = lazy(() => import('../../pages/LoginPage'));
// const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
// const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

export function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refresh());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />

        <Route element={<PublicRoute />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="account" element={<AccountPage />} />
          <Route path="calendar" element={<CalendarPage />}>
            <Route path="month" element={} />
            <Route path="month/:month" element={} />
            <Route path="day" element={} />
            <Route path="day/:date" element={} />
          </Route>
          <Route path="statistics" element={<StatisticsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
