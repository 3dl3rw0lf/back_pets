document.addEventListener('DOMContentLoaded', function () {
  // Función para inicializar el mapa
  function initMap (lat, lng) {
    const map = L.map('map').setView([lat, lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const marker = L.marker([lat, lng], { draggable: true }).addTo(map);
  }
  initMap(-32.8925184, -68.8455680);
});
