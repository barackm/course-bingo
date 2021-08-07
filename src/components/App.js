import AuthTextInput from './common/AuthTextInput';

function App() {
  return (
    <div className="App">
      <AuthTextInput
        onChange={() => {}}
        placeholder="Email"
        value="hello there"
        name="email"
      />
      <AuthTextInput
        placeholder="Password"
        value="hello there"
        type="password"
        name="password"
        onChange={() => {}}
      />
    </div>
  );
}

export default App;
