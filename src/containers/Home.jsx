import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const Home = (props) => {
  const { history, currentUser } = props;
  useEffect(() => (currentUser ? '' : history.replace('/login')));

  return <h1>hello from the home page</h1>;
};

Home.defaultProps = {
  currentUser: null,
};

Home.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  currentUser: PropTypes.objectOf(PropTypes.any),
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(Home);
