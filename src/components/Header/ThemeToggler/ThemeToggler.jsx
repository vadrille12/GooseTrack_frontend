
import Sun from '../../../images/sun.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';
import { THEME_OPTIONS } from 'shared/services/themeOptions';
import { ThemeIcon, ToggleButton } from './ThemeToggler.styled';
import { setTheme } from 'redux/theme/themeSlice';

export const ThemeToggler = () => {
  const mode = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(
      setTheme(
        mode === THEME_OPTIONS.light ? THEME_OPTIONS.dark : THEME_OPTIONS.light
      )
    );
  };

  return (
    <div>
      <ToggleButton onClick={handleThemeChange}>
        <ThemeIcon>
            <Sun/>
        </ThemeIcon>
      </ToggleButton>
    </div>
  );
};