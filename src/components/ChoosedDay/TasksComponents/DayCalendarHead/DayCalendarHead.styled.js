import styled from 'styled-components';
import { variables } from '../../../../Styles/GlobalStyle';

export const DayCalendarHeadStyledMobile = styled.ul`
  width: 335px;
  height: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2px;
  padding: 14px 22px;
  margin: auto;

  background: ${props => props.theme.page_bg};
  border: 1px solid ${props => props.theme.tabl_border};
  border-radius: 8px;

  @media screen and (max-width: 374px) {
    width: calc(100% - 20px);
    height: auto;
    padding: 10px;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const DayBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  border-radius: 8px;

  transition: ${variables.transitions.standart};

  &:hover,
  :focus {
    box-shadow: ${variables.shadow.shadow};
  }
`;

export const DayNameMobile = styled.span`
  width: 16px;
  height: 18px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;

  text-transform: uppercase;

  color: ${props => props.theme.text_4};
`;

export const DateMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 8px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  text-transform: uppercase;

  width: 27px;
  height: 26px;

  color: ${props => props.theme.text_3};

  border-radius: 8px;
  background: none;

  justify-content: center;
  align-items: center;
  border: none;

  &.active {
    background: #3e85f3;
    color: #ffffff;
  }
`;

export const DayCalendarHeadStyledDesktop = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 56px;

    padding: 10px 35px;

    width: 704px;
    height: 68px;

    background: ${props => props.theme.page_bg};
    border: 1px solid ${props => props.theme.tabl_border};
    border-radius: 8px;
  }

  transition: ${variables.transitions.standart};

  &:hover,
  :focus {
    box-shadow: ${variables.shadow.shadow};
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;
    height: 68px;

    padding: 10px 46px;

    gap: 114px;
  }
`;

export const DayName = styled.span`
  width: 22px;
  height: 18px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  text-transform: uppercase;

  color: ${props => props.theme.text_4};

  &.weekend {
    color: ${props => props.theme.text_5};
  }
`;

export const DateDesktop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 8px;
  margin: 2px auto;

  width: 27px;
  height: 26px;

  background: #3e85f3;
  border-radius: 8px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;

  text-transform: uppercase;

  color: ${props => props.theme.text_3};

  justify-content: center;
  align-items: center;
  border: none;
  background: none;

  &.active {
    background: #3e85f3;
    color: #ffffff;
  }
`;
