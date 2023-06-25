import { CalendarToolBar } from 'components/CalendarToolBar/CalendarToolBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import moment from 'moment';
import { useEffect } from 'react';

export default function CalendarPage() {
  const navigate = useNavigate();

  const { currentDay, currentDate } = useParams();
  const { pathname } = useLocation();
  const typeSelect = pathname.includes('/calendar/day') ? 'day' : 'month';

  const workDate = currentDate || currentDay;

  useEffect(() => {
    if (pathname === '/calendar' || pathname === '/calendar/') {
      navigate(`/calendar/month/${moment().format('YYYY-MM-DD')}`);
    }
  }, [pathname, navigate]);

  const prevDayHandler = () => {
    navigate(
      `/calendar/${typeSelect}/${moment(workDate)
        .subtract(1, typeSelect)
        .format('YYYY-MM-DD')}`
    );
  };

  const nextDayHandler = () => {
    navigate(
      `/calendar/${typeSelect}/${moment(workDate)
        .add(1, typeSelect)
        .format('YYYY-MM-DD')}`
    );
  };

  return (
    <div>
      <CalendarToolBar
        today={moment(workDate)}
        typeSelect={typeSelect}
        prevDayHandler={prevDayHandler}
        nextDayHandler={nextDayHandler}
      />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}
