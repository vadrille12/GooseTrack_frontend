import { useLocation } from 'react-router';
import {
  Container,
  Menu,
  Title,
  BurgerButton,
  BurgerIcon,
  ButtonFeedback,
} from './Header.styled';
import Box from 'components/Box/Box';
import { UserInfo } from './UserInfo/UserInfo';
import { useState } from 'react';
import { useAdaptiveImage } from 'hooks/useAdaptiveImage';
import { FeedbackModal } from 'components/FeedbackModal/FeedbackModal';

export const Header = ({ onSidebarShow }) => {
  const [showModal, setShowModal] = useState(false);
  const { isTablet, isDesktop } = useAdaptiveImage();
  const TabletOrDesktop = isTablet || isDesktop;

  const { pathname } = useLocation();

  let pageTitle = '';

  const words = pathname.split('/');
  const title = words.find(word => word === 'calendar' || word === 'account');

  switch (title) {
    case 'calendar':
      pageTitle = 'Calendar';
      break;
    case 'account':
      pageTitle = 'User Profile';
      break;
    default:
      pageTitle = '';
      break;
  }

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Container>
        <Box display="flex" alignItems="center" gap="8px">
          {!TabletOrDesktop && (
            <BurgerButton type="button" onClick={() => onSidebarShow()}>
              <BurgerIcon />
            </BurgerButton>
          )}
          {TabletOrDesktop && (
            <>
              <div>
                <Title>{pageTitle}</Title>
              </div>
            </>
          )}
        </Box>
        <Menu>
          <ButtonFeedback type="button" onClick={openModal}>
            Feedback
          </ButtonFeedback>
          <UserInfo />
        </Menu>
        {showModal && <FeedbackModal onClose={closeModal} />}
      </Container>
    </>
  );
};
