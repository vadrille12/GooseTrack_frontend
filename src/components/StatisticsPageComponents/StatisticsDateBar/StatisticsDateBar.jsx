import {
  DateBarStyled,
  CurrentDate,
  DateContainer,
  ArrowLeftStyled,
  ArrowRightStyled,
  ArrowLeftBtn,
  ArrowRightBtn,
} from './StatisticsDateBar.styled';

export const StatisticsDateBar = ({
  currentDate,
  prevDayHandler,
  nextDayHandler,
}) => {
  return (
    <DateBarStyled>
      <DateContainer>
        <CurrentDate>{currentDate}</CurrentDate>
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
  );
};
