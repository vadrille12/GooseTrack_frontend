import {
  StatisticsDatePickerCalendar,
  StatisticsDatePickerInput,
} from './StatisticsDatePickerCalendar.styled';

export const Calendar = ({ onChange, selected }) => {
  const highlightedDates = [selected];
  return (
    <StatisticsDatePickerCalendar>
      <StatisticsDatePickerInput
        selected={new Date()}
        onChange={onChange}
        open={true}
        highlightDates={highlightedDates}
      />
    </StatisticsDatePickerCalendar>
  );
};
