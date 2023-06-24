import styled from 'styled-components';

export const ChangeTypeDateStyled = styled.div`
  display: flex;
`;

export const MonthBnt = styled.button`
  width: 76px;
  height: 34px;
  padding: 8px 16px 8px 16px;
  border-radius: 8px 0px 0px 8px;
  border: 0px 1px 0px 0px;

  cursor: pointer;

  border: none;
  border-right: 1px solid rgba(62, 133, 243, 0.2);
  background: #e3f3ff;

  color: #3e85f3;
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-weight: 500;
  line-height: 18px;

  :active {
    background: #cae8ff;
  }
`;

export const DayBnt = styled.button`
  width: 76px;
  height: 34px;
  padding: 8px 25px 8px 25px;
  border-radius: 0 8px 8px 0;

  cursor: pointer;

  border: none;
  border-left: 1px solid rgba(62, 133, 243, 0.2);
  background: #e3f3ff;

  color: #3e85f3;
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-weight: 500;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    width: 82px;
  }

  :active {
    background: #cae8ff;
  }
`;
