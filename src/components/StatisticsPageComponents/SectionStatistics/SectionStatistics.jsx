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
  };

  const nextDayHandler = () => {
    const nextDay = currentDate.add(1, 'day');
    setCurrentDate(nextDay.clone());
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleDateChange = date => {
    console.log(`date in handleDateChange: ${date}`);
    setCurrentDate(moment(date));
    setIsCalendarOpen(false);
  };
  // const handleDateSelect = date => {
  //   // console.log(`date in handleDateSelect: ${date}`);
  //   setCurrentDate(moment(date));
  //   setIsCalendarOpen(false);
  // };

  console.log(currentDate.format('D MMM YYYY '));

  return (
    <>
      <StatisticsDateBar
        currentDate={currentDate.format('D MMM YYYY ')}
        prevDayHandler={prevDayHandler}
        nextDayHandler={nextDayHandler}
        toggleCalendar={toggleCalendar}
      />
      {isCalendarOpen && (
        <Calendar
          selected={currentDate.toDate()}
          onChange={handleDateChange}
          // onSelect={handleDateSelect}
        />
      )}
      {!data.statistics.month ? <Spinner /> : <StatisticsChart data={data} />}
    </>
  );
};
