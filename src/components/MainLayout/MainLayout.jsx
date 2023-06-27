import { Outlet } from 'react-router';
import { useState, Suspense } from 'react';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import { Wrapper, Main, Box, Container } from './MainLayout.styled';
import AsideBar from 'components/SideBar/SideBar';
import { useSelector } from 'react-redux';
import { useAdaptiveImage } from 'hooks/useAdaptiveImage';
import { Header } from 'components/Header/Header';

export const MainLayout = () => {
  const { isTablet, isDesktop } = useAdaptiveImage();
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
  const TabletOrDesktop = isTablet || isDesktop;
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const onSidebarShow = () => {
    setSideBarIsVisible(state => !state);
  };

  return (
    <>
      <Wrapper>
        <main>
          <Container style={{ display: isLoggedIn ? 'flex' : 'block' }}>
            {isLoggedIn ? (
              <>
                {(TabletOrDesktop || sideBarIsVisible) && (
                  <AsideBar onSidebarShow={onSidebarShow} />
                )}

                <Box>
                  <Header onSidebarShow={onSidebarShow} />
                  <Main>
                    <Suspense fallback={<p>Loading...</p>}>
                      <Outlet />
                    </Suspense>
                  </Main>
                </Box>
              </>
            ) : (
              <Suspense fallback={<p>Loading...</p>}>
                <Outlet />
              </Suspense>
            )}
          </Container>
        </main>
      </Wrapper>
    </>
  );
};
