# HorariosAca — Node.js + Express API REST

Módulo de gestión de profesores (Teacher) para el sistema HorariosAca, desarrollado con Node.js y Express siguiendo la arquitectura MVC.

## Tecnologías

| Capa | Tecnología |
|------|-----------|
| Runtime | Node.js v26.1.0 |
| Framework | Express 4.x |
| Arquitectura | MVC (Model - View - Controller) |
| Formato de datos | JSON |

---

## Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- [Postman](https://www.postman.com/downloads/) para probar los endpoints
- [Git](https://git-scm.com/downloads)

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/DyowenDozh/HorariosAca-Node.git
cd HorariosAca-Node
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Correr el servidor

```bash
node app.js
```

El servidor arranca en:
```
http://localhost:3000
```

---

## Estructura del proyecto

```
HorariosAca-Node/
├── controllers/
│   └── teacher.controller.js   # Business logic
├── models/
│   └── teacher.model.js        # Data model
├── routes/
│   └── teacher.routes.js       # API endpoints
├── app.js                      # Main server file
└── package.json
```

---

## Endpoints de la API

| Método | URL | Descripción |
|--------|-----|-------------|
| GET | `/api/teachers` | Get all teachers |
| GET | `/api/teachers/:id` | Get a teacher by ID |
| POST | `/api/teachers` | Create a new teacher |
| PUT | `/api/teachers/:id` | Update a teacher |
| DELETE | `/api/teachers/:id` | Delete a teacher |

---

## Pruebas con Postman

### GET — Listar todos los profesores
- **Método:** GET
- **URL:** `http://localhost:3000/api/teachers`
- **Body:** ninguno
- **Respuesta esperada (200 OK):**
```json
[
    { "teacher_id": 1, "teacher_name": "Carlos García", "amount_hour": 20, "schedule_id": 1 },
    { "teacher_id": 2, "teacher_name": "María López", "amount_hour": 18, "schedule_id": 1 },
    { "teacher_id": 3, "teacher_name": "Juan Pérez", "amount_hour": 22, "schedule_id": 2 }
]
```

---

### GET — Obtener profesor por ID
- **Método:** GET
- **URL:** `http://localhost:3000/api/teachers/1`
- **Body:** ninguno
- **Respuesta esperada (200 OK):**
```json
{
    "teacher_id": 1,
    "teacher_name": "Carlos García",
    "amount_hour": 20,
    "schedule_id": 1
}
```
- **Si no existe (404):**
```json
{ "message": "Teacher not found" }
```

---

### POST — Crear nuevo profesor
- **Método:** POST
- **URL:** `http://localhost:3000/api/teachers`
- **Headers:** Content-Type: application/json
- **Body (raw JSON):**
```json
{
    "teacher_name": "Ana Martínez",
    "amount_hour": 16,
    "schedule_id": 1
}
```
- **Respuesta esperada (201 Created):**
```json
{
    "message": "Teacher created successfully",
    "teacher": {
        "teacher_id": 4,
        "teacher_name": "Ana Martínez",
        "amount_hour": 16,
        "schedule_id": 1
    }
}
```
- **Si faltan campos obligatorios (400):**
```json
{ "message": "teacher_name and schedule_id are required" }
```

---

### PUT — Actualizar profesor
- **Método:** PUT
- **URL:** `http://localhost:3000/api/teachers/4`
- **Headers:** Content-Type: application/json
- **Body (raw JSON):**
```json
{
    "teacher_name": "Ana Martínez García",
    "amount_hour": 24
}
```
- **Respuesta esperada (200 OK):**
```json
{
    "message": "Teacher updated successfully",
    "teacher": {
        "teacher_id": 4,
        "teacher_name": "Ana Martínez García",
        "amount_hour": 24,
        "schedule_id": 1
    }
}
```
- **Si no existe (404):**
```json
{ "message": "Teacher not found" }
```

---

### DELETE — Eliminar profesor
- **Método:** DELETE
- **URL:** `http://localhost:3000/api/teachers/4`
- **Body:** ninguno
- **Respuesta esperada (200 OK):**
```json
{
    "message": "Teacher deleted successfully",
    "teacher": {
        "teacher_id": 4,
        "teacher_name": "Ana Martínez García",
        "amount_hour": 24,
        "schedule_id": 1
    }
}
```
- **Si no existe (404):**
```json
{ "message": "Teacher not found" }
```

---

## Códigos de estado HTTP

| Código | Significado |
|--------|-------------|
| 200 OK | Petición exitosa |
| 201 Created | Recurso creado exitosamente |
| 400 Bad Request | Datos inválidos o faltantes |
| 404 Not Found | Recurso no encontrado |

---

## Notas

- Los datos se almacenan en memoria (arrays). Al reiniciar el servidor los datos vuelven al estado inicial.
- El módulo implementa la entidad Teacher del sistema HorariosAca según el modelo de base de datos definido en el proyecto.
