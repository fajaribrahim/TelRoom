import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(); // Panggil fungsi untuk login
    } else {
      alert('Username dan password harus diisi!');
    }
  };

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh", 
      backgroundImage: "url('/background.jpg')", 
      backgroundSize: "cover", 
      backgroundPosition: "center" 
    }}>
      <div style={{ 
        backgroundColor: "white", 
        padding: "2rem", 
        borderRadius: "10px", 
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" 
      }}>
        <form onSubmit={handleSubmit}>
          <h2 style={{ textAlign: "center", color: "#FF0000" }}>Login</h2>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ 
                width: "100%", 
                padding: "10px", 
                margin: "10px 0", 
                border: "1px solid #ddd", 
                borderRadius: "5px" 
              }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ 
                width: "100%", 
                padding: "10px", 
                margin: "10px 0", 
                border: "1px solid #ddd", 
                borderRadius: "5px" 
              }}
            />
          </div>
          <button type="submit" style={{ 
            backgroundColor: "#FF0000", 
            color: "white", 
            padding: "10px 20px", 
            border: "none", 
            borderRadius: "5px", 
            cursor: "pointer", 
            width: "100%" 
          }}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;