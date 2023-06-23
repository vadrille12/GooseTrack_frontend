import {
  WorkDay,
  WeekendDay,
  MobileDaysList,
  DesktopDayList,
} from './MonthCalendarHead.styled';

const workDayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
const weekendDayNames = ['SAT', 'SUN'];

export const MonthCalendarHead = () => {
  return (
    <>
      <DesktopDayList>
        {workDayNames.map(day => (
          <WorkDay key={day}>{day}</WorkDay>
        ))}
        {weekendDayNames.map(day => (
          <WeekendDay key={day}>{day}</WeekendDay>
        ))}
      </DesktopDayList>
      <MobileDaysList>
        {workDayNames.map(day => (
          <WorkDay key={day}>{day[0]}</WorkDay>
        ))}
        {weekendDayNames.map(day => (
          <WeekendDay key={day}>{day[0]}</WeekendDay>
        ))}
      </MobileDaysList>
    </>
  );
};
