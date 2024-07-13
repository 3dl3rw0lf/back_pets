document.addEventListener('DOMContentLoaded', function () {
  // Función para inicializar el mapa
  function initMap (lat, lng) {
    const map = L.map('map').setView([lat, lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const marker = L.marker([lat, lng], { draggable: true }).addTo(map);

    map.on('click', function (e) {
      marker.setLatLng(e.latlng);
      updateLatLng(e.latlng);
    });

    marker.on('dragend', function () {
      updateLatLng(marker.getLatLng());
    });

    function updateLatLng (latlng) {
      document.getElementById('lat').value = latlng.lat;
      document.getElementById('lng').value = latlng.lng;
      console.log('Latitud: ', latlng.lat);
      console.log('Longitud: ', latlng.lng);
    }
  }

  // Obtener coordenadas geográficas del usuario
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;
        initMap(latitud, longitud);
      },
      function (error) {
        console.error(error);
        // Coordenadas de fallback en caso de error
        initMap(-32.8925184, -68.8455680);
      }
    );
  } else {
    // Coordenadas de fallback si el navegador no soporta geolocalización
    initMap(-32.8925184, -68.8455680);
  }
});
