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
      { id: 8, name: "Lab Aplikasi (IoT 301)" },
      { id: 9, name: "Lab Multimedia (IoT 302)" },
      { id: 10, name: "Lab Fisika (IoT 304)" },
      { id: 11, name: "Lab Audio Visual (IoT 306)" },
    ],
    Perpustakaan: [
      { id: 1, name: "Laktasi" },
      { id: 2, name: "Dikusi" },
      { id: 3, name: "Audio Visual" },
    ],
  };

// State untuk ruangan yang tersedia berdasarkan gedung yang dipilih
const [availableRooms, setAvailableRooms] = useState([]);

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });

  // Jika gedung berubah, update daftar ruangan yang tersedia
  if (name === 'gedung') {
    setAvailableRooms(buildings[value] || []);
    setFormData((prevState) => ({ ...prevState, ruangan: '' }));
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form data:', formData);
  alert('Reservasi berhasil disimpan!');
};

const handleCancel = () => {
  setFormData({
    nama: '',
    noHP: '',
    tanggal: '',
    jamMulai: '',
    gedung: '',
    ruangan: '',
    tujuan: '',
    anggota: '',
  });
};

return (
  <div style={{ padding: '1.5rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
    <div
      style={{
        backgroundColor: '#FF0000',
        color: 'white',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95vw',
        borderRadius: '5px 5px 0 0',
      }}
    >
      <h1>Room Reservation</h1>
    </div>

    <div
      style={{
        backgroundColor: 'white',
        padding: '1rem',
        borderRadius: '0 0 5px 5px',
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Nama */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ width: '30%', color: 'black' }}>
              Nama <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleInputChange}
              style={{
                width: '70%',
                padding: '0.5rem',
                backgroundColor: '#D3D3D3',
                color: 'black',
              }}
              required
            />
          </div>

          {/* No HP */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ width: '30%', color: 'black' }}>
              No HP <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="tel"
              name="noHP"
              value={formData.noHP}
              onChange={handleInputChange}
              style={{
                width: '70%',
                padding: '0.5rem',
                backgroundColor: '#D3D3D3',
                color: 'black',
              }}
              required
            />
          </div>

          {/* Tanggal */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ width: '30%', color: 'black' }}>
              Tanggal <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="date"
              name="tanggal"
              value={formData.tanggal}
              onChange={handleInputChange}
              style={{
                width: '70%',
                padding: '0.5rem',
                backgroundColor: '#D3D3D3',
                color: 'black',
              }}
              required
            />
          </div>

          {/* Jam Mulai */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ width: '30%', color: 'black' }}>
              Jam Mulai <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="time"
              name="jamMulai"
              value={formData.jamMulai}
              onChange={handleInputChange}
              style={{
                width: '70%',
                padding: '0.5rem',
                backgroundColor: '#D3D3D3',
                color: 'black',
              }}
              required
            />
          </div>

          {/* Gedung and Ruangan */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            {/* Gedung */}
            <div style={{ display: 'flex', alignItems: 'center', width: '50%' }}>
              <label style={{ width: '40%', color: 'black' }}>
                Pilih Gedung <span style={{ color: 'red' }}>*</span>
              </label>
              <select
                name="gedung"
                value={formData.gedung}
                onChange={handleInputChange}
                style={{
                  width: '60%',
                  padding: '0.5rem',
                  backgroundColor: '#D3D3D3',
                  color: 'black',
                }}
                required
              >
                <option value="">Pilih Gedung...</option>
                {Object.keys(buildings).map((building) => (
                  <option key={building} value={building}>
                    {building}
                  </option>
                ))}
              </select>
            </div>

            {/* Ruangan */}
            <div style={{ display: 'flex', alignItems: 'center', width: '50%' }}>
              <label style={{ width: '40%', color: 'black' }}>
                Pilih Ruangan <span style={{ color: 'red' }}>*</span>
              </label>
              <select
                name="ruangan"
                value={formData.ruangan}
                onChange={handleInputChange}
                style={{
                  width: '60%',
                  padding: '0.5rem',
                  backgroundColor: '#D3D3D3',
                  color: 'black',
                }}
                required
              >
                <option value="">Pilih Ruangan...</option>
                {availableRooms.map((room) => (
                  <option key={room.id} value={room.name}>
                    {room.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Tujuan */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ width: '30%', color: 'black' }}>
              Tujuan Reservasi <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              name="tujuan"
              value={formData.tujuan}
              onChange={handleInputChange}
              style={{
                width: '70%',
                padding: '0.5rem',
                backgroundColor: '#D3D3D3',
                color: 'black',
              }}
              required
            />
          </div>

          {/* Nama Anggota */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ width: '30%', color: 'black' }}>
              Nama Anggota <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              name="anggota"
              value={formData.anggota}
              onChange={handleInputChange}
              style={{
                width: '70%',
                padding: '0.5rem',
                backgroundColor: '#D3D3D3',
                color: 'black',
              }}
              required
            />
          </div>

          {/* Tombol Simpan dan Batal */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between' }}>
            <button
              type="button"
              onClick={handleCancel}
              style={{
                width: '48%',
                padding: '0.8rem',
                backgroundColor: '#C4C4C4',
                color: 'black',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer',
              }}
            >
              Batal
            </button>
            <button
              type="submit"
              style={{
                width: '48%',
                padding: '0.8rem',
                backgroundColor: '#FF0000',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer',
              }}
            >
              Simpan
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);
}

export default Reservasi;