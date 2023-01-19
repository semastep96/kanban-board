import * as yup from 'yup';

export const signinValidationSchema = yup.object({
  username: yup.string().required('Enter username'),
  password: yup.string().required('Enter password'),
});

export const signupValidationSchema = yup.object({
  email: yup.string().email('Enter valid email').required('Enter username'),
  username: yup.string().min(3, 'Min 3 symbols').required('Enter username'),
  password: yup.string().min(6, 'Min 6 symbols').required('Enter password'),
  passwordRepeat: yup.string().when('password', {
    is: (val: string) => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref('password')], 'Both password need to be the same'),
  }),
});