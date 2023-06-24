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

import * as Yup from 'yup';
import { useState } from 'react';
import { useEffect } from 'react';

const regex = {
  name: /^[a-z]*$/,
  email:
    /^(?!.@.@.$)(?!.@.--...$)(?!.@.-..$)(?!.@.-$)((.*)?@[a-z0-9]{1,}.[a-z]{2,}(.[a-z]{2,})?)$/,
  phone:
    /^[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}$/,
  skype: /^\S[\S\s]{0,28}\S$/,
};
const originalDate = new Date();
export const formattedDate = originalDate.toISOString().slice(0, 10);
console.log(formattedDate);

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
      'Phone must not contain spaces and letters. At most 13 digits is required'
    )
    .min(6, 'At least 7 digits is required')
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
  const [formData, setFormData] = useState({
    name: 'User Name',
    email: 'email@mail.com',
    phone: '+38 097 111 11 11',
    skype: 'Add skype',
    birthday: 'YYYY-MM-DD',
    avatarUrl: null,
  });

  console.log(formData);
  const initialValues = {
    name: '',
    email: '',
    skype: '',
    phone: '',
    birthday: '',
    avatarUrl: '',
  };

  useEffect(() => {}, []);

  const { name, email, skype, phone } = formData;

  // const handleClick = event => {
  //   event.currentTarget.disabled = true;
  //   console.log('button clicked');
  // };

  return (
    <Wrap>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={userSchema}
          onSubmit={async values => {
            setFormData(values);
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ isSubmitting, errors, touched, values }) => {
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
                      console.log(file);
                      if (file) {
                        setFormData({
                          ...formData,
                          avatarUrl: URL.createObjectURL(file),
                        });
                        setAvatarURL(file);
                      }
                    }}
                    style={{ display: 'none' }}
                  />

                  <UserWrapInfo>
                    <UserName>User nickname</UserName>
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
                          placeholder={name}
                        />
                        {isValid('name') === 'is-valid' && (
                            <p>This is a CORRECT name</p>
                          ) && <IconDone />}
                        {isValid('name') === 'is-invalid' && <IconError />}
                        <ErrorMessage name="name" component="div" />
                      </Input>
                    </Label>

                    <Label htmlFor="birthday" className={isValid('birthday')}>
                      Birthday
                      <Input>
                        <Field
                          className={isValid('birthday')}
                          id="birthday"
                          name="birthday"
                          placeholder={formattedDate}
                        />
                        {isValid('birthday') === 'is-valid' && (
                            <p>This is a CORRECT birthday</p>
                          ) && <IconDone />}
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
                          placeholder={email}
                          type="email"
                          value={values.email}
                          title="Email must be in the format username@domain.com"
                        />
                        {isValid('email') === 'is-valid' && (
                            <p>This is a CORRECT email</p>
                          ) && <IconDone />}
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
                          placeholder={phone}
                          value={values.phone}
                        />
                        {isValid('phone') === 'is-valid' && (
                            <p>This is a CORRECT phone</p>
                          ) && <IconDone />}
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
                          placeholder={skype}
                          value={values.skype}
                        />
                        {isValid('skype') === 'is-valid' && (
                            <p>This is a CORRECT skype</p>
                          ) && <IconDone />}
                        {isValid('skype') === 'is-invalid' && <IconError />}
                        <ErrorMessage name="skype" component="div" />
                      </Input>
                    </Label>
                  </FormInputBox>
                </FormInputWrap>
                <FormBtnWrap>
                  <FormBtn type="submit" disabled={isSubmitting}>
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
