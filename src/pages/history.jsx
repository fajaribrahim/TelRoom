import React from 'react';

const History = () => {
  const dataHistory = [
    {
      id: 1,
      namaPemesanan: 'Fajar Ibrahim',
      noHp: '21110012',
      namaRuangan: 'Tel-U PWT - Ruang Diskusi (10 Orang)',
      tanggal: '23-12-2024',
      jamMulai: '08:00',
      jamSelesai: '10:00',
      tujuan: 'Seminar Proposal',
      namaAnggota: 'Asyafa Ditra Al Hauna, Fajar Ibrahim, Gayuh Fikri, Ikhda, Nurya Afida',
      status: 'Request',
    },
    {
      id: 2,
      namaPemesanan: 'Fajar Ibrahim',
      noHp: '21110012',
      namaRuangan: 'Tel-U PWT - Ruang Diskusi (10 Orang)',
      tanggal: '23-12-2024',
      jamMulai: '10:00',
      jamSelesai: '12:00',
      tujuan: 'Seminar Proposal',
      namaAnggota: 'Asyafa Ditra Al Hauna, Fajar Ibrahim, Gayuh Fikri, Ikhda, Nurya Afida',
      status: 'Approve',
    },
    {
      id: 3,
      namaPemesanan: 'Fajar Ibrahim',
      noHp: '21110012',
      namaRuangan: 'Tel-U PWT - Ruang Diskusi (10 Orang)',
      tanggal: '22-12-2024',
      jamMulai: '08:00',
      jamSelesai: '10:00',
      tujuan: 'Seminar Proposal',
      namaAnggota: 'Asyafa Ditra Al Hauna, Fajar Ibrahim, Gayuh Fikri, Ikhda, Nurya Afida',
      status: 'Attend',
    },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#FF0000' }}>
        Riwayat Pemesanan
      </h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5', borderBottom: '2px solid #ddd' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>No</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Nama Pemesan</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Nama Ruangan</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Tanggal</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Jam</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Tujuan</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {dataHistory.map((item, index) => (
            <tr key={item.id} style={{ textAlign: 'center' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{index + 1}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.namaPemesanan}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.namaRuangan}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.tanggal}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {item.jamMulai} - {item.jamSelesai}
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.tujuan}</td>
              <td
                style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  color:
                    item.status === 'Request'
                      ? '#FFA500'
                      : item.status === 'Approve'
                      ? '#28a745'
                      : '#007bff',
                  fontWeight: 'bold',
                }}
              >
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;