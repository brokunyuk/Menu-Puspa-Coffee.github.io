// Tunggu sampai halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
  // Tambahkan tombol toggle di setiap section menu
  const sections = document.querySelectorAll(".menu-section");

  sections.forEach(section => {
    // Buat tombol
    const btn = document.createElement("button");
    btn.textContent = "Tampilkan/Sembunyikan";
    btn.style.marginTop = "10px";
    btn.style.padding = "6px 12px";
    btn.style.backgroundColor = "#203a43";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    btn.style.borderRadius = "6px";

    // Masukkan tombol ke dalam section
    section.appendChild(btn);

    // Event klik untuk toggle
    btn.addEventListener("click", () => {
      const items = section.querySelectorAll(".menu-item");
      items.forEach(item => {
        if (item.style.display === "none") {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

