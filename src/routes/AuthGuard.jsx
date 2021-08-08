import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import storage from '../utils/localStorage';

const AuthGuard = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    const token = storage.getAuthToken();
    if (!!token && pathname !== '/signup') {
      console.log('redirecting...');
      return <Redirect to="/login" />;
    }
    return {};
  }, []);

  return <>{children}</>;
};

AuthGuard.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default AuthGuard;
