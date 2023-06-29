

import { DatePickerCalendar, DatePickerInput } from './Calendar.styled';

export const Calendar = ({
  name,
  onChange,
  className,
  value,
  selected,
}) => {
  
  
  return (
    <DatePickerCalendar>
      <DatePickerInput
        className={className}
        id={name}
        name={name}
        selected={selected}
        value={value}
        onChange={onChange}
        input={true}
        maxDate={new Date()}
        dateFormat="yyyy-MM-dd"
        // shouldCloseOnSelect={true}
        // closeOnScroll={true}
        // showYearDropdown
        // yearDropdownItemNumber={100}
        // scrollableYearDropdown
      />
    </DatePickerCalendar>
  );
};
