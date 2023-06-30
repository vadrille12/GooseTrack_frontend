import { CalendarToolBar } from 'components/CalendarToolBar/CalendarToolBar';
import { CalendarPageContainer } from './CalendarPage.styled';
import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/tasks/operations';
import { selectIsLoading, selectError } from '../../redux/tasks/selectors';
import Spinner from 'components/Spinner/spinner';

export default function CalendarPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <CalendarPageContainer>
      <CalendarToolBar />
      {(isLoading && !error && <Spinner />) || (
        <Suspense>
          <Outlet />
        </Suspense>
      )}
    </CalendarPageContainer>
  );
}
