import React from 'react';

import {
  Header,
  ContentWrapper,
  ImageWrapper,
  LoginLink,
  RegisterLink,
} from './AuthSection.styled';

import goose1x from 'images/mainPage/desktop/desktop_goose_mainPage.png';
import goose2x from 'images/mainPage/desktop/desktop_goose_mainPage@2x.png';

export const AuthSection = () => {

  return (
    <Header>
      <ContentWrapper>
        <ImageWrapper>
          <img
            srcSet={`${goose1x} 1x, ${goose2x} 2x`}
            src={goose1x}
            alt="Goose welcome you"
            title="Goose welcome you"
          />
        </ImageWrapper>

        <h1>
          G<span>oo</span>seTrack
        </h1>
        <nav>
          <LoginLink to="login">Log in</LoginLink>
          <RegisterLink to="register">Sign up</RegisterLink>
        </nav>
      </ContentWrapper>
    </Header>
  );
};