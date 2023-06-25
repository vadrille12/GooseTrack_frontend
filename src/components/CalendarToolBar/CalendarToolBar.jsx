import { Suspense } from 'react';
import {
  CalendarToolBarStyled,
  CalendarToolBarContainer,
} from './CalendarToolBar.styled';
import { ChangeTypeDate } from './ChangeTypeDate/ChangeTypeDate';
import { DateBar } from './DateBar/DateBar';
import { Outlet } from 'react-router-dom';

export const CalendarToolBar = () => {
  return (
    <CalendarToolBarContainer>
      <CalendarToolBarStyled>
        <DateBar />
        <ChangeTypeDate />
      </CalendarToolBarStyled>
      <Suspense>
        <Outlet />
      </Suspense>
    </CalendarToolBarContainer>
  );
};
