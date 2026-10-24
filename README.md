# ECI-MyCampus — Microservicio de Infraestructura & Campus (Campus Service)

Microservicio responsable de catalogar los edificios (Bloques A, B, C, D, E, F), auditorios, canchas deportivas (Coliseo El Otoño, fútbol, tenis) y servicios/comercios de la Escuela Colombiana de Ingeniería Julio Garavito.

## Tecnologías
* **Runtime:** Node.js / TypeScript
* **Framework HTTP:** Fastify
* **ORM:** Prisma ORM
* **Base de Datos:** PostgreSQL (`campus_schema`)

## Endpoints Principales
* `GET /health`: Comprobación de estado del servicio.
* `GET /api/v1/campus/buildings`: Lista de edificios y coordenadas cartográficas para el mapa SVG.
* `GET /api/v1/campus/buildings/:id`: Detalle de un bloque, salones y servicios asociados.
* `GET /api/v1/campus/sports`: Catálogo de canchas y deportes.

## Ejecución Local
```bash
npm install
npm run dev
```
Inicia en `http://localhost:4002`.
