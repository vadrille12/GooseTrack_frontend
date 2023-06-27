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
import { useState } from 'react';
import { Calendar } from './Calendar/Calendar';

import { useEffect } from 'react';
// import { useSelector } from 'react-redux';

const regex = {
  name: /^[a-z]*$/,
  email:
    /^(?!.@.@.$)(?!.@.--...$)(?!.@.-..$)(?!.@.-$)((.*)?@[a-z0-9]{1,}.[a-z]{2,}(.[a-z]{2,})?)$/,
  phone: /^\+380\d{9}$/,
  skype: /^\S[\S\s]{0,28}\S$/,
};

const originalDate = new Date();
export const formattedDate = originalDate.toISOString().slice(0, 10);
// console.log('formattedDate', formattedDate);

const userSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(/^\S[\S\s]{0,28}\S$/, 'Name must be between 2 and 16 characters')
    .max(16, 'At most 16 digits is required')
    .test(
      'name-validation',
      'Name must be at least 2 characters long',
      value => {
        return value && value.replace(/\s/g, '').length >= 2;
      }
    ),
  birthday: Yup.date().max(originalDate, 'Birthday must be earlier than today'),
  email: Yup.string()
    .email('This is an ERROR email')
    .matches(/^[a-zA-Z0-9@.]+$/, 'Email must contain only Latin characters')
    .required('Email is required'),
  phone: Yup.string()
    .required('phone is required')
    .matches(
      regex.phone,
      'The phone number must start with +38 and be 10 digits long'
    )
    .min(13, 'At least 12 digits is required')
    .max(13, 'At most 13 digits is required'),
  skype: Yup.string()
    .matches(/^\S[\S\s]{0,28}\S$/, 'Skype must be between 2 and 16 characters')
    .max(13, 'At most 13 digits is required')
    .test(
      'Skype-validation',
      'Skype must be at least 2 characters long',
      value => {
        return value && value.replace(/\s/g, '').length >= 2;
      }
    ),
});

export const UserForm = () => {
  const [avatarURL, setAvatarURL] = useState(null);
  const [birthdayDate, setBirthdayDate] = useState(null);

  // const { user } = useSelector(selectUser);


  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skype: '',
    birthday: new Date(),
    avatarUrl: '',
  });

  console.log(formData)

  useEffect(() => {
    const saveFormData = localStorage.getItem('formDataUserAccountPage');
    if (saveFormData) {
      setFormData(JSON.parse(saveFormData));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('formDataUserAccountPage', JSON.stringify(formData));
  }, [formData]);


  return (
    <Wrap>
      <div>
        <Formik
          enableReinitialize={true}
          initialValues={{
            name: formData.name || '',
            email: formData.email || '',
            phone: formData.phone || '',
            skype: formData.skype || '',
            birthday:
              birthdayDate || formData.birthday
                ? new Date(birthdayDate || formData.birthday)
                : '',
            avatarUrl: formData.avatarUrl || '',
          }}
          validationSchema={userSchema}
          onSubmit={async values => {
            console.log('values', values);
            const formData = new FormData();
            console.log('new FormData()', formData);
            formData.append('email', values.email);
            formData.append('birthday', values.birthday);
            formData.append('phone', values.phone);

            formData.append('skype', values.skype);
            formData.append('avatarUrl', values.avatar);
            setFormData(values);
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            dirty,
            isSubmitting,
            errors,
            touched,
            values,
            setFieldValue,
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
                    {!avatarURL ? (
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
                    ) : (
                      <Label htmlFor="avatar">
                        <Img
                          src={URL.createObjectURL(avatarURL)}
                          alt="avatar"
                        />
                      </Label>
                    )}
                  </AvatarBox>

                  <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept="image/*,.png,.jpg,.gif,.web"
                    onChange={e => {
                      const file = e.target.files[0];
                      setFieldValue('avatarUrl', file);
                      setAvatarURL(file);
                      setFieldValue('avatarUrl', URL.createObjectURL(file));
                    }}
                    style={{ display: 'none' }}
                  />

                  <UserWrapInfo>
                    <UserName>{formData.name || 'User NickName'}</UserName>
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
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                        />
                        {isValid('name') === 'is-valid' && 
                            <IconDone />}
                        {isValid('name') === 'is-invalid' && <IconError />}
                        <ErrorMessage name="name" component="div" />
                      </Input>
                    </Label>

                    <Label htmlFor="birthday" className={isValid('birthday')}>
                      Birthday
                      <Input>
                        <Calendar
                          className={isValid('birthday')}
                          id="birthday"
                          name="birthday"
                          type="date"
                          selected={new Date(values.birthday)}
                          onChange={e => {
                            setFieldValue('birthday', e);
                            setBirthdayDate();
                          }}
                          placeholder={'Birthday Date'}
                          value={values.birthday}
                        />
                        {isValid('birthday') === 'is-valid'
                          ?  <IconDone />
                          : <IconArrowDown /> 
                            }

                        {isValid('birthday') === 'is-invalid' && <IconError />}
                        <ErrorMessage name="birthday" component="div" />
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
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {isValid('email') === 'is-valid' &&  <IconDone />}
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
                        {isValid('phone') === 'is-valid' &&  <IconDone />}
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
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {isValid('skype') === 'is-valid' &&   <IconDone />}
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
