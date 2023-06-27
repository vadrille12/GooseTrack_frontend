import {
  DateBarStyled,
  CurrentDate,
  DateContainer,
  ArrowLeftStyled,
  ArrowRightStyled,
  ArrowLeftBtn,
  ArrowRightBtn,
} from './DateBar.styled';

import { useLocation, useNavigate, useParams } from 'react-router';
import moment from 'moment';
import { useEffect } from 'react';

export const DateBar = () => {
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
    <DateBarStyled>
      <DateContainer>
        <CurrentDate>
          {typeSelect === 'month'
            ? moment(workDate).format('MMMM YYYY')
            : moment(workDate).format('D MMM YYYY ')}
        </CurrentDate>
        <div>
          <ArrowLeftBtn onClick={prevDayHandler}>
            <ArrowLeftStyled />
          </ArrowLeftBtn>
          <ArrowRightBtn onClick={nextDayHandler}>
            <ArrowRightStyled />
          </ArrowRightBtn>
        </div>
      </DateContainer>
    </DateBarStyled>
  );
};
