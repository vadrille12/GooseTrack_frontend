import { DateBarStyled, CurrentDate, DateContainer } from './DateBar.styled';

export const DateBar = () => {
  return (
    <DateBarStyled>
      <DateContainer>
        <CurrentDate>Date</CurrentDate>
        <div>
          <button></button>
          <button></button>
        </div>
      </DateContainer>
    </DateBarStyled>
  );
};
