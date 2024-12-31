import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/Home';
import Reservasi from './pages/Reservasi';
import History from './pages/History';
import DeskripsiRuangan from './pages/DeskripsiRuangan'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/reservasi" element={<Reservasi />} />
            <Route path="/history" element={<History />} />
            <Route path="/deskripsi-ruangan" element={<DeskripsiRuangan />} /> {/* Tambahkan rute Deskripsi Ruangan */}
          </>
        ) : (
          <>
            <Route path="/" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
