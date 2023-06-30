import React from 'react';
import { ReactComponent as IconLogIn } from 'images/logIn.svg';
import { useAdaptiveImage } from '../../../hooks/useAdaptiveImage';
import { GoogleLogin } from '@react-oauth/google';
import {
  ContainerHero,
  ContentWrapper,
  ImageWrapper,
  LinkLogin,
  LinkRegister,
} from './AuthSection.styled';

export const AuthSection = () => {
  const { isRetina, isMobile, isTablet, isDesktop } = useAdaptiveImage();

  return (
    <ContainerHero>
      <ContentWrapper>
        <ImageWrapper>
          {isMobile && (
            <img
              src={
                isRetina
                  ? require('../../../images/mainPage/mobile/mobile_goose_mainPage@2x.png')
                  : require('../../../images/mainPage/mobile/mobile_goose_mainPage.png')
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
                  ? require('../../../images/mainPage/desktop/desktop_goose_mainPage@2x.png')
                  : require('../../../images/mainPage/desktop/desktop_goose_mainPage.png')
              }
              alt="the goose welcomes you"
              width="150"
              height="149"
            />
          )}
        </ImageWrapper>
        <h1>
          G<span>oo</span>seTrack
        </h1>
        <nav>
          <LinkLogin to="login">
            Log in
            <IconLogIn
              style={{ width: '13px', height: '13px', marginLeft: '8px' }}
            />
          </LinkLogin>
          <LinkRegister to="register">Sign up</LinkRegister>
          <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
        </nav>
      </ContentWrapper>
    </ContainerHero>
  );
};
