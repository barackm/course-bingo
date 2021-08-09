import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadCoursesAsync } from '../store/thunks/coursesThunk';

const Dashboard = (props) => {
  const {
    courses, loadCourses, history, currentUser,
  } = props;

  useEffect(() => {
    if (!currentUser) return history.replace('/login');
    return loadCourses();
  }, []);
  console.log(courses);
  return <div>dashboard</div>;
};

Dashboard.defaultProps = {
  currentUser: null,
};

Dashboard.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  courses: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentUser: PropTypes.objectOf(PropTypes.any),
  loadCourses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  courses: state.courses.list,
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = {
  loadCourses: () => loadCoursesAsync(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
