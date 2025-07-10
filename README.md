
# Eye-Track 👁️

**Eye-Track** adalah sebuah aplikasi web sederhana yang bertujuan untuk mendeteksi kondisi mata berbasis antarmuka visual. Proyek ini dapat digunakan untuk edukasi, pemeriksaan awal visual, atau sebagai komponen dari sistem kesehatan berbasis web.

## 🚀 Fitur

- Antarmuka berbasis web, mudah digunakan di browser.
- Interaktif dengan dukungan file gambar sebagai input.
- Visualisasi kondisi mata dengan gambar representatif.
- Didukung oleh JavaScript untuk logika deteksi dasar.

## 📂 Struktur Proyek

```
Eye-Track/
├── deteksi.html          # Halaman utama antarmuka
├── deteksi.js            # Skrip utama untuk deteksi visual
├── *.jpg / *.png / *.avif # Berbagai aset gambar
```

## 🧑‍💻 Cara Menjalankan Secara Lokal

1. **Clone repository ini** (setelah Anda unggah ke GitHub):
    ```bash
    git clone https://github.com/username/Eye-Track.git
    cd Eye-Track
    ```

2. **Buka `deteksi.html` di browser**
    - Cukup klik dua kali pada file `deteksi.html`, atau
    - Jalankan server lokal dengan Python:
      ```bash
      python -m http.server
      ```
      lalu akses di `http://localhost:8000`

## 📝 Lisensi

Lisensi untuk proyek ini belum ditentukan. Silakan sesuaikan di bagian ini (misalnya MIT, GPL, dll.).

---

## 📌 Catatan Tambahan

- Pastikan gambar yang digunakan berada di direktori yang sama agar antarmuka dapat menampilkannya dengan benar.
- Proyek ini cocok untuk digunakan dalam penyuluhan atau simulasi deteksi gangguan mata ringan.
