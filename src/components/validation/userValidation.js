const validationSchema = (values) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const errors = {};
  const {
    email, password, firstname, lastname, passwordConfirmation,
  } = values;
  if (email.trim() === '') {
    errors.email = 'Email is required';
  }
  if (password.trim() === '') {
    errors.password = 'Password is required';
  }
  if (passwordConfirmation.trim() === '') {
    errors.passwordConfirmation = 'Password confirmation is required';
  }

  if (firstname.trim() === '') {
    errors.firstname = 'Firstname is required';
  }

  if (lastname.trim() === '') {
    errors.lastname = 'Lastname is required';
  }

  if (password.trim() !== passwordConfirmation.trim()) {
    errors.passwordConfirmation = 'Passwords must match';
  }
  if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (!emailRegex.test(email)) {
    errors.email = 'Enter valid email';
  }

  if (firstname.length < 3) {
    errors.password = 'Firstname must be at least 3 characters';
  }

  if (lastname.length < 3) {
    errors.password = 'Lastname must be at least 3 characters';
  }
  return errors;
};
export default validationSchema;
