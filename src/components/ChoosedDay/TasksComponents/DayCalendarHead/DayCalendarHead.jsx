import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import {
  format,
  formatISO,
  startOfWeek,
  parseISO,
  lastDayOfWeek,
  eachDayOfInterval,
  isWeekend,
} from 'date-fns';
import {
  DayCalendarHeadStyledMobile,
  DayCalendarHeadStyledDesktop,
  DayNameMobile,
  DateMobile,
  DayName,
  DateDesktop,
  DayBtn,
} from './DayCalendarHead.styled';

export const DayCalendarHead = () => {
  const { currentDay: chosenDate } = useParams();
  const [time, setTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const calendarDate = parseISO(chosenDate);
    setTime(calendarDate);
  }, [chosenDate]);

  const startDate = startOfWeek(time, { weekStartsOn: 1 });
  const endDate = lastDayOfWeek(time, { weekStartsOn: 1 });

  const getTotalDate = () => {
    return eachDayOfInterval({
      start: startDate,
      end: endDate,
    });
  };

  const totalDate = getTotalDate();

  const isActive = date => {
    const currentDate = format(time, 'yyyy-MM-dd');
    return currentDate === format(date, 'yyyy-MM-dd');
  };

  const isWeekendDay = date => {
    return isWeekend(date);
  };

  const handleDayClick = date => {
    const formattedDate = formatISO(date, { representation: 'date' });
    navigate(`/calendar/day/${formattedDate}`);
  };

  return (
    <>
      <DayCalendarHeadStyledMobile>
        {totalDate.map((date, index) => (
          <li key={index}>
            <DayBtn onClick={() => handleDayClick(date)}>
              <DayNameMobile className={isWeekendDay(date) ? 'weekend' : ''}>
                {format(date, 'E')[0]}
              </DayNameMobile>
              <DateMobile
                className={`${isActive(date) ? 'active' : ''}
                }`}
              >
                {format(date, 'd')}
              </DateMobile>
            </DayBtn>
          </li>
        ))}
      </DayCalendarHeadStyledMobile>
      <DayCalendarHeadStyledDesktop>
        {totalDate.map((date, index) => (
          <li key={index}>
            <DayBtn onClick={() => handleDayClick(date)}>
              <DayName className={isWeekendDay(date) ? 'weekend' : ''}>
                {format(date, 'EEE')}
              </DayName>
              <DateDesktop className={isActive(date) ? 'active' : ''}>
                {format(date, 'd')}
              </DateDesktop>
            </DayBtn>
          </li>
        ))}
      </DayCalendarHeadStyledDesktop>
    </>
  );
};
