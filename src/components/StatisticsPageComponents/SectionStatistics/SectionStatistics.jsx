import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatisticsChart } from '../StatisticsChart';
import { StatisticsDateBar } from '../StatisticsDateBar/StatisticsDateBar';
import { selectStatistics } from 'redux/statistics/selectors';
import { fetchStatistics } from 'redux/statistics/operations';
import { Calendar } from '../StatisticsDatePickerCalendar/StatisticsDatePickerCalendar';
import Spinner from 'components/Spinner/spinner';
import moment from 'moment';

export const SectionStatistics = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const data = useSelector(selectStatistics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatistics(currentDate.format('YYYY-MM-DD')));
  }, [currentDate, dispatch]);

  const prevDayHandler = () => {
    const previousDay = currentDate.subtract(1, 'day');
    setCurrentDate(previousDay.clone());
    setIsCalendarOpen(false);
  };

  const nextDayHandler = () => {
    const nextDay = currentDate.add(1, 'day');
    setCurrentDate(nextDay.clone());
    setIsCalendarOpen(false);
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleDateChange = date => {
    console.log(`date in handleDateChange: ${date}`);
    setCurrentDate(moment(date));
    setIsCalendarOpen(false);
  };

  return (
    <>
      <StatisticsDateBar
        currentDate={currentDate.format('D MMM YYYY ')}
        prevDayHandler={prevDayHandler}
        nextDayHandler={nextDayHandler}
        toggleCalendar={toggleCalendar}
      />
      {isCalendarOpen && (
        <Calendar selected={currentDate.toDate()} onChange={handleDateChange} />
      )}
      {!data.statistics.month ? <Spinner /> : <StatisticsChart data={data} />}
    </>
  );
};
