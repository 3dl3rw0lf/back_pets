document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const petName = document.getElementById('petName').value;
        const petImage = document.getElementById('petImage').files[0];
        const location = document.getElementById('location').value;

        if (validateForm(name, email, phone, petName, petImage, location)) {
            alert('Formulario enviado exitosamente.');
            form.reset();
        } else {
            alert('Por favor, complete todos los campos correctamente.');
        }
    });
});

function validateForm(name, email, phone, petName, petImage, location) {
    if (!name || !email || !phone || !petName || !petImage || !location) {
        return false;
    }
    return true;
}
