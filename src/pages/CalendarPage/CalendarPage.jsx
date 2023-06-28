import { CalendarToolBar } from 'components/CalendarToolBar/CalendarToolBar';
import { CalendarPageContainer } from './CalendarPage.styled';
import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/tasks/operations';
// import { useLocation, useNavigate, useParams } from 'react-router';
// import moment from 'moment';

export default function CalendarPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  // const navigate = useNavigate();

  // const { currentDay, currentDate } = useParams();
  // const { pathname } = useLocation();
  // const typeSelect = pathname.includes('/calendar/day') ? 'day' : 'month';

  // const workDate = currentDate || currentDay;

  // useEffect(() => {
  //   if (pathname === '/calendar' || pathname === '/calendar/') {
  //     navigate(`/calendar/month/${moment().format('YYYY-MM-DD')}`);
  //   }
  // }, [pathname, navigate]);

  // const prevDayHandler = () => {
  //   navigate(
  //     `/calendar/${typeSelect}/${moment(workDate)
  //       .subtract(1, typeSelect)
  //       .format('YYYY-MM-DD')}`
  //   );
  // };

  // const nextDayHandler = () => {
  //   navigate(
  //     `/calendar/${typeSelect}/${moment(workDate)
  //       .add(1, typeSelect)
  //       .format('YYYY-MM-DD')}`
  //   );
  // };

  return (
    <CalendarPageContainer>
      <CalendarToolBar
      // today={moment(workDate)}
      // typeSelect={typeSelect}
      // prevDayHandler={prevDayHandler}
      // nextDayHandler={nextDayHandler}
      />
      <Suspense>
        <Outlet />
      </Suspense>
    </CalendarPageContainer>
  );
}
