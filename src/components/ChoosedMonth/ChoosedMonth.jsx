import { useSelector } from 'react-redux';

import {
  selectTasks,
  selectIsLoading,
  selectError,
} from '../../redux/tasks/selectors';
import { MonthCalendarHead } from './MonthCalendarHead/MonthCalendarHead';
import { CalendarTable } from './CalendarTable/CalendarTable';
import Spinner from 'components/Spinner/spinner';

const ChoosedMonth = () => {
  const tasks = useSelector(selectTasks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {(isLoading && !error && <Spinner />) || (
        <>
          <MonthCalendarHead />
          <CalendarTable tasks={tasks} />
        </>
      )}
    </>
  );
};

export default ChoosedMonth;
