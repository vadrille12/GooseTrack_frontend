import { CalendarToolBar } from 'components/CalendarToolBar/CalendarToolBar';
import { CalendarPageContainer } from './CalendarPage.styled';
import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/tasks/operations';

export default function CalendarPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <CalendarPageContainer>
      <CalendarToolBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </CalendarPageContainer>
  );
}
