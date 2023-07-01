import { CalendarToolBar } from 'components/CalendarToolBar/CalendarToolBar';
import { CalendarPageContainer } from './CalendarPage.styled';
import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/tasks/operations';
import Spinner from 'components/Spinner/spinner';

export default function CalendarPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <CalendarPageContainer>
      <CalendarToolBar />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </CalendarPageContainer>
  );
}
