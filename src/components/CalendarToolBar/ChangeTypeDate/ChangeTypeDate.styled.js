import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { variables } from 'Styles/GlobalStyle';

export const ChangeTypeDateStyled = styled.div`
  display: flex;
`;

export const MonthBnt = styled(NavLink)`
  width: 76px;
  height: 34px;
  padding: 8px 16px 8px 16px;
  border-radius: 8px 0px 0px 8px;
  border: 0px 1px 0px 0px;

  cursor: pointer;

  border: none;
  border-right: 1px solid rgba(62, 133, 243, 0.2);
  background: ${variables.colors_mode.date_btn};

  color: #3e85f3;
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-weight: 500;
  line-height: 18px;

  &.active {
    background: ${variables.colors_mode.date_btn_active};
    color: ${variables.colors_mode.date_btn_active_text};
  }
`;

export const DayBnt = styled(NavLink)`
  width: 76px;
  height: 34px;
  padding: 8px 25px 8px 25px;
  border-radius: 0 8px 8px 0;

  cursor: pointer;

  border: none;
  border-left: 1px solid rgba(62, 133, 243, 0.2);
  background: ${variables.colors_mode.date_btn};

  color: #3e85f3;
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-weight: 500;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    width: 82px;
  }

  &.active {
    background: ${variables.colors_mode.date_btn_active};
    color: ${variables.colors_mode.date_btn_active_text};
  }
`;
