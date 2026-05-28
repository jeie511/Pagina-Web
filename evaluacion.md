**Evaluación: jeie511 / Pagina-Web**

**Estado:** Evaluable con incumplimiento de requisito obligatorio

**Nota:** 6.00/10

**Desglose:**
- Ejecución y estabilidad: 15/20
- Front-end: 10/15
- Back-end: 0/15
- Funcionalidades: 12/20
- Responsive: 8/10
- Tipografías: 4/5
- Animación: 3/5
- Documentación: 5/10
- Repositorio: 3/5
**Funcionalidades indicadas:**
- Hero slider automático.
- Modal de cookies con persistencia en `localStorage`.
- Carrusel/selector de vídeos destacados.
- Filtro de luchadores.
- Filtro de escenarios.
- Modal de vista ampliada para escenarios.
- Páginas de detalle de luchador con parámetros por URL.
- Sistema de login/registro local con `users.json`, `localStorage` y `sessionStorage`.

**Resumen técnico:**
La web carga correctamente en local y el proyecto tiene bastante contenido repartido en varias páginas: inicio, luchadores, escenarios, música, vídeos, compra, idioma y sesión. El JavaScript pasa validación sintáctica y se ven funcionalidades útiles como filtros, navegación entre páginas, slider, modales y detalles dinámicos de luchadores.

El frontend está bien resuelto para el objetivo de la landing. Tiene una estética reconocible de Smash/Nintendo, muchos elementos visuales y una estructura amplia. No es una interfaz especialmente compleja a nivel técnico, pero sí está trabajada y tiene bastante contenido.

El backend es el punto débil. No hay servidor real ni base de datos: el login funciona con un `users.json` estático y almacenamiento local del navegador. Como práctica de front está bien, pero no debe considerarse un backend seguro ni persistente entre usuarios. Por rúbrica, esto incumple el requisito obligatorio de back-end funcional.

**Puntos fuertes:**
Enhorabuena por el volumen de contenido y por haber conectado varias páginas con una misma identidad visual. Los filtros de luchadores/escenarios y la ficha dinámica de luchador aportan valor real a la web.

**Aspectos a mejorar:**
El sistema de usuarios debería pasar a un backend real. También convendría reducir estilos inline, mejorar algunos textos sin tildes o caracteres raros y simplificar algo la estructura.

**Retroalimentación:**
Buen trabajo en la parte visual y de interacción. Se nota esfuerzo en construir una web grande y navegable. La bajada se debe a que el login parece una funcionalidad de usuario, pero no está sostenido por backend real. Para dar el siguiente salto, tocaría convertirlo en una funcionalidad backend real y cerrar mejor la seguridad y persistencia de datos.
