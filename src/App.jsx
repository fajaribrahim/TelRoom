import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {!isLoggedIn ? (
          <Route path="/" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        ) : (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
