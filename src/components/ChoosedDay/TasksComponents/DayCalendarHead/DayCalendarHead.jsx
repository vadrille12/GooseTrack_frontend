import {
  DayCalendarHeadStyledMobile,
  DayCalendarHeadStyledDesktop,
  DayNameMobile,
  DateMobile,
  DayName,
  Date,
  DayBtn,
} from './DayCalendarHead.styled';

export const DayCalendarHead = () => {
  const isActive = true;

  return (
    <>
      {' '}
      <DayCalendarHeadStyledMobile>
        <li>
          <DayBtn>
            <DayNameMobile>M</DayNameMobile>
            <DateMobile className={isActive ? 'active' : ''}>11</DateMobile>
          </DayBtn>
        </li>
        <li>
          <DayBtn>
            <DayNameMobile>T</DayNameMobile>
            <DateMobile className={isActive ? 'active' : ''}>11</DateMobile>
          </DayBtn>
        </li>
        <li>
          <DayBtn>
            <DayNameMobile>W</DayNameMobile>
            <DateMobile className={isActive ? 'active' : ''}>11</DateMobile>
          </DayBtn>
        </li>
        <li>
          <DayBtn>
            <DayNameMobile>T</DayNameMobile>
            <DateMobile className={isActive ? 'active' : ''}>11</DateMobile>
          </DayBtn>
        </li>
        <li>
          <DayBtn>
            <DayNameMobile>F</DayNameMobile>
            <DateMobile className={isActive ? 'active' : ''}>11</DateMobile>
          </DayBtn>
        </li>
        <li>
          <DayBtn>
            <DayNameMobile>S</DayNameMobile>
            <DateMobile className={isActive ? 'active' : ''}>11</DateMobile>
          </DayBtn>
        </li>
        <li>
          <DayBtn>
            <DayNameMobile>S</DayNameMobile>
            <DateMobile>11</DateMobile>
          </DayBtn>
        </li>
      </DayCalendarHeadStyledMobile>
      <DayCalendarHeadStyledDesktop>
        <li>
          <DayBtn>
            <DayName>Mon</DayName>
            <Date className={isActive ? 'active' : ''}>6</Date>
          </DayBtn>
        </li>
        <li>
          <DayBtn>
            <DayName>Tue</DayName>
            <Date className={isActive ? 'active' : ''}>7</Date>
          </DayBtn>
        </li>
        <li>
          <DayBtn>
            <DayName>Wed</DayName>
            <Date className={isActive ? 'active' : ''}>8</Date>
          </DayBtn>
        </li>
        <li>
          <DayBtn>
            <DayName>Thu</DayName>
            <Date className={isActive ? 'active' : ''}>9</Date>
          </DayBtn>
        </li>
        <li>
          <DayBtn>
            <DayName>Fri</DayName>
            <Date>1</Date>
          </DayBtn>
        </li>
        <li>
          <DayBtn>
            <DayName>Sat</DayName>
            <Date>11</Date>
          </DayBtn>
        </li>
        <li>
          <DayBtn>
            <DayName>Sun</DayName>
            <Date>12</Date>
          </DayBtn>
        </li>
      </DayCalendarHeadStyledDesktop>
    </>
  );
};
