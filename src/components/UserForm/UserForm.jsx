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
} from './UserForm.styled';



export const UserForm = () => {
  return (
    <Wrap>
      <AvatarWrap>
        <div>
          <AvatarBox>
            <label htmlFor="avatar">
              <AvatarSvg>+</AvatarSvg>
            </label>
          </AvatarBox>
          <input
            type="file"
            id="avatar"
            name="avatar"
            //   onChange={}
            style={{ display: 'none' }}
          />
          <UserWrapInfo>
            <UserName>User nickname</UserName>
            <User>User</User>
          </UserWrapInfo>
        </div>
      </AvatarWrap>
      <div>
        <Formik
          initialValues={{
            userName: '',
            birthday: '',
            email: '',
            phone: '',
            skype: '',
          }}
          onSubmit={async values => {
            await new Promise(r => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <FormInputWrap>
                <div style={{ width: '354px' }}>
                 
                    <Label htmlFor="firstName">User Name</Label>
                    <div style={{ position: 'relative' }}>
                      <Input
                        id="userName"
                        name="userName"
                        placeholder="Text Your Name"
                      />
                    
                  </div>

                  <Label htmlFor="birthday">Birthday</Label>
                  <div style={{ position: 'relative' }}>
                    <Input
                      id="birthday"
                      name="birthday"
                      placeholder="Text Your Birthday"
                    />
                  </div>
                  <Label htmlFor="email">Email</Label>
                  <div style={{ position: 'relative' }}>
                    <Input
                      id="email"
                      name="email"
                      placeholder="example: jane@acme.com"
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <div style={{ position: 'relative' }}>
                    <Input id="phone" name="phone" placeholder="7732897309" />
                  </div>
                  <Label htmlFor="skype">Skype</Label>
                  <div style={{ position: 'relative' }}>
                    <Input
                      id="skype"
                      name="skype"
                      placeholder="Do You have Skype?"
                    />
                  </div>
                </div>
              </FormInputWrap>
              <FormBtnWrap>
                <FormBtn type="submit">Save changes</FormBtn>
              </FormBtnWrap>
            </Form>
          )}
        </Formik>
      </div>
    </Wrap>
  );
};
