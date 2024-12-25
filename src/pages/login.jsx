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
      width: "100vw",
      margin: 0,
      backgroundImage: "url('/background.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "400px",
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
      }}>
        <form onSubmit={handleSubmit}>
          <h2 style={{
            textAlign: "center",
            color: "#FF0000",
            marginBottom: "1.5rem"
          }}>
            Login
          </h2>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "1rem",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "1rem",
                backgroundColor: "white", // Background putih
                color: "black", // Teks hitam
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
                marginBottom: "1.5rem",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "1rem",
                backgroundColor: "white", // Background putih
                color: "black", // Teks hitam
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
            width: "100%",
            fontSize: "1rem",
            fontWeight: "bold"
          }}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
