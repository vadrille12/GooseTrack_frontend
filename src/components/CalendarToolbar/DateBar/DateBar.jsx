import {
  DateBarStyled,
  CurrentDate,
  DateContainer,
  ArrowLeftStyled,
  ArrowRightStyled,
  ArrowLeftBtn,
  ArrowRightBtn,
} from './DateBar.styled';

export const DateBar = () => {
  return (
    <DateBarStyled>
      <DateContainer>
        <CurrentDate>Date</CurrentDate>
        <div>
          <ArrowLeftBtn>
            <ArrowLeftStyled />
          </ArrowLeftBtn>
          <ArrowRightBtn>
            <ArrowRightStyled />
          </ArrowRightBtn>
        </div>
      </DateContainer>
    </DateBarStyled>
  );
};
