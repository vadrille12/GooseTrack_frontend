import { DatePickerCalendar , DatePickerInput} from "./Calendar.styled"

export const Calendar = ({ name, date, type, value, selected, placeholder }) => {
  return (
    <DatePickerCalendar>
      <DatePickerInput
        id={name}
        name={name}
        type={type}
        selected={selected}
        placeholder={placeholder}
        formatShortWeekday={(locale, date) =>
          date.toLocaleDateString('en-GB', { weekday: 'short' }).slice(0, 1)
        }
        maxDate={new Date()}
        dateFormat="yyyy-MM-dd"
        showYearDropdown
        yearDropdownItemNumber={100}
        scrollableYearDropdown
        input={true}
      />
    </DatePickerCalendar>
  );
};