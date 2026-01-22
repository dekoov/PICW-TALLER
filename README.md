# Proyecto Base (Vite + React)

Este proyecto es la base estructural para el Taller Está construido con **Vite**, **React Router DOM** y **Bootstrap**, siguiendo una arquitectura escalable y limpia.

## Requisitos Pr

* Tener instalado **Node.js** (versión 16 o superior recomendada).
* Gestor de paquetes `npm` (viene con Node).

## Instalación para que corra

Para evitar errores de "archivos no encontrados", sigue estos pasos estrictamente:

1.  **Descargar el proyecto:** Clona el repositorio o descarga el `.zip` y descomprímelo.
2.  **Entrar a la carpeta:** Abre tu terminal y asegúrate de estar dentro de la carpeta del proyecto (donde ves el archivo `package.json`).
    ```bash
    cd nombre-de-la-carpeta
    ```
3.  **Instalar dependencias:** Ejecuta el siguiente comando para descargar `node_modules` (Bootstrap, Router, etc.):
    ```bash
    npm install
    ```
4.  **Correr el proyecto:**
    ```bash
    npm run dev
    ```

> **Nota:** Si al correr `npm run dev` ves una URL como `http://localhost:5173`, está funcionando correctamente

---

## Estructura del Proyecto (Clean Code)

Para mantener el orden y cumplir con la rúbrica, seguir la estructura al agregar sus partes:

```text
src/
├── app/
│   └── Router.jsx       #  AQUÍ se registran las nuevas rutas (URLs)
├── components/          # Componentes pequeños reutilizables (Botones, Cards, etc.)
├── layouts/             # La estructura maestra (Header y Footer están aquí)
├── pages/               #  AQUÍ deben crear sus nuevas vistas (Login, Dashboard, etc.)
├── main.jsx             # Punto de entrada (Configurado con Bootstrap y Router)
└── ...

Se encuentran comentarios utiles en toda la estreuctura del proyecto
