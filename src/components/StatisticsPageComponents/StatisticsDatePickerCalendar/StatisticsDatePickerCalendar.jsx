import {
  StatisticsDatePickerCalendar,
  StatisticsDatePickerInput,
} from './StatisticsDatePickerCalendar.styled';

export const Calendar = ({ onChange, selected, onSelect }) => {
  return (
    <StatisticsDatePickerCalendar>
      <StatisticsDatePickerInput
        selected={selected}
        onChange={onChange}
        onSelect={onSelect}
        open={true}
      />
    </StatisticsDatePickerCalendar>
  );
};
