# Taller 2 - Ecommerce Tienda UCN (Frontend)

Este proyecto corresponde al Frontend de una aplicación web ecommerce desarrollada en **Angular**. Consume una **API REST** desarrollada en .NET (https://github.com/Intro-Desarrollo-Web-Movil/TallerIDWM). Este repositorio contiene el código fuente del Frontend para su despliegue y uso local.

---

## Requerimientos

- **[Node.js](https://nodejs.org/)** (Incluye npm)
- **[Angular CLI](https://angular.io/cli)**
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[Flowbite](https://flowbite.com/)**

---

## Clonar el Repositorio

1. Dentro de una carpeta donde desees alojar el proyecto, abre una terminal o consola y escribe el comando para abrir Visual Studio Code:
   ```bash
   code .
   ```

2. Clona el repositorio desde la Terminal de Visual Studio Code (CTRL + J) con el siguiente comando:
   ```bash
   git clone https://github.com/Intro-Desarrollo-Web-Movil/TallerIDWM-Frontend
   ```

---

## Restaurar el Proyecto

1. Navega a la carpeta del proyecto:

   ```bash
   cd TallerIDWM-Frontend
   ```

2. Instala las dependencias necesarias ejecutando el siguiente comando:

   ```bash
   npm install
   ```

---

## Ejecutar el Proyecto

Se necesita ejecutar en primer lugar el proyecto de API REST para que sea consumida por este proyecto. Enlace de la API REST en .NET (leer README de dicho proyecto para ejecutar): https://github.com/Intro-Desarrollo-Web-Movil/TallerIDWM

Una vez con la API REST en ejecución, siga estos pasos para ejecutar este proyecto:

1. Inicia el servidor de desarrollo con el siguiente comando:

   ```bash
   ng serve -o
   ```

2. Esto abrirá automáticamente el proyecto en tu navegador en la URL:

   ```
   http://localhost:4200
   ```

---

## Descripción del Proyecto

TO DO

### Tecnologías Utilizadas

- **Angular**: Framework principal para el desarrollo del Frontend.
- **Tailwind CSS**: Framework para estilizar la aplicación de forma rápida y responsiva.
- **Flowbite**: Biblioteca para componentes interactivos y UI.
- **Figma**: Herramienta utilizada para el diseño del prototipo.

### Decisiones de Diseño

TO DO

1. **Validaciones de Campos**:
   - **Name**: TO DO

2. **Ejecución de Consultas**:
   - El Frontend utiliza servicios de Angular (`HttpClient`) para comunicarse con la **API REST**. Las solicitudes HTTP realizan operaciones CRUD sobre la base de datos de usuarios y productos.

### Estructura del Proyecto

- **`src/app/tiendaucn/components`**: Componentes reutilizables como formularios y barra de navegación.
- **`src/app/tiendaucn/pages`**: Páginas principales como listados de usuarios, productos, inicio de sesión, etc.
- **`src/app/tiendaucn/services`**: Servicios que interactúan con el backend.

---
