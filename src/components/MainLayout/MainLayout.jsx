import { FeedbackModal } from 'components/FeedbackModal/FeedbackModal';
import {
  Sidebar,
  Container,
  Header,
  ButtonFeedback,
  HeaderBox,
  UserAccount,
  BurgerButton,
} from './MainLayout.styled';
import { ReactComponent as IconMenuBurger } from '../../images/icon-menu-burger.svg';

import { Outlet } from 'react-router';
import { useState } from 'react';

export const MainLayout = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const openSidebar = () => {
    setShowSidebar(true);
  }

  const closeSidebar = () => {
    setShowSidebar(false)
  }

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
          <ButtonFeedback onClick={openModal}>Feedback</ButtonFeedback>
          <UserAccount>
            <p>Icon</p>
            <p>name</p>
            <p>Photo</p>
          </UserAccount>
        </HeaderBox>
      </Header>
      {showModal && <FeedbackModal onClose={closeModal} />}
      <Container>
        {showSidebar &&  <Sidebar><p>Sidebar</p></Sidebar>}

        <main>
          <Outlet />
        </main>
      </Container>
    </div>
  );
};
