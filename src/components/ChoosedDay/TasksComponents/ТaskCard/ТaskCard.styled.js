import styled from 'styled-components';
import { variables } from '../../../../Styles/GlobalStyle';

export const TaskCardStyled = styled.div`
  display: block;
  justify-content: center;
  width: 296px;
  height: 108px;

  padding: 14px 14px 18px 14px;

  background: ${props => props.theme.task_bg};
  border: 1px solid ${props => props.theme.tabl_border};
  border-radius: 8px;

  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: default;

  transition: ${variables.transitions.standart};

  &:hover,
  :focus {
    box-shadow: ${variables.shadow.shadow};
  }

  @media screen and (min-width: 768px) {
    height: 112px;
    width: 300px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const TaskText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 28px;
  color: ${props => props.theme.title};
  text-align: left;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;

  border: 2px solid ${variables.colors.primary};
  border-radius: 50%;
`;

export const StatusLow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  margin-top: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  cursor: default;

  color: ${props => props.theme.title_2};

  height: 20px;

  background: ${variables.colors.statusLow};
  border-radius: 4px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StatusMedium = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  margin-top: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  cursor: default;

  color: ${props => props.theme.title_2};

  height: 20px;

  background: ${variables.colors.mainYellow};
  border-radius: 4px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StatusHigh = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  margin-top: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  cursor: default;

  color: ${props => props.theme.title_2};

  height: 20px;

  background: ${variables.colors.mainRed};
  border-radius: 4px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const AvatarGroupContainer = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
