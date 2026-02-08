# Donuts App

Aplicación full‑stack para la gestión de donuts y favoritos, construida con **Next.js (Frontend)**, **Node.js/Express (Backend)** y **MongoDB**. El proyecto demuestra un flujo real de producto: CRUD completo, persistencia real, reglas de negocio en backend y UI sincronizada.

---

## 🚀 Funcionalidades

- **Donuts**
  - Listar donuts
  - Ver detalle
  - Crear, editar y eliminar

- **Favoritos**
  - Añadir y quitar favoritos
  - Persistencia en MongoDB
  - Prevención de duplicados (regla de negocio en backend)

- **UX básica de producto**
  - Estados de carga
  - Manejo de errores controlado
  - UI reactiva sin recargas

---

## 🧱 Arquitectura

### Frontend (Next.js)

- **pages/**: páginas claras y responsables del estado
- **components/**: componentes visuales reutilizables
- **api/**: capa intermedia para llamadas HTTP (fetch)
- **core/**: contextos y lógica compartida

**Principios aplicados**:

- Separación de responsabilidades
- La página orquesta; los componentes visuales no hacen fetch
- Estado levantado y sincronizado con backend

### Backend (Node.js + Express)

- **models/**: esquemas de Mongoose
- **services/**: lógica de negocio (reglas reales)
- **controllers/**: manejo de req/res
- **routes/**: rutas REST coherentes

**Flujo**:

```
Route → Controller → Service → Model → MongoDB
```

---

## 🗄️ Modelo de datos (MongoDB)

### Donut

- name (String, required)
- price (Number, required)
- description (String)
- isAvailable (Boolean)

### DonutFavorite

- donutId (ObjectId → Donut, **unique**)

> Regla de negocio: un donut solo puede existir una vez en favoritos.

---

## 🔌 Endpoints

### Donuts

- `GET /donuts`
- `POST /donuts`
- `GET /donuts/:id`
- `PUT /donuts/:id`
- `DELETE /donuts/:id`

### Favoritos

- `GET /api/favorites`
- `POST /api/favorites`
- `DELETE /api/favorites/:id`

---

## ▶️ Cómo levantar el proyecto

### Backend

```bash
cd back
npm install
npm start
```

Servidor en: `http://localhost:9000`

### Frontend

```bash
cd front
npm install
npm run dev
```

App en: `http://localhost:3000`

---

## 🧠 Decisiones técnicas destacadas

- Regla de no duplicados implementada en **service + índice único en Mongo**
- Frontend resiliente ante errores de backend
- Sin booleanos falsos en memoria para favoritos
- IDs reales de Mongo (`_id`) usados en todo el flujo

---

## 📌 Estado del proyecto

- Funcionalidad completa
- Arquitectura limpia
- Flujo de producto real
- Listo para estilos y mejoras UX

---

## 👤 Autora

Desarrollado por **lidi** como proyecto final de React / Full‑Stack.
