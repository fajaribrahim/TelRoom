import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Home() {
  const allRooms = {
    DC: [
      { id: 1, name: "Lab Data (DC 103)" },
      { id: 2, name: "DC 103" },
      { id: 3, name: "DC 201" },
      { id: 4, name: "DC 202" },
      { id: 5, name: "DC 301" },
      { id: 6, name: "DC 302" },
      { id: 7, name: "Lab Jaringan Komputer (DC305)" },
      { id: 8, name: "Lab Jaringan Komputer (DC306)" },
    ],
    TT: [
      { id: 1, name: "Lab RPP (TT 101)" },
      { id: 2, name: "TT 102" },
      { id: 3, name: "TT 103" },
      { id: 4, name: "TT 104" },
      { id: 5, name: "TT 105" },
      { id: 6, name: "Lab Kendali (TT 106)" },
      { id: 7, name: "Lab Teknik Elektro (TT 301)" },
      { id: 8, name: "Lab Teknik Digital (TT 302)" },
      { id: 9, name: "Lab PSD (TT 303)" },
      { id: 10, name: "Lab Teknik Switching (TT 304)" },
      { id: 11, name: "Lab Transmisi (TT 305)" },
      { id: 12, name: "Lab Riset (TT 306)" },
    ],
    Rektorat: [
      { id: 1, name: "Rek 201" },
      { id: 2, name: "Rek 202" },
      { id: 3, name: "Rek 203" },
      { id: 4, name: "Rek 204" },
      { id: 5, name: "Rek 205" },
      { id: 6, name: "Lab E-Learning" },
      { id: 7, name: "Rek 207" },
      { id: 8, name: "Rek 301" },
      { id: 9, name: "Rek 302" },
      { id: 10, name: "Rek 303" },
      { id: 11, name: "Rek 304" },
      { id: 12, name: "Rek 305" },
      { id: 13, name: "Rek 306" },
      { id: 14, name: "Rek 307" },
      { id: 15, name: "Aula Rachmat Effendi" },
    ],
    DSP: [
      { id: 1, name: "Lab Basic Science (DSP lt 1)" },
      { id: 2, name: "Lab Mikrobiologi (DSP lt 1)" },
      { id: 3, name: "Galeri (DSP lt 2)" },
      { id: 4, name: "DSP 301" },
      { id: 5, name: "DSP 302" },
      { id: 6, name: "DSP 303" },
      { id: 7, name: "DSP 304" },
      { id: 8, name: "DSP 305" },
      { id: 9, name: "DSP 306" },
      { id: 10, name: "DSP 307" },
      { id: 11, name: "DSP 308" },
      { id: 12, name: "DSP 401" },
      { id: 13, name: "DSP 402" },
      { id: 14, name: "DSP 403" },
      { id: 15, name: "DSP 404" },
      { id: 16, name: "DSP 405" },
      { id: 17, name: "Lab Komputer Grafis (DSP 406)" },
      { id: 18, name: "Lab Komputer Grafis (DSP 407)" },
      { id: 19, name: "Lab Simulasi Logistik (DSP 408)" },
    ],
    IoT: [
      { id: 1, name: "IoT 101" },
      { id: 2, name: "IoT 102" },
      { id: 3, name: "IoT 103" },
      { id: 4, name: "IoT 104" },
      { id: 5, name: "IoT 105" },
      { id: 6, name: "IoT 201" },
      { id: 7, name: "IoT 202" },
      { id: 8, name: "Lab Aplikasi (IoT 301" },
      { id: 9, name: "Lab Multimedia (IoT 302" },
      { id: 10, name: "Lab Fisika (IoT 304" },
      { id: 11, name: "Lab Audio Visual (IoT 306" },
      
    ],
    Perpustakaan: [
      { id: 1, name: "Laktasi" },
      { id: 2, name: "Dikusi" },
      { id: 3, name: "Audio Visual" },
    ],
  };

  const hours = [
    "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"
  ];

  const [date, setDate] = useState("");
  const [selectedBuilding, setSelectedBuilding] = useState("DC");
  const [reservations, setReservations] = useState([
    { room: "DC 301", time: "08:00", status: "Approved" },
    { room: "DC 202", time: "09:00", status: "Request" },
  ]);

  const rooms = allRooms[selectedBuilding] || [];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: "1rem", backgroundColor: "#f9f9f9", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Main Container */}
      <div style={{ display: "flex", flexGrow: 1 }}>
        {/* Left Menu */}
        <div style={{
          width: "12%", backgroundColor: "#FF0000", color: "white", padding: "1rem", borderRadius: "8px", display: "flex", flexDirection: "column", justifyContent: "flex-start"
        }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "2.28rem", marginTop: "0.9rem" }}>
            <img src="/Booking.png" alt="Logo" style={{ width: "40px", height: "auto", marginRight: "0.5rem" }} />
            <h2 style={{ fontSize: "1.5rem" }}>ROOM</h2>
          </div>
          <button style={{
            backgroundColor: "white", color: "#FF0000", padding: "5px 20px", border: "none", borderRadius: "5px", cursor: "pointer", marginBottom: "10px", fontSize: "0.7rem"
          }}>
            Room Reservation
          </button>
          <button style={{
            backgroundColor: "white", color: "#FF0000", padding: "5px 20px", border: "none", borderRadius: "5px", cursor: "pointer", marginBottom: "10px", fontSize: "0.7rem"
          }}>
            History
          </button>
          <button style={{
            backgroundColor: "white", color: "#FF0000", padding: "5px 20px", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "0.7rem"
          }}>
            Deskripsi Ruangan
          </button>
        </div>

        {/* Right Content */}
        <div style={{
          width: "88%", padding: "1.5rem", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
        }}>
          {/* Header */}
          <header style={{
            backgroundColor: "white", color: "#FF0000", padding: "0.5rem 2rem", textAlign: "left", borderRadius: "5px", marginBottom: "0.9rem", fontWeight: "bold", fontSize: "0.6rem"
          }}>
            <h1>Room Reservation</h1>
          </header>

          {/* Form Fields */}
          <div style={{ marginBottom: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Link to="/reservasi" style={{
                backgroundColor: "#FF0000", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "0.8rem", textDecoration: "none"
              }}>
                + Reservasi
              </Link>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                {/* Lokasi */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <label style={{ color: "black", fontWeight: "bold", fontSize: "0.8rem" }}>Lokasi</label>
                  <select
                    value={selectedBuilding}
                    onChange={(e) => setSelectedBuilding(e.target.value)}
                    style={{
                      backgroundColor: "#FF0000",
                      color: "white",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "20px",
                      cursor: "pointer",
                      fontSize: "0.8rem",
                    }}
                  >
                    <option value="DC">Gedung DC</option>
                    <option value="TT">Gedung TT</option>
                    <option value="Rektorat">Gedung Rektorat</option>
                    <option value="DSP">Gedung DSP</option>
                    <option value="IoT">Gedung IoT</option>
                    <option value="Perpustakaan">Perpustakaan</option>
                  </select>
                </div>

                {/* Tanggal */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <label style={{ color: "black", fontWeight: "bold", fontSize: "0.8rem" }}>Tanggal</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={{
                      backgroundColor: "#FF0000",
                      color: "white",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "20px",
                      cursor: "pointer",
                      fontSize: "0.8rem",
                    }}
                  />
                </div>
              </div>
              <button style={{
                backgroundColor: "#FF0000", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "0.8rem"
              }}>
                Search
              </button>
            </div>
          </div>

          {/* Tabel Jadwal */}
          <div style={{ marginTop: "1rem", overflowX: "auto" }}>
            <table style={{
              width: "100%", borderCollapse: "collapse", textAlign: "center", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
            }}>
              <thead>
                <tr>
                  <th style={{ padding: "1px", backgroundColor: "#FF0000", color: "black", fontSize: "0.65rem" }}>Ruang / Jam</th>
                  {hours.map((hour) => (
                    <th key={hour} style={{
                      padding: "10px", backgroundColor: "#FF0000", color: "black", fontSize: "0.65rem"
                    }}>{hour}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rooms.map((room) => (
                  <tr key={room.id}>
                    <td style={{ padding: "10px", backgroundColor: "#f1f1f1", color: "black", fontSize: "0.65rem" }}>{room.name}</td>
                    {hours.map((hour) => {
                      const reservation = reservations.find((res) => res.room === room.name && res.time === hour);
                      return (
                        <td key={hour} style={{
                          padding: "10px", backgroundColor: reservation ? (reservation.status === "Approved" ? "green" : "orange") : "#f9f9f9", color: reservation ? "white" : "black", fontSize: "0.65rem", borderRadius: reservation ? "5px" : "0"
                        }}>
                          {reservation ? reservation.status : ""}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Ketentuan Peminjaman */}
          <div style={{ marginTop: "0.7rem", padding: "1rem", backgroundColor: "#FFEEEE", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <h3 style={{ color: "#FF0000", fontSize: "0.99rem", marginBottom: "1rem" }}>Ketentuan Peminjaman Ruangan:</h3>
            <ul style={{ color: "black", fontSize: "0.8em", lineHeight: "1.5rem" }}>
              <li>Peminjam hanya dapat me-request peminjaman maksimal sebanyak 3x hingga admin melakukan approval/reject.</li>
              <li>Ketika admin sudah memberikan approval, peminjam dapat datang ke bagian Logistik Kampus untuk mengambil kunci pada jam yang telah dipilih.</li>
              <li>Untuk peminjaman ruangan di perpustakaan ketika admin sudah memberikan approval, peminjam dapat datang ke resepsionis Perpustakaan untuk mengambil kunci pada jam yang telah dipilih.</li>
              <li>Peminjam diwajibkan memberikan jaminan kartu identitas baik KTM/KarPeg/KTP untuk ditukarkan dengan kunci.</li>
              <li>Jika admin sudah memberikan approval tetapi peminjam tidak datang pada jam yang dipesan sebanyak 3x, maka akan dilakukan blacklist pada bulan itu.</li>
              <li>Pengambilan kunci paling lambat 5 menit setelah jam awal pemesanan.</li>
              <li>Pengembalian kunci paling lambat 30 menit setelah jam selesai pemesanan.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Greeting */}
      <div style={{
        position: "absolute", top: "20px", right: "20px", backgroundColor: "#FF0000", color: "white", padding: "10px 20px", borderRadius: "5px", fontSize: "0.8rem"
      }}>
        Hai, Sausan!
      </div>
    </div>
  );
}

export default Home;
