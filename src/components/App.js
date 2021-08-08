import { Switch, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Home from '../containers/Home';
import Login from './auth/Login';
import Sidebar from './Sidebar';
import SignUp from './auth/SignUp';

import 'react-toastify/dist/ReactToastify.css';
import Logout from './auth/Logout';
import CourseDetails from './CourseDetails';

function App({ isAuthenticated }) {
  return (
    <div className="App">
      <ToastContainer />
      {isAuthenticated && <Sidebar />}
      <Switch>
        <Route path="/courses/:id" component={CourseDetails} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/logout" component={Logout} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
