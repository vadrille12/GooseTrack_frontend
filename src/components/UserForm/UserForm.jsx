import { Formik, Form } from 'formik';
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
} from './UserForm.styled';

import goose from '../../images/mainPage/mobile/mobile_goose_mainPage.png';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

import { refresh, updateUser } from 'redux/auth/operations';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { DatePicker, PopperDateStyles } from './Calendar/DatePicker.styled';
import { userSchema } from './helpers/Schemas';

import dayjs from 'dayjs';
import Spinner from 'components/Spinner/spinner';
// const day = dayjs(new Date()).format('DD/MM/YYYY');

export const UserForm = () => {
  const [avatarURL, setAvatarURL] = useState(null);
  const [birthdayDate, setBirthdayDate] = useState(null);
    const [isFormChanged, setIsFormChanged] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserInfo = async () => {
      await dispatch(refresh());
    };
    getUserInfo();
  }, [dispatch]);

  return (
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
            birthday: birthdayDate
              ? birthdayDate
              : dayjs(user.birthday).format('DD/MM/YYYY'),
            // ? new Date(dayjs(user.birthday).format('DD/MM/YYYY'))
            // : new Date(),

            // user?.birthday
            // ? user?.birthday
            // : new Date()
            //  birthdayDate?dayjs(birthdayDate).format('DD/MM/YYYY'):user?.birthday,
          }}
          onSubmit={async values => {
            try {
              setIsLoading(true);
              const formData = new FormData();
              formData.append('name', values.name);
              formData.append('email', values.email);
              formData.append('birthday', values.birthday);
              formData.append('phone', values.phone);
              formData.append('skype', values.skype);
              if (avatarURL) {
                formData.append('avatar', avatarURL);
              }
              // for (const [key, value] of formData.entries()) {
              //   console.log(`${key}, ${value}`);
              // }
              if (values.birthday) {
                setBirthdayDate(values.birthday);
              }
              // alert(JSON.stringify(values, null, 2));
              await dispatch(updateUser(formData));
              // alert('update');
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
                      <Img src={user.avatarURL} alt="avatar" />
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
                                placeholder: dayjs(user.birthday).format(
                                  'DD/MM/YYYY'
                                ),
                              },
                            }}
                            onChange={date => {
                              if (!date) {
                                setFieldValue('birthday', '');
                              }
                              const formattedBirthDate =
                                dayjs(date).format('YYYY-MM-DD');
                              // console.log(
                              //   'formattedBirthDate',
                              //   formattedBirthDate
                              // );
                              setFieldValue('birthday', formattedBirthDate);
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
                  </FormInputBox>
                </FormInputWrap>
                <FormBtnWrap>
                  <FormBtn
                    type="submit"
                    // disabled={avatarURL === null || !dirty}
                    //  disabled={!dirty ||isFormChanged|| isLoading || isSubmitting}
                    disabled={!dirty || isFormChanged}
                  >
                    {isSubmitting ? 'Updating Your profile...' : 'Save changes'}
                    {isLoading && <Spinner />}
                  </FormBtn>
                </FormBtnWrap>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Wrap>
  );
};
