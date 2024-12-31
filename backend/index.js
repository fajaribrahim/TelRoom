// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'your_password',
//     database: 'TelRoom'
// });

// db.connect((err) => {
//     if (err) {
//         console.log('Error connecting to MySQL:', err);
//         return;
//     }
//     console.log('Connected to MySQL');
// });

// // API endpoint untuk mendapatkan data ruangan
// app.get('/rooms', (req, res) => {
//     const query = 'SELECT * FROM Ruangan';
//     db.query(query, (err, results) => {
//         if (err) {
//             return res.status(500).send(err);
//         }
//         res.json(results);
//     });
// });

// // Jalankan server
// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

import './index.css';
import TestPage from './TestPage';

ReactDOM.render(
  <React.StrictMode>
    <TestPage />
  </React.StrictMode>,
  document.getElementById('root')
);
