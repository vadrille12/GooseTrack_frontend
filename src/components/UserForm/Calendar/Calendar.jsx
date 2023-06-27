// import { IconDone, IconError } from '../UserForm.styled';
import { DatePickerCalendar, DatePickerInput } from './Calendar.styled';

export const Calendar = ({
  name,
  onChange,
className,
  type,
  value,
  selected,
  placeholder,
}) => {
 
  return (
    <DatePickerCalendar>
      <DatePickerInput
        className={className}
        id={name}
        name={name}
        // type={type}

        selected={selected}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        input={true}
        maxDate={new Date()}
        dateFormat="yyyy-MM-dd"
        showYearDropdown
        yearDropdownItemNumber={100}
        scrollableYearDropdown
      />
     
    </DatePickerCalendar>
  );
};
