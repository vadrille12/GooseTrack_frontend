import { DateBarStyled, CurrentDate } from './DateBar.styled';

export const DateBar = () => {
  return (
    <DateBarStyled>
      <CurrentDate>Date</CurrentDate>
      <div>
        <button></button>
        <button></button>
      </div>
    </DateBarStyled>
  );
};
