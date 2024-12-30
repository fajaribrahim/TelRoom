import React from "react";

const roomDescriptions = [
  {
    id: 1,
    name: "Lab Data (DC 103)",
    image: "/images/lab-data-dc103.jpg", //path gambar
    description: "Laboratorium Data, dilengkapi dengan perangkat komputer modern dan proyektor.",
  },
  {
    id: 2,
    name: "Lab Jaringan Komputer (DC 305)",
    image: "/images/lab-jaringan-dc305.jpg", //path gambar
    description: "Laboratorium untuk simulasi jaringan komputer, dilengkapi dengan router dan switch.",
  },
  {
    id: 3,
    name: "Ruang Diskusi",
    image: "/images/ruang-diskusi.jpg", //path gambar
    description: "Ruang diskusi dengan kapasitas 10 orang, nyaman untuk brainstorming dan kerja kelompok.",
  },
];

function DeskripsiRuangan() {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#FF0000", textAlign: "center", marginBottom: "20px" }}>
        Deskripsi Ruangan
      </h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
      }}>
        {roomDescriptions.map((room) => (
          <div key={room.id} style={{
            width: "300px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}>
            <img
              src={room.image}
              alt={room.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "15px" }}>
              <h3 style={{ color: "#FF0000", marginBottom: "10px" }}>{room.name}</h3>
              <p style={{ fontSize: "14px", color: "#333" }}>{room.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeskripsiRuangan;
