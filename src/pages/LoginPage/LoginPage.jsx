import React from 'react';

import { LoginForm } from 'components/LoginForm/LoginForm';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { Container, FormBox, ImgContainer } from './LoginPage.styled';

export default function LoginPage() {
  return (
    <Container>
      <FormBox>
        <LoginForm />
      </FormBox>

      <AuthNavigate link="/register" text="Sign up" />

      <ImgContainer />
    </Container>
  );
}
