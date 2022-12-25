import * as Yup from 'yup';

export const formValidator = Yup.object({
  name: Yup.string().required('Enter your Name'),
  email: Yup.string().email().required('Enter valid Email address'),
  phone: Yup.string().length(10).required('Enter valid Phone Number'),
  description: Yup.string().required('Enter your Message'),
  services: Yup.array().of(Yup.string())

})