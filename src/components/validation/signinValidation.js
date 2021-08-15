const validationSchema = (values) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const errors = {};
  const { email, password } = values;
  if (email.trim() === '') {
    errors.email = 'Email is required';
  }
  if (password.trim() === '') {
    errors.password = 'Password is required';
  }

  if (!emailRegex.test(email)) {
    errors.email = 'Enter valid email';
  }

  return errors;
};
export default validationSchema;
