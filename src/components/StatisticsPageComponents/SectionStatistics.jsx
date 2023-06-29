import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { StatisticsChart } from './StatisticsChart';
import { StatisticsDateBar } from './StatisticsDateBar/StatisticsDateBar';
import { Calendar } from 'components/UserForm/Calendar/Calendar';
import { selectStatistics } from 'redux/statistics/selectors';
import { fetchStatistics } from 'redux/statistics/operations';
import Spinner from 'components/Spinner/spinner';

export const SectionStatistics = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const data = useSelector(selectStatistics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatistics(currentDate.format('YYYY-MM-DD')));
  }, [currentDate, dispatch]);

  const prevDayHandler = () => {
    const previousDay = currentDate.subtract(1, 'day');
    setCurrentDate(previousDay.clone());
    console.log(currentDate);
  };

  const nextDayHandler = () => {
    const nextDay = currentDate.add(1, 'day');
    setCurrentDate(nextDay.clone());
    console.log(currentDate);
  };

  return (
    <>
      <StatisticsDateBar
        currentDate={currentDate.format('D MMM YYYY ')}
        prevDayHandler={prevDayHandler}
        nextDayHandler={nextDayHandler}
      />
      <Calendar />
      {!data.statistics.month ? <Spinner /> : <StatisticsChart data={data} />}
    </>
  );
};
