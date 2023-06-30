import {
  DateBarStyled,
  CurrentDate,
  DateContainer,
  ArrowLeftStyled,
  ArrowRightStyled,
  ArrowLeftBtn,
  ArrowRightBtn,
} from 'components/CalendarToolBar/DateBar/DateBar.styled';

export const StatisticsDateBar = ({
  currentDate,
  prevDayHandler,
  nextDayHandler,
  toggleCalendar,
}) => {
  return (
    <div>
      <DateBarStyled>
        <DateContainer>
          <div onClick={toggleCalendar}>
            <CurrentDate>{currentDate}</CurrentDate>
          </div>

          <div>
            <ArrowLeftBtn onClick={prevDayHandler}>
              <ArrowLeftStyled />
            </ArrowLeftBtn>
            <ArrowRightBtn onClick={nextDayHandler}>
              <ArrowRightStyled />
            </ArrowRightBtn>
          </div>
        </DateContainer>
      </DateBarStyled>
    </div>
  );
};
