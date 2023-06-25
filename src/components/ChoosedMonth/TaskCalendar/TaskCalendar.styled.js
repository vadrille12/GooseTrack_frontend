import styled from 'styled-components';

import { variables } from '../../../Styles/GlobalStyle';

const backgroundColorPriority = {
  low: variables.colors.lightBlueBackground,
  medium: variables.colors.lightYellow,
  high: variables.colors.lightRed,
};

const textColorPriority = {
  low: variables.colors.primary,
  medium: variables.colors.mainYellow,
  high: variables.colors.mainRed,
};

export const Task = styled.p`
  width: 44px;
  height: 22px;
  padding: 4px 4px 4px 8px;
  margin-bottom: 1px;

  background-color: ${props => backgroundColorPriority[props.priority]};
  color: ${props => textColorPriority[props.priority]};

  border-radius: 8px;

  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 10px;
  font-family: Inter;
  font-weight: 700;
  line-height: 1.4;
  @media screen and (min-width: calc(${variables.breakpoints.tablet} - 0.1px)) {
    width: 92px;
    height: 26px;
    padding: 4px 8px 4px 8px;

    font-size: 14px;
    line-height: 1.29;
  }

  @media screen and (min-width: calc(${variables.breakpoints
      .desktop} - 0.1px)) {
    width: 139px;
  }
`;
