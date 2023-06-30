import { useSelector } from 'react-redux';

import { selectTasks } from '../../redux/tasks/selectors';
import { MonthCalendarHead } from './MonthCalendarHead/MonthCalendarHead';
import { CalendarTable } from './CalendarTable/CalendarTable';

const ChoosedMonth = () => {
  const tasks = useSelector(selectTasks);

  return (
    <>
      <MonthCalendarHead />
      <CalendarTable tasks={tasks} />
    </>
  );
};

export default ChoosedMonth;
