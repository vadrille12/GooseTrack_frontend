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
  IconArrowDown,
} from './UserForm.styled';

import goose from '../../images/mainPage/mobile/mobile_goose_mainPage.png';

import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { Calendar } from './Calendar/Calendar';

import 'react-datepicker/dist/react-datepicker.css';

import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { refresh, updateUser } from 'redux/auth/operations';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { DatePicker, PopperDateStyles } from './Calendar/DatePicker.styled';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

const day = dayjs(new Date()).format('YYYY-MM-DD');

const regex = {
  name: /^[a-z]*$/,
  email:
    /^(?!.@.@.$)(?!.@.--...$)(?!.@.-..$)(?!.@.-$)((.*)?@[a-z0-9]{1,}.[a-z]{2,}(.[a-z]{2,})?)$/,
  phone: /^\+380\d{9}$/,
  skype: /^\S[\S\s]{0,28}\S$/,
};

const userSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(/^\S[\S\s]{0,28}\S$/, 'Name must be between 3 and 16 characters')
    .max(16, 'At most 16 digits is required')
    .test(
      'name-validation',
      'Name must be at least 3 characters long',
      value => {
        return value && value.replace(/\s/g, '').length >= 3;
      }
    ),
  birthday: Yup.date().max(day, 'Birthday must be earlier than today'),
  email: Yup.string()
    .email('This is an ERROR email')
    .matches(/^[a-zA-Z0-9@.]+$/, 'Email must contain only Latin characters')
    .required('Email is required field'),
  phone: Yup.string()
    .required(
      'Phone is required field. Must start with +380 and be 9 digits long'
    )
    .matches(
      regex.phone,
      'The phone number must start with +380 and be 9 digits long'
    )
    .min(13, 'At least 13 digits is required')
    .max(13, 'At most 13 digits is required'),
  skype: Yup.string()
    .matches(/^\S[\S\s]{0,28}\S$/, 'Skype must be between 3 and 16 characters')
    .max(13, 'At most 13 digits is required')
    .test(
      'Skype-validation',
      'Skype must be at least 3 characters long',
      value => {
        return value && value.replace(/\s/g, '').length >= 3;
      }
    ),
});

export const UserForm = () => {
  const [avatarURL, setAvatarURL] = useState(null);
  const [birthdayDate, setBirthdayDate] = useState(null);
  // const [isUpdateForm, setIsUpdateForm] = useState(null);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
  
    const getUserInfo = async () => {
      await dispatch(refresh());
      //  setIsUpdateForm(null);
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
            birthday: birthdayDate || day,

            // birthdayDate
            // ? birthdayDate
            // : user
            // ? dayjs(user.birthday).format('YYYY-MM-DD')
            // : new Date(),
            // avatarURL: avatarURL || user?.avatarURL || '',
          }}
          onSubmit={async values => {
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('email', values.email);
            formData.append('birthday', values.birthday);
            formData.append('phone', values.phone);
            formData.append('skype', values.skype);
            // console.log("('skype')", formData.get('skype'));
            if (avatarURL) {
              formData.append('avatar', avatarURL);
            }
            for (const [key, value] of formData.entries()) {
              console.log(`${key}, ${value}`);
            }

            alert(JSON.stringify(values, null, 2));
            await dispatch(updateUser(formData));
            // setIsUpdateForm(true);
          }}
        >
          {({ dirty, errors, touched, values }) => {
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
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Input>
                          <DemoContainer
                            components={['DatePicker']}
                            sx={{ padding: '8px 0px 0px 0px' }}
                          >
                            <DatePicker
                              className={isValid('birthday')}
                              id="birthday"
                              name="birthday"
                              disableFuture={true}
                              onChange={e =>
                                setBirthdayDate(e.format('DD/MM/YYYY'))
                              }
                              format="DD/MM/YYYY"
                              // views={['year', 'month', 'day']}
                              textField={dayjs(user.birthday).format(
                                'DD/MM/YYYY'
                              )}
                              slots={{
                                openPickerIcon: KeyboardArrowDownIcon,
                              }}
                              slotProps={{
                                popper: {
                                  sx: PopperDateStyles,
                                },
                                textField: {
                                  placeholder:
                                    dayjs(user.birthday).format('DD/MM/YYYY') ||
                                    birthdayDate ||
                                    `${day}`,
                                },
                              }}
                            />
                            {isValid('name') === 'is-valid' && <IconDone />}
                            {isValid('birthday') === 'is-invalid' && (
                              <IconError />
                            )}
                            <ErrorMessage name="birthday" component="div" />
                          </DemoContainer>
                        </Input>
                      </LocalizationProvider>
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
                  <FormBtn type="submit" disabled={!dirty}>
                    Save changes
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
