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
  email: Yup.string()
    .email('Enter valid email')
    .required('Email is required')
    .label('Email'),
  password: Yup.string()
    .min(6)
    .label('Password'),
  passwordConfirmation: Yup.string()
    .min(6)
    .label('Password confirmation'),
  firstName: Yup.string().min(3).max(250).required('Firstname is required'),
  lastName: Yup.string().min(3).max(250).required('Lastname is required'),
});

const EditProfile = ({
  onSubmit, user, shown, onToggleEditProfile,
}) => {
  const [imageUpload, setImageUpload] = useState('');
  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    setImageUpload(file);
  };
  const handleSubmit = (values) => {
    if (imageUpload.size > 1048576) return toast.warning('File size must be less than or equal to 1 MB');
    onSubmit({ ...values, image: imageUpload });
    return onToggleEditProfile();
  };
  const {
    first_name: firstName,
    last_name: lastName,
    email,
  } = user;
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
        onClick={onToggleEditProfile}
      >
        {}
      </button>
      <div className="app-form-main-content d-flex flex-column">
        <button
          type="button"
          className="close-sidebar-btn"
          onClick={onToggleEditProfile}
        >
          <IconContext.Provider value={{ className: 'sidebar-close-icon' }}>
            <GrClose />
          </IconContext.Provider>
        </button>
        <div className="course-form-header d-flex flex-center text-center">
          <h1>Edit Profile</h1>
        </div>
        <AppForm
          initialValues={{
            firstName,
            lastName,
            email,
            password: '',
            passwordConfirmation: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <form className="course-form flex-unit">
            <TextInput name="firstName" placeholder="Firstname" />
            <TextInput name="lastName" placeholder="Lastname" />
            <TextInput name="email" placeholder="Email" />
            <TextInput name="password" placeholder="password" />
            <TextInput
              name="passwordConfirmation"
              placeholder="Confirm password"
            />
            <span>
              Update profile picture
            </span>
            <TextInput
              name="avatar"
              type="file"
              placeholder="Avatar"
              onChange={handleChangeImage}
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

EditProfile.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  onSubmit: PropTypes.func.isRequired,
  shown: PropTypes.bool.isRequired,
  onToggleEditProfile: PropTypes.func.isRequired,
};

export default EditProfile;
