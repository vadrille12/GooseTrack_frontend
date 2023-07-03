import * as Yup from 'yup';
import { Formik } from 'formik';
import { ReactComponent as IconButton } from 'images/Icon.svg';
import { ReactComponent as HideIcon } from 'images/eye-slash.svg';
import { ReactComponent as ShowIcon } from 'images/eye.svg';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, loginGoogle } from 'redux/auth/operations';
import { useSearchParams } from 'react-router-dom';

import {
  Form,
  Title,
  Label,
  Field,
  ErrorMessage,
  Input,
  PasswordInput,
  Button,
  HidePassword,
} from './LoginForm.styled';

const userSchema = Yup.object().shape({
  email: Yup.string()
    .email('This is an ERROR email')
    .matches(/^[a-zA-Z0-9@.]+$/, 'Email must contain only Latin characters')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .matches(/^\S*$/, 'Password must not contain spaces'),
});

export const LoginForm = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('access_token');
  const email = searchParams.get('email');

  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  
  useEffect(() => {
    dispatch(loginGoogle({ token, email }));
  }, [token, email, dispatch])


  const handleSubmit = e => {
    e.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = e.currentTarget;

    dispatch(login({ email, password }));
    e.currentTarget.reset();
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={userSchema}
    >
      {({ isSubmitting, values, errors, touched }) => {
        const isValid = field =>
          touched[field] && errors[field]
            ? 'is-invalid'
            : touched[field]
            ? 'is-valid'
            : '';

        return (
          <Form onSubmit={handleSubmit}>
            <Title>Log In</Title>
            <Label className={isValid('email')}>
              Email
              <Input>
                <Field
                  className={isValid('email')}
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={values.email}
                />
              </Input>
              {isValid('email') === 'is-valid' && (
                <p>This is a CORRECT email</p>
              )}
              <ErrorMessage name="email" component="div" />
            </Label>
            <Label className={isValid('password')}>
              Password
              <PasswordInput>
                <Field
                  type={showPassword ? 'text' : 'password'}
                  className={isValid('password')}
                  name="password"
                  placeholder="Enter password"
                  value={values.password}
                />
                <HidePassword type="button" onClick={handleShowPassword}>
                  {showPassword ? <ShowIcon /> : <HideIcon />}
                </HidePassword>
              </PasswordInput>
              {isValid('password') === 'is-valid' && (
                <p>This is a CORRECT password</p>
              )}
              <ErrorMessage name="password" component="div" />
            </Label>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting' : 'Log in'}
              <IconButton style={{ width: '18px', height: '18px' }} />
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
