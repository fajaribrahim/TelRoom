import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin();
      navigate('/home');
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
      backgroundRepeat: "no-repeat",
    }}>
      <div style={{
        textAlign: "center",
        color: "#FF0000",
        fontWeight: "bold",
        position: "absolute",
        top: "10%",
      }}>
        <h1 style={{
          fontSize: "2.5rem",
          margin: 0,
        }}>TelRoom</h1>
        <p style={{
          fontSize: "1.2rem",
          marginTop: "0.5rem",
        }}>Hello! Welcome to TelRoom</p>
      </div>

      <div style={{
        width: "100%",
        maxWidth: "400px",
        backgroundColor: "#FF0000",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        color: "white",
      }}>
        <form onSubmit={handleSubmit}>
          <h2 style={{
            textAlign: "center",
            marginBottom: "1.5rem",
          }}>
            SSO LOGIN
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
                backgroundColor: "white",
                color: "black",
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
                marginBottom: "1rem",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "1rem",
                backgroundColor: "white",
                color: "black",
              }}
            />
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}>
            <input
              type="checkbox"
              id="rememberMe"
              style={{ marginRight: "0.5rem" }}
            />
            <label htmlFor="rememberMe" style={{
              fontSize: "0.9rem",
              color: "white",
            }}>
              Remember Me
            </label>
          </div>
          <button type="submit" style={{
            backgroundColor: "white",
            color: "#FF0000",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
            fontSize: "1rem",
            fontWeight: "bold",
          }}>
            Log In &#10142;
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;