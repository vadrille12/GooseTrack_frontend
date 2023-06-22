import * as Yup from 'yup';
import { Formik } from 'formik';
import { ReactComponent as IconButton } from 'images/logIn.svg';

import {
  Form,
  Title,
  Label,
  Field,
  ErrorMessage,
  Input,
  PasswordInput,
  Button,
  // Svg,
} from './RegisterForm.styled';

const userSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(/^\S[\S\s]{0,28}\S$/, 'Name must be between 2 and 30 characters')
    .test(
      'name-validation',
      'Name must be at least 2 characters long',
      value => {
        return value && value.replace(/\s/g, '').length >= 2;
      }
    ),
  email: Yup.string()
    .email('This is an ERROR email')
    .matches(/^[a-zA-Z0-9@.]+$/, 'Email must contain only Latin characters')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .matches(/^\S*$/, 'Password must not contain spaces'),
});

export const RegisterForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      userSchema={userSchema}
    >
      {({ isSubmitting, values, errors, touched }) => {
        const isValid = field =>
          touched[field] && errors[field]
            ? 'is-invalid'
            : touched[field]
            ? 'is-valid'
            : '';

        return (
          <Form>
            <Title>Sign Up</Title>
            <Label className={isValid('name')}>
              Name
              <Input>
                <Field
                  className={isValid('name')}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  value={values.name}
                />
                {isValid('name') === 'is-valid' && (
                  <svg height="20" width="20" className="error-success">
                    <use href="../../images/log-in-01.svg"></use>
                  </svg>
                )}
                {isValid('name') === 'is-invalid' && (
                  <svg height="20" width="20" className="error-success">
                    <use href="../../images/log-in-01.svg"></use>
                  </svg>
                )}
              </Input>
              {isValid('name') === 'is-valid' && <p>This is a CORRECT name</p>}
              <ErrorMessage name="name" component="div" />
            </Label>
            <Label className={isValid('email')}>
              Email
              <Input>
                <Field
                  className={isValid('email')}
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  title="Email must be in the format username@domain.com"
                  value={values.email}
                />
                {isValid('email') === 'is-valid' && (
                  <svg height="20" width="20" className="error-success">
                    <use href="../../images/log-in-01.svg"></use>
                  </svg>
                )}
                {isValid('email') === 'is-invalid' && (
                  <svg height="20" width="20" className="error-success">
                    <use href="../../images/log-in-01.svg"></use>
                  </svg>
                )}
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
                  className={isValid('password')}
                  name="password"
                  placeholder="Enter password"
                  title="Password must contain at least one number, one lowercase and one uppercase letter, and be at least 6 characters long."
                  value={values.password}
                />
              </PasswordInput>
              {isValid('password') === 'is-valid' && (
                <p>This is a CORRECT password</p>
              )}
              <ErrorMessage name="password" component="div" />
            </Label>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting' : 'Sign Up'}
              <IconButton
          style={{ width: '18px', height: '18px'}}
        />
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
