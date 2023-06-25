import styled from 'styled-components';

import { variables } from '../../../Styles/GlobalStyle';

export const MobileDaysList = styled.ul`
  width: 335px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 34px;
  padding: 16px 16px;
  margin: auto;
  margin-bottom: 14px;

  background: ${variables.colors.background};
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 8px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    display: none;
  }
`;

export const DesktopDayList = styled.ul`
  display: none;
  @media screen and (min-width: calc(${variables.breakpoints.tablet} - 0.1px)) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 65px;

    padding: 14px 40px;
    margin: 0 auto;
    margin-bottom: 18px;

    width: 704px;
    height: 46px;

    background: ${variables.colors.background};
    border: 1px solid rgba(220, 227, 229, 0.5);
    border-radius: 8px;

    @media screen and (min-width: calc(${variables.breakpoints
        .desktop} - 0.1px)) {
      width: 1087px;
      height: 46px;

      padding: 14px 60px;
      margin-bottom: 15px;

      gap: 122px;
    }
  }
`;
export const WorkDay = styled.li`
  color: ${variables.colors.text};
  font-size: 16px;
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;
`;

export const WeekendDay = styled(WorkDay)`
  color: ${variables.colors.primary};
`;
