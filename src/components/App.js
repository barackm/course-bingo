import { Switch, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../containers/Home';

import Login from './auth/Login';
import SignUp from './auth/SignUp';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
