fetch('http://localhost:3000/pets')
  .then(response => response.json())
  .then(data => {
    const pets = data;
    const petsList = document.getElementById('petsList');
    pets.forEach(pet => {
      const petElement = document.createElement('div');
      petElement.style.width = '18rem';
      petElement.classList.add('card');
      petElement.innerHTML = `
                              <div class="card-body">
                                <h2 class="card-title">${pet.pet_name}</h2>
                        <p><strong>Tipo:</strong> ${pet.type_pets_description}</p>
                        <p><strong>Propietario:</strong> ${pet.owner_name}</p>
                        <p><strong>Edad:</strong> ${pet.pet_age}</p>
                        <p><strong>Estado:</strong> ${pet.status_description}</p>
                        </div>
                        <hr>
                    `;
      petsList.appendChild(petElement);
    });
  })
  .catch(error => console.error('Error al obtener las mascotas:', error));
