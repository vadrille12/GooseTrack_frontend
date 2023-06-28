import { CalendarToolBar } from 'components/CalendarToolBar/CalendarToolBar';
import { CalendarPageContainer } from './CalendarPage.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export default function CalendarPage() {
  return (
    <CalendarPageContainer>
      <CalendarToolBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </CalendarPageContainer>
  );
}
