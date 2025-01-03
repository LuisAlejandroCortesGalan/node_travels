# Ejercicio de Crear Páginas a Través de JSON en Node.js

Este proyecto demuestra cómo utilizar Node.js para generar páginas HTML dinámicamente a partir de datos contenidos en un archivo JSON. El objetivo del ejercicio es practicar el uso de Node.js para manipular datos y generar contenido dinámico en una página web.

## Características

- Lectura de datos desde un archivo JSON (`travels.json`).
- Creación de páginas HTML dinámicas basadas en los datos del archivo JSON.
- Uso de Node.js y el sistema de archivos para gestionar y renderizar contenido HTML.
- Estilos básicos aplicados a la página mediante CSS (`estilos.css`).

## Archivos del Proyecto

1. **package.json**: Archivo de configuración de Node.js con las dependencias necesarias.
2. **travels.js**: Script de Node.js que maneja la lectura del archivo JSON y la creación de las páginas HTML.
3. **travels.json**: Archivo JSON que contiene los datos utilizados para generar las páginas.
4. **temp.html**: Plantilla HTML generada con los datos del archivo JSON.
5. **estilos.css**: Estilos básicos aplicados a las páginas generadas.
6. **node_enunciado.txt**: Descripción del ejercicio y los objetivos del proyecto.

## Requisitos

Este proyecto requiere tener instalado Node.js y npm. Si no los tienes, puedes instalarlos desde [aquí](https://nodejs.org/).

## Instrucciones de Uso

1. **Clona el repositorio**:

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```

2. **Instala las dependencias**:

    En la raíz del proyecto, ejecuta el siguiente comando:

    ```bash
    npm install
    ```

3. **Ejecuta el proyecto**:

    Para correr el proyecto, utiliza el siguiente comando:

    ```bash
    node travels.js
    ```

4. **Accede a la página generada**:

    El script generará una página HTML dinámica basada en los datos del archivo `travels.json`, la cual puedes visualizar en tu navegador.

## Ejemplo de Datos en `travels.json`

El archivo `travels.json` tiene una estructura similar a la siguiente:

```json
[
  {
    "destination": "Paris",
    "country": "France",
    "duration": "7 days",
    "price": "1000"
  },
  {
    "destination": "Tokyo",
    "country": "Japan",
    "duration": "5 days",
    "price": "1200"
  }
]
