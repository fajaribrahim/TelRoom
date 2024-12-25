import React, { useState } from 'react';

function Reservasi() {
  const [formData, setFormData] = useState({
    nama: '',
    noHP: '',
    tanggal: '',
    jamMulai: '',
    gedung: '',
    ruangan: '',
    tujuan: '',
    anggota: '',
  });

  const buildings = {
    DC: ['Lab Data (DC 103)', 'DC 201', 'DC 301', 'Lab Jaringan Komputer (DC 305)'],
    TT: ['Lab RPP (TT 101)', 'Lab Kendali (TT 106)', 'TT 301', 'Lab Teknik Digital (TT 302)'],
  };

  const [availableRooms, setAvailableRooms] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'gedung') {
      setAvailableRooms(buildings[value] || []);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Reservasi berhasil disimpan!');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
      <h1 style={{ color: '#FF0000' }}>Room Reservation</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
        {/* Nama */}
        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ color: 'black', marginRight: '0.5rem', fontSize: '0.8rem'}}>Nama</span> <span style={{ color: 'red' }}>*)</span>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleInputChange}
            style={{ flex: 1, padding: '0.5rem' }}
            required
          />
        </label>

        {/* No HP */}
        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ color: 'black', marginRight: '0.5rem' }}>No. HP</span> <span style={{ color: 'red' }}>*</span>
          <input
            type="tel"
            name="noHP"
            value={formData.noHP}
            onChange={handleInputChange}
            style={{ flex: 1, padding: '0.5rem' }}
            required
          />
        </label>

        {/* Tanggal */}
        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ color: 'black', marginRight: '0.5rem' }}>Tanggal</span> <span style={{ color: 'red' }}>*</span>
          <input
            type="date"
            name="tanggal"
            value={formData.tanggal}
            onChange={handleInputChange}
            style={{ flex: 1, padding: '0.5rem' }}
            required
          />
        </label>

        {/* Jam Mulai */}
        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ color: 'black', marginRight: '0.5rem' }}>Jam Mulai</span> <span style={{ color: 'red' }}>*</span>
          <input
            type="time"
            name="jamMulai"
            value={formData.jamMulai}
            onChange={handleInputChange}
            style={{ flex: 1, padding: '0.5rem' }}
            required
          />
        </label>

        {/* Gedung */}
        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ color: 'black', marginRight: '0.5rem' }}>Gedung</span> <span style={{ color: 'red' }}>*</span>
          <select
            name="gedung"
            value={formData.gedung}
            onChange={handleInputChange}
            style={{ flex: 1, padding: '0.5rem' }}
            required
          >
            <option value="">Pilih Gedung ...</option>
            {Object.keys(buildings).map((building) => (
              <option key={building} value={building}>
                {building}
              </option>
            ))}
          </select>
        </label>

        {/* Ruangan */}
        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ color: 'black', marginRight: '0.5rem' }}>Pilih Ruangan</span> <span style={{ color: 'red' }}>*</span>
          <select
            name="ruangan"
            value={formData.ruangan}
            onChange={handleInputChange}
            style={{ flex: 1, padding: '0.5rem' }}
            required
          >
            <option value="">Pilih Ruangan ...</option>
            {availableRooms.map((room, index) => (
              <option key={index} value={room}>
                {room}
              </option>
            ))}
          </select>
        </label>

        {/* Tujuan Reservasi */}
        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ color: 'black', marginRight: '0.5rem' }}>Tujuan Reservasi</span> <span style={{ color: 'red' }}>*</span>
          <textarea
            name="tujuan"
            value={formData.tujuan}
            onChange={handleInputChange}
            style={{ flex: 1, padding: '0.5rem' }}
            required
          />
        </label>

        {/* Nama Anggota */}
        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ color: 'black', marginRight: '0.5rem' }}>Nama Anggota</span> <span style={{ color: 'red' }}>*</span>
          <textarea
            name="anggota"
            value={formData.anggota}
            onChange={handleInputChange}
            style={{ flex: 1, padding: '0.5rem' }}
            required
          />
        </label>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            type="button"
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: 'grey',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Batal
          </button>
          <button
            type="submit"
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#FF0000',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}

export default Reservasi;
