function Header() {
    return (
      <header style={{ 
        backgroundColor: "#FF0000", // Warna merah Telkom
        color: "white", 
        padding: "10px" 
      }}>
        <h1>TelRoom</h1>
        <nav>
          <ul style={{ 
            listStyle: "none", 
            display: "flex", 
            justifyContent: "center", 
            gap: "20px" 
          }}>
            <li>Home</li>
            <li>Reservasi</li>
            <li>Jadwal</li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  