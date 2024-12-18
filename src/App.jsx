import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2 className="main-title">TelRoom - Peminjaman Ruangan</h2>
        <p className="intro-text">Selamat datang di aplikasi TelRoom!</p>
        <p className="intro-text">Klik menu di atas untuk memulai peminjaman ruangan.</p>
      </div>
    </div>
  );
}

export default App;
