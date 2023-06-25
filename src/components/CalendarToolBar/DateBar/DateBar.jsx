import {
  DateBarStyled,
  CurrentDate,
  DateContainer,
  ArrowLeftStyled,
  ArrowRightStyled,
  ArrowLeftBtn,
  ArrowRightBtn,
} from './DateBar.styled';

export const DateBar = ({
  today,
  typeSelect,
  prevDayHandler,
  nextDayHandler,
}) => {
  return (
    <DateBarStyled>
      <DateContainer>
        <CurrentDate>
          {typeSelect === 'month'
            ? today.format('MMMM YYYY')
            : today.format('D MMM YYYY ')}
        </CurrentDate>
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
