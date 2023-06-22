import React from 'react';

import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { Container, FormBox, ImgContainer } from './RegisterPage.styled';

export default function RegisterPage() {
  return (
    <Container>
      <FormBox>
        <RegisterForm />
      </FormBox>

      <AuthNavigate link="/login" text="Log In" />

      <ImgContainer />
    </Container>
  );
}
