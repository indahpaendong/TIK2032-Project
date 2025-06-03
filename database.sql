CREATE DATABASE IF NOT EXISTS website_sederhana;
USE website_sederhana;

CREATE TABLE blog (
    id INT AUTO_INCREMENT PRIMARY KEY,
    judul VARCHAR(255) NOT NULL,
    konten TEXT NOT NULL
);

-- Contoh data awal
INSERT INTO blog (judul, konten) VALUES
('Destinasi Liburan dengan Pemandangan Spektakuler', 'Tempat-tempat wisata dengan pemandangan alam yang menakjubkan...'),
('Liburan Santai Tanpa Harus Pergi Jauh', 'Tidak perlu pergi jauh untuk menikmati liburan yang menyegarkan...'),
('Tips Mengabadikan Keindahan Alam dengan Sempurna', 'Artikel ini berisi tips fotografi untuk menangkap pemandangan...');

CREATE TABLE kontak (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100),
    email VARCHAR(100),
    pesan TEXT,
    tanggal DATETIME DEFAULT CURRENT_TIMESTAMP
);
