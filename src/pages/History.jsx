import React, { useState } from "react";
import { Link } from "react-router-dom";

function History() {
  const [date, setDate] = useState("");
  const [selectedBuilding, setSelectedBuilding] = useState("DC");

  const [reservations, setReservations] = useState([
    {
      name: "John Doe",
      phone: "081234567890",
      date: "2024-12-30",
      startTime: "08:00",
      endTime: "10:00",
      building: "Gedung DC",
      room: "DC 301",
      purpose: "Presentasi",
      members: "3 Orang",
      status: "Approved",
    },
    {
      name: "Jane Smith",
      phone: "081298765432",
      date: "2024-12-30",
      startTime: "10:00",
      endTime: "12:00",
      building: "Gedung TT",
      room: "TT 102",
      purpose: "Meeting",
      members: "5 Orang",
      status: "Request",
    },
  ]);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "0",
        margin: "0",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Main Container */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* Left Menu */}
        <div
          style={{
            width: "12%",
            backgroundColor: "#FF0000",
            color: "white",
            padding: "1rem",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "2.28rem",
              marginTop: "0.9rem",
            }}
          >
            <img
              src="/Booking.png"
              alt="Logo"
              style={{ width: "40px", height: "auto", marginRight: "0.5rem" }}
            />
            <h2 style={{ fontSize: "1.5rem" }}>ROOM</h2>
          </div>
          <button
            style={{
              backgroundColor: "white",
              color: "#FF0000",
              padding: "5px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginBottom: "10px",
              fontSize: "0.7rem",
            }}
          >
            Room Reservation
          </button>
          <button
            style={{
              backgroundColor: "white",
              color: "#FF0000",
              padding: "5px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginBottom: "10px",
              fontSize: "0.7rem",
            }}
          >
            <Link
              to="/history"
              style={{
                textDecoration: "none",
                color: "#FF0000",
              }}
            >
              History
            </Link>
          </button>
          <button
            style={{
              backgroundColor: "white",
              color: "#FF0000",
              padding: "5px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "0.7rem",
            }}
          >
            Deskripsi Ruangan
          </button>
        </div>

        {/* Right Content */}
        <div
          style={{
            width: "88%",
            padding: "1.5rem",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <header
            style={{
              backgroundColor: "white",
              color: "#FF0000",
              padding: "0.5rem 2rem",
              borderRadius: "5px",
              marginBottom: "0.9rem",
              fontWeight: "bold",
              fontSize: "0.6rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src="history.png"
              alt="history icon"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "10px",
              }}
            />
            <h1>History Reservation</h1>
          </header>

          {/* Form Fields */}
          <div style={{ marginBottom: "1rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                {/* Lokasi */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <label
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "0.8rem",
                    }}
                  >
                    Lokasi
                  </label>
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <label
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "0.8rem",
                    }}
                  >
                    Tanggal
                  </label>
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
              <button
                style={{
                  backgroundColor: "#FF0000",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "0.8rem",
                }}
              >
                Search
              </button>
            </div>
          </div>

          {/* Table */}
          <div style={{ marginTop: "1rem", overflowX: "auto", flex: 1 }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "center",
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "10px",
                      backgroundColor: "#FF0000",
                      color: "white",
                      fontSize: "0.8rem",
                    }}
                  >
                    No.
                  </th>
                  <th
                    style={{
                      padding: "10px",
                      backgroundColor: "#FF0000",
                      color: "white",
                      fontSize: "0.8rem",
                    }}
                  >
                    Nama Pemesan
                  </th>
                  <th
                    style={{
                      padding: "10px",
                      backgroundColor: "#FF0000",
                      color: "white",
                      fontSize: "0.8rem",
                    }}
                  >
                    No. Handphone
                  </th>
                  <th
                    style={{
                      padding: "10px",
                      backgroundColor: "#FF0000",
                      color: "white",
                      fontSize: "0.8rem",
                    }}
                  >
                    Tanggal
                  </th>
                  <th
                    style={{
                      padding: "10px",
                      backgroundColor: "#FF0000",
                      color: "white",
                      fontSize: "0.8rem",
                    }}
                  >
                    Jam Mulai
                  </th>
                  <th
                    style={{
                      padding: "10px",
                      backgroundColor: "#FF0000",
                      color: "white",
                      fontSize: "0.8rem",
                    }}
                  >
                    Jam Selesai
                  </th>
                  <th
                    style={{
                      padding: "10px",
                      backgroundColor: "#FF0000",
                      color: "white",
                      fontSize: "0.8rem",
                    }}
                  >
                    Gedung
                  </th>
                  <th
                    style={{
                      padding: "10px",
                      backgroundColor: "#FF0000",
                      color: "white",
                      fontSize: "0.8rem",
                    }}
                  >
                    Ruangan
                  </th>
                  <th
                    style={{
                      padding: "10px",
                      backgroundColor: "#FF0000",
                      color: "white",
                      fontSize: "0.8rem",
                    }}
                  >
                    Tujuan
                  </th>
                  <th
                    style={{
                      padding: "10px",
                      backgroundColor: "#FF0000",
                      color: "white",
                      fontSize: "0.8rem",
                    }}
                  >
                    Anggota
                  </th>
                  <th
                    style={{
                      padding: "10px",
                      backgroundColor:
                        reservations.status === "Approved" ? "green" : "orange",
                      color: "white",
                      fontSize: "0.8rem",
                    }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((reservation, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        padding: "10px",
                        backgroundColor: "#f1f1f1",
                        color: "black",
                        fontSize: "0.8rem",
                      }}
                    >
                      {index + 1}
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        backgroundColor: "#f9f9f9",
                        color: "black",
                        fontSize: "0.8rem",
                      }}
                    >
                      {reservation.name}
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        backgroundColor: "#f9f9f9",
                        color: "black",
                        fontSize: "0.8rem",
                      }}
                    >
                      {reservation.phone}
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        backgroundColor: "#f9f9f9",
                        color: "black",
                        fontSize: "0.8rem",
                      }}
                    >
                      {reservation.date}
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        backgroundColor: "#f9f9f9",
                        color: "black",
                        fontSize: "0.8rem",
                      }}
                    >
                      {reservation.startTime}
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        backgroundColor: "#f9f9f9",
                        color: "black",
                        fontSize: "0.8rem",
                      }}
                    >
                      {reservation.endTime}
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        backgroundColor: "#f9f9f9",
                        color: "black",
                        fontSize: "0.8rem",
                      }}
                    >
                      {reservation.building}
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        backgroundColor: "#f9f9f9",
                        color: "black",
                        fontSize: "0.8rem",
                      }}
                    >
                      {reservation.room}
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        backgroundColor: "#f9f9f9",
                        color: "black",
                        fontSize: "0.8rem",
                      }}
                    >
                      {reservation.purpose}
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        backgroundColor: "#f9f9f9",
                        color: "black",
                        fontSize: "0.8rem",
                      }}
                    >
                      {reservation.members}
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        backgroundColor:
                          reservation.status === "Approved"
                            ? "green"
                            : "orange",
                        color: "white",
                        fontSize: "0.8rem",
                        borderRadius: "5px",
                      }}
                    >
                      {reservation.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
