import { Outlet } from 'react-router';
import { useState } from 'react';

import { Wrapper, Main, Box, Container } from './MainLayout.styled';
import AsideBar from 'components/SideBar/SideBar';
import { useAdaptiveImage } from 'hooks/useAdaptiveImage';
import { Header } from 'components/Header/Header';
import { selectIsLoading } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

export const MainLayout = () => {
  const { isDesktop } = useAdaptiveImage();
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  // console.log(isLoading);

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
