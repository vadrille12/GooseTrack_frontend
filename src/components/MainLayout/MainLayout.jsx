import { Outlet } from 'react-router';
import { useState, Suspense } from 'react';

import { Wrapper, Main, Box, Container } from './MainLayout.styled';
import AsideBar from 'components/SideBar/SideBar';
import { useAdaptiveImage } from 'hooks/useAdaptiveImage';
import { Header } from 'components/Header/Header';
import Spinner from 'components/Spinner/spinner';
import { selectIsLoading } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

export const MainLayout = () => {
  const { isDesktop } = useAdaptiveImage();
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  console.log(isLoading);

  const onSidebarShow = () => {
    setSideBarIsVisible(state => !state);
  };

  return (
    <Wrapper>
      <main>
        <Container style={{ display: 'flex', width: isLoading && '85vw' }}>
          {(isDesktop || sideBarIsVisible) && (
            <AsideBar onSidebarShow={onSidebarShow} />
          )}

          <Box>
            <Header onSidebarShow={onSidebarShow} />
            <Main>
              <Suspense fallback={<Spinner />}>
                <Outlet />
              </Suspense>
            </Main>
          </Box>
        </Container>
      </main>
    </Wrapper>
  );
};
