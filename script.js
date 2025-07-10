let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  const slidesContainer = document.querySelector('.slides');
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}

document.querySelector('.prev').addEventListener('click', () => {
  showSlide(currentSlide - 1);
});
document.querySelector('.next').addEventListener('click', () => {
  showSlide(currentSlide + 1);
});
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    showSlide(parseInt(dot.dataset.index));
  });
});

setInterval(() => {
  showSlide(currentSlide + 1);
}, 3000);

showSlide(currentSlide);

function toggleContent(id) {
  const content = document.getElementById(id);
  const isVisible = content.style.display === "block";
  content.style.display = isVisible ? "none" : "block";
}

function goToDetail() {
  window.location.href = "halaman6.html";
}

function goToDetail() {
  window.location.href = "halaman6.html";
}

// Slider Baru
window.onload = function () {
  let slideIndexNew = 0;
  const slidesNew = document.querySelectorAll('.slideNew');

  function showSlidesNew() {
    slidesNew.forEach(slide => slide.classList.remove('active'));
    slideIndexNew = (slideIndexNew + 1) % slidesNew.length;
    slidesNew[slideIndexNew].classList.add('active');
  }

  setInterval(showSlidesNew, 3000);
};

function tampilkanSaran() {
    // Baca hasil dengan prioritas:
    // 1. Coba baca dari 'hasil' (format baru)
    // 2. Jika tidak ada, baca dari 'hasil_deteksi' (format lama) dan konversi
    let hasil = localStorage.getItem("hasil");
    
    if (!hasil) {
        const hasilDeteksi = localStorage.getItem("hasil_deteksi");
        hasil = hasilDeteksi === "normal" ? "Normal" : 
               hasilDeteksi === "sedikit" ? "Sedikit Kelelahan" :
               hasilDeteksi === "sedang" ? "Sedang Kelelahan" :
               "Berat";
    }

    const saranText = {
        "Normal": {
            icon: "✅",
            title: "SARAN PERAWATAN UNTUK MATA NORMAL",
            content: `1. Pemeriksaan mata rutin: Lakukan pemeriksaan mata secara teratur untuk memastikan kesehatan mata dan mendeteksi potensi masalah mata sejak dini.
2. Gunakan kacamata pelindung: Gunakan kacamata pelindung saat melakukan aktivitas yang dapat membahayakan mata.
3. Jaga kebersihan mata: Cuci tangan sebelum menyentuh mata, dan hindari menyentuh mata dengan tangan yang kotor.
4. Istirahatkan mata: Berikan istirahat pada mata secara teratur, terutama saat bekerja di depan layar komputer.
5. Konsumsi makanan seimbang: Konsumsi makanan yang kaya akan vitamin A, C, dan E yang baik untuk kesehatan mata.
6. Hindari kebiasaan buruk: Hindari kebiasaan merokok yang dapat meningkatkan risiko penyakit mata.
7. Gunakan pencahayaan yang tepat: Pastikan pencahayaan cukup dan tidak terlalu terang atau redup.
8. Lakukan olahraga mata: Lakukan olahraga mata sederhana untuk menjaga kesehatan mata.`
        },
        "Sedikit Kelelahan": {
            icon: "⚠️",
            title: "PENANGANAN TINGKAT RINGAN",
            content: `• Istirahat mata: Gunakan prinsip 20-20-20 (setiap 20 menit, alihkan pandangan ke jarak 20 kaki selama 20 detik).
• Atur pencahayaan: Pastikan pencahayaan ruangan cukup terang tetapi tidak menyilaukan.
• Perbaiki postur: Jaga jarak dan posisi yang tepat saat menggunakan komputer.
• Kedip lebih sering: Kedipan mata membantu menjaga kelembapan mata.
• Kompres hangat: Kompres mata dengan air hangat untuk meredakan ketegangan.
• Pijat mata: Pijatan lembut pada area sekitar mata mengurangi ketegangan.`
        },
        "Sedang Kelelahan": {
            icon: "⚠️",
            title: "PENANGANAN TINGKAT SEDANG",
            content: `• Periksa mata: Jika disertai gejala sakit kepala atau penglihatan kabur, segera periksakan ke dokter.
• Gunakan tetes mata: Tetes mata buatan membantu menjaga kelembapan mata.
• Sesuaikan pengaturan layar: Atur kecerahan, kontras, dan ukuran font.
• Gunakan filter anti-silau: Filter membantu mengurangi silau dari layar.
• Konsultasi dokter: Dokter mungkin merekomendasikan obat tetes mata khusus.`
        },
        "Berat": {
            icon: "🚨",
            title: "PENANGANAN TINGKAT BERAT",
            content: `• Periksakan ke dokter spesialis mata: Jika tidak membaik, segera konsultasikan.
• Terapi khusus: Dokter mungkin merekomendasikan terapi ortoptik.
• Kacamata khusus: Mungkin diperlukan untuk masalah penglihatan spesifik.
• Perubahan gaya hidup: Hindari aktivitas yang memicu kelelahan mata.`
        }
    };

    const saran = saranText[hasil] || saranText["Normal"];
    
    const saranHTML = `
        <div class="saran-container">
            <div class="saran-header">
                <span class="saran-icon">${saran.icon}</span>
                <h2>${saran.title}</h2>
            </div>
            <div class="saran-content">
                <p>${saran.content.replace(/\n/g, '<br>')}</p>
            </div>
        </div>
    `;
    
    document.getElementById("saran").innerHTML = saranHTML;
}
// 1. Validasi persetujuan sebelum mulai deteksi
const consentCheckbox = document.getElementById('privacyConsent');
const startButton = document.getElementById('startBtn');

consentCheckbox.addEventListener('change', () => {
  startButton.disabled = !consentCheckbox.checked;
});

// 2. Tampilkan peringatan jika kamera ditolak
function handleCameraError(error) {
  if (error.name === 'NotAllowedError') {
    alert('Anda harus menyetujui akses kamera untuk melanjutkan!');
    consentCheckbox.checked = false;
    startButton.disabled = true;
  }
}

// Contoh pemanggilan saat membuka kamera
async function initCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    // Lanjutkan proses deteksi...
  } catch (error) {
    handleCameraError(error);
  }
}

document.addEventListener('DOMContentLoaded', function() {
    const consentCheckbox = document.getElementById('privacyConsent');
    const nextButton = document.getElementById('nextBtn');

    // Aktifkan tombol saat checkbox dicentang
    consentCheckbox.addEventListener('change', function() {
        nextButton.disabled = !this.checked;
    });

    // Navigasi saat tombol diklik
    nextButton.addEventListener('click', function() {
        if (consentCheckbox.checked) {
            window.location.href = "deteksi.html";
        }
    });
});



