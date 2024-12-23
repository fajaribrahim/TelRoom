import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      padding: "2rem", 
      backgroundColor: "#f9f9f9", 
      minHeight: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center" 
    }}>
      <div style={{ 
        backgroundColor: "white", 
        padding: "2rem", 
        borderRadius: "10px", 
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
        textAlign: "center"
      }}>
        <h1>Dashboard</h1>
        <Link to="/home">
          <button style={{ 
            backgroundColor: "#FF0000", 
            color: "white", 
            padding: "10px 20px", 
            border: "none", 
            borderRadius: "5px", 
            cursor: "pointer", 
            marginTop: "20px"
          }}>
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
