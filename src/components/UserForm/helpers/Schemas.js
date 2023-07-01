import * as Yup from 'yup';
import dayjs from 'dayjs';
const day = dayjs(new Date()).format('DD/MM/YYYY');

const regex = {
  name: /^[a-z]*$/,
  email:
    /^(?!.@.@.$)(?!.@.--...$)(?!.@.-..$)(?!.@.-$)((.*)?@[a-z0-9]{1,}.[a-z]{2,}(.[a-z]{2,})?)$/,
  phone: /^\+380\d{9}$/,
  skype: /^\S[\S\s]{0,28}\S$/,
};

export const userSchema = Yup.object().shape({
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
  birthday: Yup.date().max(new Date(), 'Birthday must be earlier than today'),
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
