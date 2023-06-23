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
  InputWrap,
  Img,
  AddIcon,
} from './UserForm.styled';

import goose from '../../images/mainPage/mobile/mobile_goose_mainPage.png';

import * as Yup from 'yup';
import { useState } from 'react';
import { useEffect } from 'react';

const UserFormikSchema = Yup.object().shape({
  name: Yup.string()
    .min(10, 'Too Short!')
    .max(16, 'Too Long, max => 16!')
    .required('Required'),
  phone: Yup.string().max(18, 'Phone must be at most 18 characters'),
  email: Yup.string().email('Invalid email').required('Required'),
  skype: Yup.string().max(16, 'Skype must be at most 20 characters'),
});

export const UserForm = () => {
  const [avatarURL, setAvatarURL] = useState(null);
  const [formData, setFormData] = useState({
    name: 'User Name, max 16',
    email: 'email@mail.com',
    phone: '+38 097 111 11 11',
    skype: 'Add a skype number, max 16',
    birthday: 'YYYY-MM-DD',
    avatarUrl: null,
  });


  const initialValues = {
    name: '',
    email: '',
    skype: '',
    phone: '',
    birthday: '',
    avatarUrl: '',
  };

  useEffect(() => {}, []);

  const { name, email, skype, phone, birthday} = formData;

  const handleClick = event => {
    event.currentTarget.disabled = true;
    console.log('button clicked');
  };

  return (
    <Wrap>
     
        <Formik
          initialValues={initialValues}
          validate={UserFormikSchema}
          onSubmit={async values => {
            setFormData(values);
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <AvatarWrap>
                {!avatarURL ? (
                  <AvatarBox>
                    <Img
                      src={goose}
                      alt="Goose welcome you"
                      title="Goose welcome you"
                    />
                    <label htmlFor="avatar">
                      <AvatarSvg>
                        <AddIcon />
                      </AvatarSvg>
                    </label>
                  </AvatarBox>
                ) : (
                  <label htmlFor="avatar">
                    <Img src={URL.createObjectURL(avatarURL)} alt="avatar" />
                  </label>
                )}

                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/*,.png,.jpg,.gif,.web"
                  onChange={e => {
                    const file = e.target.files[0];
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
                  <Label htmlFor="name">User Name</Label>
                  <InputWrap>
                    <Input id="name" name="name" placeholder={name} />
                  </InputWrap>

                  <Label htmlFor="birthday">Birthday</Label>
                  <InputWrap>
                    <Input
                      id="birthday"
                      name="birthday"
                      placeholder={birthday}
                    />
                  </InputWrap>
                  <Label htmlFor="email">Email</Label>
                  <InputWrap>
                    <Input
                      id="email"
                      name="email"
                      placeholder={email}
                      type="email"
                      iserror={errors.email && touched.email}
                    />
                  </InputWrap>
                </FormInputBox>
                <FormInputBox>
                  <Label htmlFor="phone">Phone</Label>
                  <InputWrap>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder={phone}
                    />
                  </InputWrap>
                  <Label htmlFor="skype">Skype</Label>
                  <InputWrap>
                    <Input
                      disabled={true}
                      id="skype"
                      name="skype"
                      placeholder={skype}
                      value={skype}
                    />
                  </InputWrap>
                </FormInputBox>
              </FormInputWrap>

              <FormBtnWrap>
                <FormBtn
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleClick}
                >
                  Save changes
                </FormBtn>
              </FormBtnWrap>
            </Form>
          )}
        </Formik>
   
    </Wrap>
  );
};
