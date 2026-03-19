# Proyecto Integrador — Sistema Yavirac

Sistema de gestión institucional para el ITS Yavirac. Catálogo de docentes/estudiantes con búsqueda, paginación, diálogo de detalle y exportación a PDF.

## Estructura

```
PROYECTO/
├── client/   → Frontend Angular 17 (puerto 4200)
└── serve/    → Backend Express + Knex + PostgreSQL (puerto 3000)
```

## Requisitos

- Node.js >= 20
- PostgreSQL corriendo en `localhost:5432`

## 1. Base de datos

```bash
sudo -i -u postgres psql -c "ALTER USER postgres PASSWORD '1234';"
psql -U postgres -c "CREATE DATABASE asignacion;"
```

## 2. Backend

```bash
cd PROYECTO/serve
npm install
npm run migrate
npm run seed
npm start
```

Verifica en: `http://localhost:3000/api/docentes`

## 3. Frontend

```bash
cd PROYECTO/client
npm install
npm start
```

App en: **http://localhost:4200**

## Uso

| Ruta | Descripción |
|------|-------------|
| `/catalogo` | Tabla de docentes/estudiantes con búsqueda y paginación |
| `/docente` | Formulario para registrar un docente |

- Selecciona **Docentes** para cargar datos desde la API
- Clic en una fila para ver detalle en diálogo
- Botón PDF descarga formulario institucional

---
**Autor:** Marlon Tituaña
