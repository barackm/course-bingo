import { Switch, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import Home from '../containers/Home';
import Login from './auth/Login';
import Sidebar from './Sidebar';
import SignUp from './auth/SignUp';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Sidebar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
