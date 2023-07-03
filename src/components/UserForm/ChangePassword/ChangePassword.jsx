import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { ReactComponent as ShowIcon } from 'images/eye.svg';
import { ReactComponent as HideIcon } from 'images/eye-slash.svg';
import { changePassword } from 'redux/auth/operations';

import * as Yup from 'yup';
import { Formik } from 'formik';

import { Modal } from 'components/shared/Modal/Modal';

import {
  Form,
  Title,
  Label,
  Field,
  ErrorMessage,
  PasswordInput,
  Button,
  HidePassword,
  ButtonCloseWrap,
  CloseIcon,
} from './ChangePassword.styled';

const userSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required('Old password is required')
    .min(6, 'Password must be at least 6 characters long')
    .matches(/^\S*$/, 'Password must not contain spaces'),
  oldPassword: Yup.string()
    .required('New password is required')
    .min(6, 'Password must be at least 6 characters long')
    .matches(/^\S*$/, 'Password must not contain spaces'),
  confirmNewPassword: Yup.string()
    .required('Confirm new password is required')
    .oneOf([Yup.ref('newPassword'), null], 'Passwords not match'),
});

const checkValidation = (dirty, errors) => {
  const result = !(dirty && Object.keys(errors).length === 0);
  return result;
};

export const ChangePassword = ({ onClose }) => {
  const dispatch = useDispatch();
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showComfirmNewPassword, setShowComfirmNewPassword] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const {
      oldPassword: { value: password },
      newPassword: { value: newPassword },
    } = e.currentTarget;
    dispatch(changePassword({ password, newPassword }));

    e.currentTarget.reset();
    onClose();
  };

  const handleShowOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  };
  const handleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const handleShowConfirmNewPassword = () => {
    setShowComfirmNewPassword(!showComfirmNewPassword);
  };

  return (
    <Modal onClose={onClose}>
      <Formik
        initialValues={{
          oldPassword: '',
          newPassword: '',
          confirmNewPassword: '',
        }}
        validationSchema={userSchema}
      >
        {({ dirty, isSubmitting, values, errors, touched }) => {
          const isValid = field => {
            return touched[field] && errors[field]
              ? 'is-invalid'
              : touched[field]
              ? 'is-valid'
              : '';
          };

          return (
            <Form onSubmit={handleSubmit}>
              <Title>Change password </Title>

              <Label className={isValid('oldPassword')}>
                Old password
                <PasswordInput>
                  <Field
                    type={showOldPassword ? 'text' : 'password'}
                    className={isValid('oldPassword')}
                    name="oldPassword"
                    placeholder="Enter old password"
                    value={values.oldPassword}
                  />
                  <HidePassword type="button" onClick={handleShowOldPassword}>
                    {showOldPassword ? <ShowIcon /> : <HideIcon />}
                  </HidePassword>
                </PasswordInput>
                {isValid('oldPassword') === 'is-valid' && (
                  <p>This is a CORRECT password</p>
                )}
                <ErrorMessage name="oldPassword" component="div" />
              </Label>

              <Label className={isValid('newPassword')}>
                New password
                <PasswordInput>
                  <Field
                    type={showNewPassword ? 'text' : 'password'}
                    className={isValid('newPassword')}
                    name="newPassword"
                    placeholder="Enter new password"
                    value={values.newPassword}
                  />
                  <HidePassword type="button" onClick={handleShowNewPassword}>
                    {showNewPassword ? <ShowIcon /> : <HideIcon />}
                  </HidePassword>
                </PasswordInput>
                {isValid('newPassword') === 'is-valid' && (
                  <p>This is a CORRECT password</p>
                )}
                <ErrorMessage name="newPassword" component="div" />
              </Label>

              <Label className={isValid('confirmNewPassword')}>
                Confirm new password
                <PasswordInput>
                  <Field
                    type={showComfirmNewPassword ? 'text' : 'password'}
                    className={isValid('confirmNewPassword')}
                    name="confirmNewPassword"
                    placeholder="Enter old password"
                    value={values.confirmNewPassword}
                  />
                  <HidePassword
                    type="button"
                    onClick={handleShowConfirmNewPassword}
                  >
                    {showComfirmNewPassword ? <ShowIcon /> : <HideIcon />}
                  </HidePassword>
                </PasswordInput>
                {isValid('confirmNewPassword') === 'is-valid' && (
                  <p>This is a CORRECT password</p>
                )}
                <ErrorMessage name="confirmNewPassword" component="div" />
              </Label>

              <Button type="submit" disabled={checkValidation(dirty, errors)}>
                {isSubmitting ? 'Submitting' : 'Change password'}
              </Button>
              <ButtonCloseWrap
                type="button"
                aria-label="close button"
                onClick={onClose}
              >
                <CloseIcon />
              </ButtonCloseWrap>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
};
