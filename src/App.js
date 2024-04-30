import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes, Route as ReactRoute } from 'react-router-dom';

import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';

function App() {
    return (
        <div className="App">
            <div className="companyName">
                <h1>SaleScout</h1>
            </div>

            <Router>
                <Routes>
                    <Route path="/RegistrationForm" element={<RegistrationForm />} />
                    <Route path="/" element={<LoginForm />} />
                </Routes>
            </Router>
            <div className="Images">
                <div className="Vector-img"></div>
                <div className="Elipse-img">
                    <div className="img1"></div>
                    <div className="img2"></div>
                    <div className="img3"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
