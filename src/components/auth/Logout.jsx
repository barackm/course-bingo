import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logoutUser } from '../../store/thunks/authThunk';

const Logout = ({ logoutUser, history }) => {
  useEffect(() => {
    logoutUser();
    return history.replace('/login');
  }, []);
  return null;
};

Logout.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProps = {
  logoutUser: () => logoutUser(),
};
export default connect(null, mapDispatchToProps)(Logout);
