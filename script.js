document.addEventListener("DOMContentLoaded", () => {
  const popupOverlay = document.getElementById("popup-overlay");
  const closePopupButton = document.getElementById("close-popup");
  const confettiButton = document.getElementById("confetti-button");
  const body = document.body;

  // Menampilkan pop-up saat halaman dimuat
  body.style.overflow = "hidden"; // Nonaktifkan scroll

  // Fungsi untuk menyembunyikan pop-up
  const hidePopup = () => {
    popupOverlay.style.opacity = "0";
    popupOverlay.querySelector("#popup-box").style.transform = "scale(0.7)";
    body.style.overflow = "auto"; // Aktifkan scroll kembali
    setTimeout(() => {
      popupOverlay.style.display = "none";
    }, 500); // Sesuaikan dengan durasi transisi di CSS
  };

  closePopupButton.addEventListener("click", hidePopup);

  // Fungsi untuk efek confetti
  const canvas = document.getElementById("confetti-canvas");
  const customConfetti = confetti.create(canvas, {
    resize: true,
    useWorker: true,
  });

  const fireConfetti = () => {
    customConfetti({
      particleCount: 150,
      spread: 180,
      origin: { y: 0.6 },
    });
  };

  confettiButton.addEventListener("click", fireConfetti);
});
