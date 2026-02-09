# Donuts App 🍩

Aplicación web desarrollada con **React / Next.js** y **Node.js / Express** que permite gestionar donuts y marcarlos como favoritos.  
El proyecto está planteado como una aplicación **cliente–servidor real**, con una arquitectura clara, mantenible y pensada para poder ser explicada y defendida.

---

## 📌 Objetivo del proyecto

El objetivo principal de este proyecto es aplicar buenas prácticas de desarrollo **fullstack**, no solo a nivel funcional, sino también a nivel de arquitectura y organización del código.

El foco del proyecto está en:

- Separación clara de responsabilidades
- Flujo de datos controlado entre frontend y backend
- Uso correcto del estado global
- Desacoplar la interfaz de usuario del backend
- Mantener un código limpio, legible y fácil de explicar

---

## 🧱 Arquitectura general

El proyecto se divide en dos partes claramente diferenciadas:

/front → Frontend (Next.js)
/back → Backend (Node.js + Express)

El frontend y el backend se comunican **exclusivamente mediante una API REST**.  
El frontend nunca accede directamente a la base de datos.

---

## 🎨 Frontend (Next.js)

### 📁 Estructura principal

src/
├─ pages → Páginas de la aplicación
├─ components → Componentes reutilizables organizados por dominio
├─ core → Estado global (Context API)
├─ api → Capa de comunicación con el backend
├─ styles → Estilos globales y específicos
└─ mocks → Datos simulados para desarrollo

---

## 📄 Pages

Las páginas representan **acciones del usuario**, no componentes técnicos:

- `/` → Home. Página principal con el listado de donuts.
- `/donuts/[id]` → Detalle de un donut (ver, editar y eliminar).
- `/create` → Creación de un nuevo donut.
- `/favorites` → Listado de donuts favoritos.
- `/contact` → Página informativa.

El layout común (navbar y contenedor principal) se centraliza en `_app.js` para evitar duplicación de código.

---

## 🧩 Components

Los componentes están organizados por **dominio funcional**, no por tipo técnico:

- **Donuts**
  - DonutListComponent
  - DonutItemComponent
  - DonutDetailComponent
  - CreateDonutFormComponent
  - EditDonutFormComponent

- **Favorites**
  - FavoritesListComponent
  - FavoritesItemComponent

- **Navbar**
  - NavBarComponent

Cada componente tiene una única responsabilidad.  
Los componentes visuales no contienen lógica de negocio ni llamadas directas al backend.

---

## 🌍 Estado global (`core/`)

Se utiliza **Context API** únicamente cuando el estado es realmente compartido entre varias páginas.

- **FavoritesContext**  
  Gestiona el estado global de favoritos, ya que se usa en Home, Favorites y DonutItem.

- **DonutsContext**  
  Centraliza lógica relacionada con donuts cuando es necesario.

El estado global se gestiona mediante Providers, que actúan como **fuente única de verdad** y evitan estados inconsistentes.

---

## 🔌 API Frontend (`api/`)

La carpeta `api` abstrae completamente las llamadas HTTP al backend.

- `DonutsApi.js` → CRUD completo de donuts.
- `DonutsFavoritesApi.js` → Gestión de favoritos.

Los componentes y páginas **no usan `fetch` directamente**, lo que desacopla la UI del backend y facilita el mantenimiento.

---

## 🎨 Estilos

Los estilos están organizados según su alcance:

- `globals.css`  
  Estilos globales: tipografía, colores base, botones y reset general.

- `layout.module.css`  
  Layout común de la aplicación (contenedor, márgenes y ancho máximo).

- `*.module.css`  
  Estilos encapsulados por componente o página.

Esta separación evita colisiones de estilos y facilita la escalabilidad del proyecto.

---

## 🧪 Mocks

La carpeta `mocks` contiene datos simulados con la **misma estructura que el backend real**.  
Se utilizó para desarrollar y probar la interfaz sin depender del servidor desde el inicio del proyecto.

---

## 🧠 Backend (Node.js + Express)

El backend expone una **API REST** y actúa como fuente única de datos.

### 📁 Estructura

src/
├─ config → Configuración (base de datos)
├─ routes → Definición de endpoints
├─ controllers → Orquestación de peticiones HTTP
├─ services → Lógica de negocio
├─ models → Modelos de datos
└─ index.js → Punto de entrada del servidor

---

## 🍩 Recurso Donut

Modelo principal del sistema:

{
name: String,
price: Number
}

Operaciones disponibles:

- Obtener todos los donuts
- Obtener donut por id
- Crear donut
- Editar donut
- Eliminar donut

---

## ⭐ Recurso Favorites

Los favoritos son un **recurso independiente**, no un atributo del donut:

{
donutId: ObjectId
}

Esto permite:

- Evitar duplicar información
- Mantener el modelo de datos normalizado
- Poblar la información del donut solo cuando es necesario

---

## 🔄 Flujo Frontend ↔ Backend

Ejemplo al añadir un favorito:

1. El usuario pulsa “Añadir a favoritos”.
2. El componente llama al Context.
3. El Provider llama a la función de la API.
4. La API realiza la petición HTTP al backend.
5. El backend guarda el favorito.
6. El frontend vuelve a solicitar los favoritos.
7. El backend responde con datos populateados.
8. La interfaz se actualiza automáticamente.

El frontend **nunca asume el estado final sin confirmarlo con el backend**.

---

## 🧠 Decisiones clave del proyecto

- Separación estricta de responsabilidades.
- Uso de Context solo cuando el estado es realmente compartido.
- API desacoplada de la UI.
- Modelado correcto de favoritos como recurso independiente.
- Organización de estilos por alcance.
- Arquitectura pensada para ser explicada y mantenida.

---

## 👤 Autora

Desarrollado por **lidi** como proyecto final de React / Full‑Stack.
