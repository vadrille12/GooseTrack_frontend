import { FeedbackModal } from 'components/FeedbackModal/FeedbackModal';
import {
  Container,
  Header,
  ButtonFeedback,
  HeaderBox,
  UserAccount,
  BurgerButton,
  ImageWrapper,
  ContentWrapper,
  SidebarSubTitle,
  CloseIcon,
  GooseImg,
  SidebarHeader,
  SidebarWrapper,
  LogoTitle,
} from './MainLayout.styled';
import { UserNav } from './components/UserNav/UserNav';
import { ReactComponent as IconMenuBurger } from '../../images/icon-menu-burger.svg';
import { ReactComponent as IconMoon } from '../../images/moon.svg';
import { useAdaptiveImage } from '../../hooks/useAdaptiveImage';

import { Outlet } from 'react-router';
import { useState } from 'react';
import { LogoutBtn } from './components/LogoutBtn/LogoutBtn';

export const MainLayout = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const { isRetina, isMobile, isTablet, isDesktop } = useAdaptiveImage();

  const openSidebar = () => {
    setShowSidebar(true);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Header>
        <BurgerButton onClick={openSidebar}>
          <IconMenuBurger />
        </BurgerButton>
        <HeaderBox>
          <ButtonFeedback type="button" onClick={openModal}>
            Feedback
          </ButtonFeedback>
          <UserAccount>
            <IconMoon />
            <p>Valik</p>
            <ContentWrapper>
              <ImageWrapper>
                {isMobile && (
                  <img
                    src={
                      isRetina
                        ? require('../../images/mainPage/mobile/mobile_goose_mainPage@2x.png')
                        : require('../../images/mainPage/mobile/mobile_goose_mainPage.png')
                    }
                    alt="the goose welcomes you"
                    width="142"
                    height="142"
                  />
                )}
                {(isTablet || isDesktop) && (
                  <img
                    src={
                      isRetina
                        ? require('../../images/mainPage/desktop/desktop_goose_mainPage@2x.png')
                        : require('../../images/mainPage/desktop/desktop_goose_mainPage.png')
                    }
                    alt="the goose welcomes you"
                    width="150"
                    height="149"
                  />
                )}
              </ImageWrapper>
            </ContentWrapper>
          </UserAccount>
        </HeaderBox>
      </Header>
      {showModal && <FeedbackModal onClose={closeModal} />}
      <Container>
        {showSidebar && (
          <SidebarWrapper>
            <SidebarHeader>
              <LogoTitle>Goose Track</LogoTitle>
              <CloseIcon></CloseIcon>
            </SidebarHeader>
            <SidebarSubTitle>User Panel</SidebarSubTitle>
            <UserNav />
            <LogoutBtn/>
          </SidebarWrapper>
        )}

        <main>
          <Outlet />
        </main>
      </Container>
    </div>
  );
};
