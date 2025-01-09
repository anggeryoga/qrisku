# QRIS Hub Generator

## Deskripsi Proyek
**QRIS Hub Generator** adalah aplikasi berbasis web untuk mempermudah pembuatan QRIS dinamis. Dengan aplikasi ini, pengguna dapat menghasilkan kode QRIS yang dapat diatur nominal pembayarannya, dilengkapi dengan informasi merchant dan catatan transaksi. Aplikasi ini juga memungkinkan pengguna untuk melacak riwayat transaksi, melihat statistik, dan mengelola data merchant secara praktis.

---

## Fitur
1. **Unggah dan Decode Gambar QRIS**
   - Pengguna dapat mengunggah gambar QRIS statis, yang akan didekode menjadi string QRIS.
   
2. **Pembuatan QRIS Dinamis**
   - Menghasilkan QRIS dinamis dengan nominal pembayaran yang disesuaikan oleh pengguna.

3. **Statistik Transaksi**
   - Menampilkan jumlah total transaksi, nilai total transaksi, dan rata-rata nilai transaksi.

4. **Grafik Transaksi**
   - Menampilkan grafik nominal transaksi dalam 10 transaksi terakhir.

5. **Riwayat Transaksi**
   - Melihat tabel berisi informasi transaksi seperti tanggal, nama merchant, nominal, dan catatan.
   - Fitur hapus transaksi.

6. **Manajemen Merchant**
   - Sistem saran otomatis untuk nama merchant berdasarkan data yang sebelumnya disimpan.

7. **Unduh dan Bagikan QR**
   - Mengunduh kode QR dalam format gambar.
   - Membagikan kode QR ke perangkat lain (jika browser mendukung).

8. **Notifikasi**
   - Memberikan notifikasi berupa pesan sukses, peringatan, atau kesalahan pada setiap aksi.

9. **Penyimpanan Lokal**
   - Riwayat transaksi dan data merchant disimpan di `localStorage` sehingga tetap tersedia meskipun halaman direfresh.

---

## Cara Menggunakan
1. **Mengunggah QRIS Statis**
   - Klik tombol "Upload QRIS Image" dan pilih gambar QRIS Anda.
   - QRIS akan didekode otomatis dan ditampilkan di kolom "Kode QRIS".

2. **Mengisi Informasi**
   - Masukkan nominal pembayaran, nama merchant, dan (opsional) catatan transaksi.

3. **Generate QRIS Dinamis**
   - Klik tombol "Generate QRIS" untuk menghasilkan kode QR baru.
   - Kode QR akan muncul dan dapat diunduh atau dibagikan.

4. **Mengelola Riwayat Transaksi**
   - Transaksi baru otomatis ditambahkan ke riwayat.
   - Untuk menghapus transaksi, klik tombol "Hapus" pada tabel riwayat.

5. **Statistik dan Grafik**
   - Statistik dan grafik transaksi diperbarui secara otomatis berdasarkan data riwayat transaksi.

---

## Teknologi yang Digunakan
- **HTML, CSS, JavaScript**
- **Chart.js**: Membuat grafik transaksi.
- **QRCode.js**: Menghasilkan gambar QR Code.
- **jsQR**: Decode gambar QRIS menjadi string.

---

## Cara Menjalankan
1. Salin semua kode ke file `.html`.
2. Buka file tersebut di browser modern yang mendukung HTML5, JavaScript, dan API penyimpanan lokal.
3. Pastikan koneksi internet aktif untuk mengunduh pustaka eksternal seperti `Chart.js` dan `QRCode.js` dari CDN.

---

## Catatan Tambahan
- Pastikan browser Anda mendukung fitur berbagi file jika ingin menggunakan tombol "Bagikan QR".
- Data tersimpan secara lokal di browser dan tidak diunggah ke server, sehingga aman digunakan secara pribadi.

Selamat menggunakan QRIS Hub Generator! 🚀
