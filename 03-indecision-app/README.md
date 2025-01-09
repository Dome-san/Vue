# indecision-app

Esta es una aplicación de chat interactivo desarrollada con **Vue 3** y **TypeScript**. Simula un chat donde los usuarios pueden enviar mensajes y recibir respuestas automáticas desde la API de [yesno.wtf](https://yesno.wtf/api).

## Características

- **Mensajería interactiva:**

  - Los usuarios pueden escribir y enviar mensajes.
  - Si el mensaje termina con un signo de interrogación (`?`), se obtiene una respuesta automatizada de la API.

- **Interfaz dinámica:**

  - Mensajes diferenciados por usuario (derecha) y respuestas (izquierda).
  - Se adjuntan imágenes en las respuestas (proporcionadas por la API).

- **Reacciones:**

  - Los mensajes pueden recibir reacciones como 👍, ❤️, 😂, 😢.

- **Indicador de carga:**

  - Mientras se espera la respuesta de la API, se muestra un indicador visual.

- **Desplazamiento automático:**
  - El chat se desplaza automáticamente hacia el último mensaje enviado.

## Componentes principales

- **`ChatMessages`**: Muestra la lista de mensajes con auto-desplazamiento.
- **`MessageBox`**: Entrada de texto para que el usuario escriba mensajes.
- **`ChatBubble`**: Representación visual de cada mensaje.
- **`ReactionBox`**: Opciones para agregar reacciones a los mensajes.
- **`SvgLoading`**: Indicador de carga animado.

## Lógica principal

La lógica de la aplicación está centralizada en el composable `useChat`, que maneja:

- La lista de mensajes (`messages`).
- El estado de carga (`isLoading`).
- La lógica para obtener respuestas de la API.

## Uso de la API

Se usa la API de [yesno.wtf](https://yesno.wtf/api) para obtener:

- Respuestas automáticas: "yes", "no" o "maybe".
- Imágenes asociadas a las respuestas.

## Dependencias

- **`typescript`**: Lenguaje tipado que mejora la escalabilidad del código.
- **`eslint`**: Herramienta para analizar y encontrar errores en el código.
- **`prettier`**: Formateador de código.
- **`tailwindcss`**: Framework de diseño CSS basado en utilidades.
- **`vite`**: Herramienta de construcción rápida para aplicaciones modernas.
- **`vite-plugin-vue-devtools`**: Extensión para facilitar la depuración en Vue.

## Cómo ejecutar el proyecto

1. Copia o abre este repositorio.
2. En la terminal que usas:

   npm run dev
