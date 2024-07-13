// fetch('http://localhost:3000/petsLost')
fetch('https://back-pets.onrender.com/petsLost')
  .then(response => response.json())
  .then(data => {
    const pets = data;

    const petsList = document.getElementById('cards-cont');
    pets.forEach(pet => {
      const petElement = document.createElement('div');
      petElement.style.width = '18rem';

      // Fecha
      const petReportDate = new Date(pet.pet_report_date);
      const day = String(petReportDate.getDate()).padStart(2, '0');
      const month = String(petReportDate.getMonth() + 1).padStart(2, '0');
      const year = petReportDate.getFullYear();
      const formattedPetReportDate = `${day}/${month}/${year}`;

      const mapId = `map-${pet.pet_id}`;
      petElement.classList.add('card');
      petElement.innerHTML = `<div class="card-body">
                                <div class="card-header">
                                  <h2>${pet.pet_name}</h2>
                                </div>
                                <img src="" alt="Foto" />
                                <div class="map" id="${mapId}"></div>
                              </div>
                                  <div class="card_footer">
                                    <span>${formattedPetReportDate}</span>
                                    <a class="myButton">VER +</a>
                                  </div>
                                </div>
                              <hr>`;
      petsList.appendChild(petElement);

      // Inicializar el mapa para cada tarjeta
      if (document.getElementById(mapId)._leaflet_id) {
        document.getElementById(mapId).outerHTML = `<div class="map" id="${mapId}" style="height: 200px;"></div>`;
      }

      const map = L.map(mapId).setView([pet.pet_latitud, pet.pet_longitud], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Añadir marcador
      L.marker([pet.pet_latitud, pet.pet_longitud]).addTo(map)
        .bindPopup(`<b>${pet.pet_name}</b><br>${formattedPetReportDate}`).openPopup();
    });
  })
  .catch(error => console.error('Error al obtener las mascotas:', error));
