import {
  StatisticsDatePickerCalendar,
  StatisticsDatePickerInput,
} from './StatisticsDatePickerCalendar.styled';

import { registerLocale } from 'react-datepicker';

import enUS from 'date-fns/locale/en-US';

registerLocale('en-US', enUS);

export const Calendar = ({ onChange, selected }) => {
  const highlightedDates = [selected];

  const formatWeekDay = weekdayShort => {
    return weekdayShort.charAt(0);
  };

  return (
    <StatisticsDatePickerCalendar>
      <StatisticsDatePickerInput
        selected={selected}
        onChange={onChange}
        open={true}
        highlightDates={highlightedDates}
        formatWeekDay={formatWeekDay}
        locale="en-US"
        calendarStartDay={1}
      />
    </StatisticsDatePickerCalendar>
  );
};
