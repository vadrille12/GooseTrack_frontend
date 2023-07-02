import { useDispatch } from 'react-redux';
import { BsBarChart } from 'react-icons/bs';

import { logout } from 'redux/auth/operations.js';

import Box from 'components/Box/Box';
import Icon from 'components/Icon/Icon';

import { ReactComponent as Profile } from 'images/sideBar/user-check.svg';
import { ReactComponent as Calendar } from 'images/sideBar/calendar-check.svg';

import {
  Aside,
  Item,
  Link,
  Logo,
  LogoText,
  PanelTitle,
  Button,
  ButtonText,
  ButtonClose,
  IconClose,
} from './SideBar.styled.jsx';

const AsideBar = ({ onSidebarShow }) => {
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  return (
    <>
      <Aside>
        <div>
          <Box
            mb={64}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <Logo />
              <LogoText>
                G<span style={{ fontStyle: 'italic' }}>oo</span>seTrack
              </LogoText>
            </Box>
            <ButtonClose type="buton" onClick={() => onSidebarShow()}>
              <IconClose />
            </ButtonClose>
          </Box>

          <PanelTitle>User Panel</PanelTitle>
          <nav>
            <Item>
              <Link to="/account">
                <Profile />
                <span style={{ marginLeft: '10px' }}>My account</span>
              </Link>
            </Item>
            <Item>
              <Link to="/calendar">
                <Calendar />
                <span style={{ marginLeft: '10px' }}>Calendar</span>
              </Link>
            </Item>
            <Item>
              <Link to="/statistics">
                <BsBarChart style={{ width: '20px', height: '20px' }} />
                <span style={{ marginLeft: '10px' }}>Statistics</span>
              </Link>
            </Item>
          </nav>
        </div>

        <div>
          <Button type="button" onClick={handleLogout}>
            <ButtonText>Log out</ButtonText>
            <Icon id="logout" />
          </Button>
        </div>
      </Aside>
    </>
  );
};

export default AsideBar;
