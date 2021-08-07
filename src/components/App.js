import { Switch, Route } from 'react-router-dom';
import Login from './auth/Login';
import SignUp from './auth/SignUp';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
