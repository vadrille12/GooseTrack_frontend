import { Sidebar, Container, Header, ButtonFeedback, HeaderBox, UserAccount } from './MainLayout.styled';

import { Outlet } from 'react-router';

export const MainLayout = () => {
  return (
    <div>
      <Header>
        <button>Burg</button>
        <HeaderBox>
          <ButtonFeedback>Btn Feedback</ButtonFeedback>
          <UserAccount>
            <p>Icon</p>
            <p>name</p>
            <p>Photo</p>
          </UserAccount>
        </HeaderBox>
      </Header>
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
