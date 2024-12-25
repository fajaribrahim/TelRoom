import React from "react";

const Reservasi = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservasi berhasil dibuat!");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Reservasi</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nama">Nama:</label>
          <input type="text" id="nama" name="nama" required />
        </div>
        <div>
          <label htmlFor="tanggal">Tanggal:</label>
          <input type="date" id="tanggal" name="tanggal" required />
        </div>
        <div>
          <label htmlFor="waktu">Waktu:</label>
          <input type="time" id="waktu" name="waktu" required />
        </div>
        <div>
          <label htmlFor="jumlahOrang">Jumlah Orang:</label>
          <input type="number" id="jumlahOrang" name="jumlahOrang" required />
        </div>
        <button type="submit">Reservasi</button>
      </form>
    </div>
  );
};

export default Reservasi;
