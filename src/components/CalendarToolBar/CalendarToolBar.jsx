import { Suspense } from 'react';
import { CalendarToolBarStyled } from './CalendarToolBar.styled';
import { ChangeTypeDate } from './ChangeTypeDate/ChangeTypeDate';
import { DateBar } from './DateBar/DateBar';
import { Outlet } from 'react-router-dom';

export const CalendarToolBar = () => {
  return (
    <div>
      <CalendarToolBarStyled>
        <DateBar />
        <ChangeTypeDate />
      </CalendarToolBarStyled>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
