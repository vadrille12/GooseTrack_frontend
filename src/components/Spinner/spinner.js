import { RotatingLines } from 'react-loader-spinner';
import { SpinnerStyled } from './spinner.styled';
import { variables } from '../../Styles/GlobalStyle';

export default function Spinner() {
  return (
    <SpinnerStyled>
      <RotatingLines
        strokeColor={`${variables.colors.primary}`}
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
      />
    </SpinnerStyled>
  );
}
