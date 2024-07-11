document.addEventListener('DOMContentLoaded', function () {
  // Inicializar el mapa
  const map = L.map('map').setView([51.505, -0.09], 13);

  // Agregar la capa de OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Agregar un marcador
  const marker = L.marker([51.505, -0.09], { draggable: true }).addTo(map);

  // Evento de click para mover el marcador
  map.on('click', function (e) {
    marker.setLatLng(e.latlng);
    updateLatLng(e.latlng);
  });

  // Evento para arrastrar el marcador
  marker.on('dragend', function (e) {
    updateLatLng(marker.getLatLng());
  });

  // Función para actualizar latitud y longitud
  function updateLatLng(latlng) {
    document.getElementById('lat').value = latlng.lat;
    document.getElementById('lng').value = latlng.lng;
  }
});
