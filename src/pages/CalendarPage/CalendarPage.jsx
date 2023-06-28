import { CalendarToolBar } from 'components/CalendarToolBar/CalendarToolBar';
import { CalendarPageContainer } from './CalendarPage.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/tasks/operations';
// import { useLocation, useNavigate, useParams } from 'react-router';
// import moment from 'moment';
// import { useEffect } from 'react';

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
