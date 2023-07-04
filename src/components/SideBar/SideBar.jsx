import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BsBarChart } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';

import { logout } from 'redux/auth/operations.js';

import Box from 'components/Box/Box';

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
  Overlay,
} from './SideBar.styled.jsx';

const AsideBar = ({ onSidebarShow }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const closeMenuByEsc = e => {
      if (e.code === 'Escape') {
        onSidebarShow();
      }
    };

    document.addEventListener('keydown', closeMenuByEsc);

    return () => {
      document.removeEventListener('keydown', closeMenuByEsc);
    };
  }, [onSidebarShow]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onSidebarShow();
    }
  };

  const handleLogout = () => dispatch(logout());

  return (
    <Overlay onClick={handleOverlayClick}>
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
          <Button
            type="button"
            onClick={() => {
              handleLogout();
              onSidebarShow();
            }}
          >
            <ButtonText>Log out</ButtonText>
            <FiLogOut style={{ width: '18px', height: '18px' }} />
          </Button>
        </div>
      </Aside>
    </Overlay>
  );
};

export default AsideBar;
