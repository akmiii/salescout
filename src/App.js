import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  const handleLogin = (formData) => {
    // Your logic for handling login goes here
    console.log('Login values:', formData);
  };

  return (
      <div className={"App"}>
          <div className="companyName">
              <h1>SaleScout</h1>
          </div>
          <div className="Vector-img"></div>

          <div className="login">
              <LoginForm onLogin={handleLogin}/>
          </div>
          <div className="Elipse-img">
              <div className="img1"></div>
              <div className="img2"></div>
              <div className="img3"></div>
          </div>
      </div>
  );
}

export default App;
