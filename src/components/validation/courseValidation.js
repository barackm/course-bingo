const validationSchema = (values) => {
  const errors = {};
  const {
    name, description, price, duration,
  } = values;
  if (!name) {
    errors.name = 'Please enter a name';
  }
  if (name.trim().length < 3) {
    errors.name = 'Name must be at least 3 characters';
  }

  if (description.trim().length < 10) {
    errors.description = 'Description must be at least 10 characters';
  }

  if (!description) {
    errors.description = 'Please enter a description';
  }
  if (!price) {
    errors.price = 'Please enter a price';
  }
  if (!duration) {
    errors.duration = 'Please enter a duration';
  }

  return errors;
};
export default validationSchema;
