import { Outlet } from 'react-router';
import { useState, useEffect } from 'react';

import { Wrapper, Main, Box, Container } from './MainLayout.styled';
import AsideBar from 'components/SideBar/SideBar';
import { useAdaptiveImage } from 'hooks/useAdaptiveImage';
import { Header } from 'components/Header/Header';

export const MainLayout = () => {
  const { isDesktop } = useAdaptiveImage();
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);

  useEffect(() => {
    if (sideBarIsVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [sideBarIsVisible]);

  const onSidebarShow = () => {
    setSideBarIsVisible(state => !state);
  };

  return (
    <Wrapper>
      <main>
        <Container style={{ display: 'flex' }}>
          {(isDesktop || sideBarIsVisible) && (
            <AsideBar onSidebarShow={onSidebarShow} />
          )}

          <Box>
            <Header onSidebarShow={onSidebarShow} />
            <Main>
              <Outlet />
            </Main>
          </Box>
        </Container>
      </main>
    </Wrapper>
  );
};
