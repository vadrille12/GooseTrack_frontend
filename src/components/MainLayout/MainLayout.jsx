import { FeedbackModal } from 'components/FeedbackModal/FeedbackModal';
import { Sidebar, Container, Header, ButtonFeedback, HeaderBox, UserAccount } from './MainLayout.styled';

import { Outlet } from 'react-router';
import { useState } from 'react';

export const MainLayout = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Header>
        <button>Burg</button>
        <HeaderBox>
          <ButtonFeedback onClick={openModal}>Btn Feedback</ButtonFeedback>
          <UserAccount>
            <p>Icon</p>
            <p>name</p>
            <p>Photo</p>
          </UserAccount>
        </HeaderBox>
      </Header>
      {showModal && <FeedbackModal onClose={closeModal} />}
      <Container>
        <Sidebar>
          <p>Sidebar</p>
        </Sidebar>
        <main>
          <Outlet />
        </main>
      </Container>
    </div>
  );
};
