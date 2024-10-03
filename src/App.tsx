import React, { useState } from 'react';
import './App.css';
import { randomInt } from 'crypto';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage("The special character '*' is not allowed")
  };

  const handlePassword = (val: String) => {
    var newString = ""
    for(var i = 0; i < val.length-1; i++){
      newString += "*"
    }
    newString += val[val.length-1]
    setPassword(newString)
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <h1>Welcome, {name}! You have successfully logged in.</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => handlePassword(e.target.value)}
              required
            />
          </div>
          {errorMessage == "" ? "" : <div>{errorMessage}</div>}
          <button type="submit">Enter</button>
        </form>
      )}
    </div>
  );
};

export default App;
