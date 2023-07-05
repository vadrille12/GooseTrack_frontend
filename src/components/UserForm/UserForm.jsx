import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { refresh, updateUser } from 'redux/auth/operations';

import { Formik, Form } from 'formik';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { DatePicker, PopperDateStyles } from './Calendar/DatePicker.styled';
import { userSchema } from './helpers/Schemas';

import dayjs from 'dayjs';
import moment from 'moment/moment';
import Spinner from 'components/Spinner/spinner';
import { ChangePassword } from './ChangePassword/ChangePassword';
import goose from '../../images/mainPage/mobile/mobile_goose_mainPage.png';
import { selectToken } from 'redux/auth/selectors';

import {
  AvatarWrap,
  Wrap,
  AvatarBox,
  AvatarSvg,
  Label,
  UserWrapInfo,
  User,
  UserName,
  FormInputWrap,
  Input,
  FormBtnWrap,
  FormBtn,
  FormInputBox,
  Img,
  AddIcon,
  ErrorMessage,
  Field,
  IconDone,
  IconError,
  PasswordChangeBtn,
} from './UserForm.styled';

export const UserForm = () => {
  const [avatarURL, setAvatarURL] = useState(null);
  const [birthdayDate, setBirthdayDate] = useState(null);
  const [isFormChanged, setIsFormChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordChanging, setIsPasswordChanging] = useState(false);

  const currentDate = moment().format('DD/MM/YYYY');
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch, token]);

  return (
    <>
      <Wrap>
        <div>
          <Formik
            enableReinitialize={true}
            validationSchema={userSchema}
            initialValues={{
              name: user?.name || '',
              email: user?.email || '',
              phone: user?.phone || '',
              skype: user?.skype || '',
              birthday: user?.birthday || '',
            }}
            onSubmit={async values => {
              try {
                setIsLoading(true);
                const formData = new FormData();
                formData.append('name', values.name);
                formData.append('email', values.email);
                formData.append(
                  'birthday',
                  birthdayDate
                    ? dayjs(birthdayDate).format('DD/MM/YYYY')
                    : dayjs(new Date()).format('DD/MM/YYYY')
                );

                formData.append('phone', values.phone);
                formData.append('skype', values.skype);
                if (avatarURL) {
                  formData.append('avatar', avatarURL);
                }

                await dispatch(updateUser(formData));

                setIsLoading(false);
                setIsFormChanged(false);
              } catch (error) {
                setIsLoading(false);
                console.error('Error occurred during form submission:', error);
              }
            }}
          >
            {({
              dirty,
              errors,
              touched,
              values,
              setFieldValue,
              isSubmitting,
            }) => {
              const isValid = field =>
                touched[field] && errors[field]
                  ? 'is-invalid'
                  : touched[field]
                  ? 'is-valid'
                  : '';
              return (
                <Form>
                  <AvatarWrap>
                    <AvatarBox>
                      {avatarURL ? (
                        <Label htmlFor="avatar">
                          <Img
                            src={URL.createObjectURL(avatarURL)}
                            alt="avatar"
                          />
                        </Label>
                      ) : user?.avatarURL ? (
                        <Label htmlFor="avatar">
                          <Img src={user.avatarURL} alt="avatar" />
                        </Label>
                      ) : (
                        <div>
                          <Img
                            src={goose}
                            alt="Goose welcome you"
                            title="Goose welcome you"
                          />
                          <Label htmlFor="avatar">
                            <AvatarSvg>
                              <AddIcon />
                            </AvatarSvg>
                          </Label>
                        </div>
                      )}
                    </AvatarBox>

                    <input
                      type="file"
                      id="avatar"
                      name="avatar"
                      accept="image/*,.png,.jpg,.gif,.web"
                      onChange={e => {
                        const file = e.target.files[0];
                        setAvatarURL(file);
                        setIsFormChanged(true);
                      }}
                      style={{ display: 'none' }}
                    />

                    <UserWrapInfo>
                      <UserName>{user.name || 'User NickName'}</UserName>
                      <User>User</User>
                    </UserWrapInfo>
                  </AvatarWrap>

                  <FormInputWrap>
                    <FormInputBox>
                      <Label htmlFor="name" className={isValid('name')}>
                        User Name
                        <Input>
                          <Field
                            className={isValid('name')}
                            id="name"
                            name="name"
                            placeholder={'User Name'}
                            value={values.name}
                            type="text"
                          />
                          {isValid('name') === 'is-valid' && <IconDone />}
                          {isValid('name') === 'is-invalid' && <IconError />}
                          <ErrorMessage name="name" component="div" />
                        </Input>
                      </Label>
                      <Label htmlFor="birthday" className={isValid('birthday')}>
                        Birthday
                        <Input>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              className={isValid('birthday')}
                              id="birthday"
                              name="birthday"
                              views={['year', 'month', 'day']}
                              format="DD/MM/YYYY"
                              closeOnSelect={true}
                              disableFuture={true}
                              slotProps={{
                                popper: {
                                  sx: PopperDateStyles,
                                },
                                textField: {
                                  placeholder:
                                    user.birthday || `${currentDate}`,
                                },
                              }}
                              onChange={date => {
                                if (!date) setFieldValue('birthday', '');

                                setFieldValue('birthday', date);
                                setBirthdayDate(date);
                                setIsFormChanged(true);
                              }}
                              slots={{
                                openPickerIcon: KeyboardArrowDownIcon,
                              }}
                            />
                            {isValid('birthday') === 'is-valid' && <IconDone />}
                            {isValid('birthday') === 'is-invalid' && (
                              <IconError />
                            )}
                            <ErrorMessage name="birthday" component="div" />
                          </LocalizationProvider>
                        </Input>
                      </Label>

                      <Label htmlFor="email" className={isValid('email')}>
                        Email
                        <Input>
                          <Field
                            className={isValid('email')}
                            id="email"
                            name="email"
                            placeholder={'email@mail.com'}
                            type="email"
                            value={values.email}
                          />
                          {isValid('email') === 'is-valid' && <IconDone />}
                          {isValid('email') === 'is-invalid' && <IconError />}
                          <ErrorMessage name="email" component="div" />
                        </Input>
                      </Label>
                    </FormInputBox>
                    <FormInputBox>
                      <Label htmlFor="phone" className={isValid('phone')}>
                        Phone
                        <Input>
                          <Field
                            className={isValid('phone')}
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder={'+38 097 111 11 11'}
                            value={values.phone}
                          />
                          {isValid('phone') === 'is-valid' && <IconDone />}
                          {isValid('phone') === 'is-invalid' && <IconError />}
                          <ErrorMessage name="phone" component="div" />
                        </Input>
                      </Label>
                      <Label htmlFor="skype" className={isValid('skype')}>
                        Skype
                        <Input>
                          <Field
                            className={isValid('skype')}
                            id="skype"
                            name="skype"
                            type="text"
                            placeholder={'Add skype'}
                            value={values.skype}
                          />
                          {isValid('skype') === 'is-valid' && <IconDone />}
                          {isValid('skype') === 'is-invalid' && <IconError />}
                          <ErrorMessage name="skype" component="div" />
                        </Input>
                      </Label>
                      <FormBtnWrap>
                        <PasswordChangeBtn
                          type="button"
                          onClick={() => setIsPasswordChanging(true)}
                        >
                          Change password
                          {isLoading && <Spinner />}
                        </PasswordChangeBtn>
                      </FormBtnWrap>
                    </FormInputBox>
                  </FormInputWrap>
                  <FormBtnWrap>
                    <FormBtn type="submit" disabled={!dirty && !isFormChanged}>
                      {isSubmitting ? 'Updating account...' : 'Save changes'}
                      {isLoading && <Spinner />}
                    </FormBtn>
                  </FormBtnWrap>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Wrap>
      {isPasswordChanging ? (
        <ChangePassword onClose={() => setIsPasswordChanging(false)} />
      ) : null}
    </>
  );
};
