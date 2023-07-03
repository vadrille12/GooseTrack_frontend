import styled from 'styled-components';
import { variables } from '../../../Styles/GlobalStyle';
import { ReactComponent as ArrowLeft } from '../../../../src/images/chevron-left.svg';
import { ReactComponent as ArrowRight } from '../../../../src/images/chevron-right.svg';

export const DateBarStyled = styled.div`
  display: block;
  height: 30px;
  gap: 2px;

  @media screen and (min-width: 480px) {
    display: flex;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  @media screen and (max-width: 374px) {
    display: block;
  }
  @media screen and (min-width: 375px) {
    gap: 126px;
  }

  @media screen and (min-width: 768px) {
    justify-content: start;
    gap: 8px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const CurrentDate = styled.div`
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;

  color: ${variables.colors.white};
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-weight: 700;
  line-height: 18px;
  text-transform: uppercase;

  background: ${variables.colors.primary};

  width: 109px;
  height: 30px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 121px;
    height: 34px;
  }

  @media screen and (min-width: 1440px) {
    width: 131px;
    height: 34px;
  }
`;

export const ArrowLeftStyled = styled(ArrowLeft)`
  width: 16px;
  height: 16px;
  stroke: ${props => props.theme.title};
`;

export const ArrowRightStyled = styled(ArrowRight)`
  width: 16px;
  height: 16px;
  stroke: ${props => props.theme.title};
`;

export const ArrowLeftBtn = styled.button`
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 30px;
  padding: 6px 12px;
  text-align: center;
  border-radius: 8px 0 0 8px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.tabl_border};
  border-right: 0.5px solid ${props => props.theme.tabl_border};
  background: ${props => props.theme.page_bg};

  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 34px;
    padding: 8px 10px;
  }
`;

export const ArrowRightBtn = styled.button`
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 30px;
  padding: 6px 12px;
  text-align: center;
  border-radius: 0 8px 8px 0;
  background-color: transparent;
  border: 1px solid ${props => props.theme.tabl_border};
  border-left: 0.5px solid ${props => props.theme.tabl_border};
  background: ${props => props.theme.page_bg};

  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 34px;
    padding: 8px 10px;
  }
`;
