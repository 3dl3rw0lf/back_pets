# Proyecto Missing Pets

![Logo del Proyecto](frontend/static/img/logo.svg)

## Descripción 🌐

Este es el proyecto final del curso Node.js de Codo a Codo. La aplicación web permite a los usuarios reportar mascotas perdidas y encontradas. Los usuarios pueden registrarse, iniciar sesión y gestionar sus reportes. La aplicación está desplegada en Render y utiliza una base de datos MySQL para almacenar la información.

## Tecnologías Utilizadas 🛠️

- **Node.js**
- **Express.js**
- **MySQL**
- **Render para el despliegue del proyecto NodeJS**
- **clever-cloud para el despliegue de la base de datos**  

## Estructura del Proyecto 📁

```plaintext
└── 📁back_pets
    └── 📁routes
    |   └── user.routes.js
    |   └── petLost.routes.js
    |   └── petFound.routes.js
    └── 📁public
    |   └── pets.json
    └── package.json
    └── package-lock.json
    └── .gitignore
    └── .gitattributes
    └── 📁src
    |   └── server.js
    └── 📁controllers
    |   └── petLost.controller.js
    |   └── auth.controller.js
    |   └── petFound.controller.js
    └── 📁db
    |   └── db.js
    └── Pets.postman_collection.json
    └── 📁middlewares
    |   └── auth.middlewares.js
    └── 📁models
    |   └── user.models.js
    └── 📁config
    |   └── config.js
    |   └── development.env
    |   └── production.env
    └── 📁frontend
        └── app.js
        └── i.html
        └── index.html
        └── 📁templates
        |   └── contact.html
        |   └── lostpets.html
        |   └── pets_found.html
        |   └── about.html
        |   └── lost_pets.html
        └── 📁static
        |   └── 📁css
        |   |   └── s.css
        |   |   └── style.css
        |   └── 📁img
        |   |   └── logo_mascotas.jpeg
        |   |   └── logo.svg
        |   |   └── michi_02.png
        |   |   └── michi_01.png
        |   |   └── perris_01.png
        |   |   └── perris_02.png
        |   |   └── fondo_principal.jpeg
        |   ├── video
        └── main.js
        └── 📁script
        |   └── menu.js
        |   └── link.js
        |   └── validation.js
        |   └── map_report.js
        |   └── getLatLong.js
        |   └── map_card.js
        |   └── loadLostPets.js
        |   └── loadFoundPets.js
        └── 📁fonts
            └── JetBrainsMono-Bold.woff2
            └── JetBrainsMono-BoldItalic.woff2
            └── JetBrainsMono-ExtraBold.woff2
            └── JetBrainsMono-ExtraBoldItalic.woff2
            └── JetBrainsMono-ExtraLight.woff2
            └── JetBrainsMono-ExtraLightItalic.woff2
            └── JetBrainsMono-Italic.woff2
            └── JetBrainsMono-Light.woff2
            └── JetBrainsMono-LightItalic.woff2
            └── JetBrainsMono-Medium.woff2
            └── JetBrainsMono-MediumItalic.woff2
            └── JetBrainsMono-Regular.woff2
            └── JetBrainsMono-SemiBold.woff2
            └── JetBrainsMono-SemiBoldItalic.woff2
            └── JetBrainsMono-Thin.woff2
            └── JetBrainsMono-ThinItalic.woff2
```

## Estucutra Base de Datos

![base de datos](/pets_lost-pets.png)

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Contacto 📧

Para cualquier duda o consulta, puedes contactarme a través de mi [correo electrónico](arauz.gus@gmail.com).

¡Gracias por visitar nuestro proyecto!
