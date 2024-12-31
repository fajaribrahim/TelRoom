import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{ backgroundColor: "#f44336", padding: "20px", height: "100vh" }}>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li><Link to="/home" style={{ color: "white", textDecoration: "none" }}>Room Reservation</Link></li>
        <li><Link to="/history" style={{ color: "white", textDecoration: "none" }}>History</Link></li>
        <li><Link to="/deskripsi-ruangan" style={{ color: "white", textDecoration: "none" }}>Deskripsi Ruangan</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
