import React, { useState } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { GrClose } from 'react-icons/gr';

import { toast } from 'react-toastify';
import AppForm from './common/AppForm';
import TextInput from './common/TextInput';
import SubmitBtn from './common/SubmitBtn';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters long')
    .max(80, 'Name must be between 3 and 80 characters')
    .label('Name'),
  description: Yup.string()
    .required('Description is required')
    .min(10, 'Description must be at least 10 characters long')
    .max(250, 'Description must be between 10 and 250 characters')
    .label('Description'),
  price: Yup.number().required().label('Price'),
  duration: Yup.number().required().label('Duration'),
  id: Yup.number(),
});

const CourseForm = ({
  onSubmit, course, shown, onToggleCourseForm,
}) => {
  const [imageUpload, setImageUpload] = useState('');
  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    setImageUpload(file);
  };
  const handleSubmit = (values) => {
    if (imageUpload.size > 1048576) return toast.warning('File size must be less than or equal to 1 MB');
    onSubmit({ ...values, image: imageUpload });
    return onToggleCourseForm();
  };
  const {
    name, description, price, duration, id,
  } = course || {};
  return (
    <div
      className={
        shown
          ? 'course-form-main-container shown d-flex flex-center'
          : 'course-form-main-container d-flex flex-center'
      }
    >
      <button
        className="app-form-overylay"
        type="button"
        onClick={onToggleCourseForm}
      >
        {}
      </button>
      <div className="app-form-main-content d-flex flex-column">
        <button
          type="button"
          className="close-sidebar-btn"
          onClick={onToggleCourseForm}
        >
          <IconContext.Provider value={{ className: 'sidebar-close-icon' }}>
            <GrClose />
          </IconContext.Provider>
        </button>
        <div className="course-form-header d-flex flex-center text-center">
          <h1>{name ? 'Update course' : 'Create a couse'}</h1>
        </div>
        <AppForm
          initialValues={{
            name: name || '',
            description: description || '',
            price: price || '',
            duration: duration || '',
            id: id || '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <form className="course-form flex-unit">
            <TextInput name="name" placeholder="Course name" />
            <TextInput name="description" placeholder="Course description" />
            <TextInput type="number" name="duration" placeholder="Course duration" />
            <TextInput type="number" name="price" placeholder="Course price" />
            <TextInput
              name="image"
              type="file"
              placeholder="Course image"
              onChange={handleChangeImage}
              accept="image/*"
            />
            <div className="course-submit-btn-wrapper">
              <SubmitBtn label="Save course" />
            </div>
          </form>
        </AppForm>
      </div>
    </div>
  );
};

CourseForm.defaultProps = {
  course: {},
};

CourseForm.propTypes = {
  course: PropTypes.objectOf(PropTypes.any),
  onSubmit: PropTypes.func.isRequired,
  shown: PropTypes.bool.isRequired,
  onToggleCourseForm: PropTypes.func.isRequired,
};

export default CourseForm;
