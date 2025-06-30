# Eye-Track: Sistem Deteksi Kelelahan Mata Berbasis Eye Tracking

## Deskripsi Proyek

Eye-Track adalah sistem berbasis web yang dirancang untuk mendeteksi tingkat kelelahan mata pengguna melalui teknologi **eye tracking**. Sistem ini mengklasifikasikan tingkat kelelahan menjadi tiga kategori: **Ringan**, **Sedang**, dan **Berat**, serta memberikan saran penanganan yang sesuai berdasarkan kategori tersebut.

Sistem ini ideal digunakan oleh pengguna komputer dalam jangka waktu lama, seperti mahasiswa, pekerja kantoran, dan profesional TI.

## Fitur Utama

- Deteksi kelelahan mata secara real-time menggunakan webcam.
- Klasifikasi kelelahan berdasarkan perilaku mata:
  - **Ringan**: Butuh istirahat singkat.
  - **Sedang**: Disarankan relaksasi.
  - **Berat**: Butuh istirahat total.
- Saran otomatis berdasarkan tingkat kelelahan.
- Antarmuka pengguna yang ramah dan responsif.
- Desain UI/UX yang mengadopsi palet warna modern dan profesional.

## Struktur Direktori

```
Eye-Track/
├── assets/             # Berkas gambar, ikon, dll.
├── css/                # File CSS untuk styling halaman
├── js/                 # Skrip JavaScript, termasuk logika pelacakan mata
├── model/              # Model machine learning (jika ada)
├── pages/              # Halaman web (HTML)
│   ├── index.html      # Halaman utama
│   ├── deteksi.html    # Halaman deteksi kelelahan
│   ├── hasil.html      # Hasil klasifikasi & saran
├── README.md           # Dokumentasi proyek ini
└── ...
```

## Cara Menggunakan

1. **Persyaratan**
   - Browser modern (Chrome/Firefox)
   - Koneksi webcam aktif
   - Koneksi internet (jika menggunakan model cloud)

2. **Langkah Penggunaan**
   - Buka `index.html` di browser.
   - Klik "Mulai Deteksi".
   - Izinkan akses ke kamera.
   - Sistem akan memantau mata dan menentukan tingkat kelelahan.
   - Hasil dan saran ditampilkan di halaman hasil.

## Penanganan Berdasarkan Tingkat Kelelahan

- **Tingkat Ringan**:
  - Istirahat mata dengan metode 20-20-20:
    - Setiap 20 menit menatap layar, alihkan pandangan ke jarak 20 kaki (sekitar 6 meter) selama 20 detik.

- **Tingkat Sedang**:
  - Lakukan latihan mata seperti memutar bola mata, berkedip cepat, atau menutup mata beberapa saat.
  - Kompres dingin pada mata.

- **Tingkat Berat**:
  - Segera hentikan aktivitas dengan layar.
  - Tidur sejenak atau istirahat total minimal 15-30 menit.
  - Konsultasi jika gejala terus berlanjut.

## Pengembang

Proyek ini dikembangkan oleh:
- **Tias Yunitasari**
- [Universitas Negeri Widya Dharma]

## Lisensi

Proyek ini dibuat untuk keperluan pembelajaran dan tugas akhir. Semua hak cipta dimiliki oleh pengembang.
