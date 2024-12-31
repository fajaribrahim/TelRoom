import React from "react";

const roomDescriptions = [
  {
    id: 1,
    name: "Ruang Kelas (DC 103)",
    image: "/ruang-kelas.jpg",
    description: "Ruang kelas dengan kapasitas 50 orang, dilengkapi dengan proyektor, papan tulis, dan pendingin ruangan.",
  },
];

function DeskripsiRuangan() {
  console.log("Halaman Deskripsi Ruangan dimuat!");

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#FF0000", textAlign: "center", marginBottom: "20px" }}>
        Deskripsi Ruangan
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {roomDescriptions.map((room) => (
          <div
            key={room.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              margin: "10px",
              width: "300px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={room.image}
              alt={room.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }}
            />
            <div style={{ padding: "10px" }}>
              <h3 style={{ margin: "0 0 10px 0", color: "#333" }}>{room.name}</h3>
              <p style={{ color: "#555" }}>{room.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeskripsiRuangan;
