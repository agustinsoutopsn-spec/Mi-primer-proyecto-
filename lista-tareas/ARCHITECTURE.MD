# Plan de construcción — App de Lista de Tareas

## Stack
- HTML5 + CSS3 + JavaScript vanilla
- Persistencia: localStorage
- 3 archivos: `index.html`, `styles.css`, `app.js`

---

## Pasos

### Paso 1: Crear `index.html` (estructura)
- Esqueleto HTML5 con `<head>` y `<body>`
- Título: "Lista de Tareas"
- Contenedor principal: `<div id="app">`
- Formulario: `<input>` + `<button>` para agregar tarea
- Lista: `<ul id="task-list">` donde se renderizarán las tareas
- Link a `styles.css` y `<script src="app.js">`

### Paso 2: Crear `styles.css` (estilos)
- Reset básico o normalización mínima
- Estilos para el contenedor principal (centrado, ancho máximo)
- Estilos para el input, botón, y lista de tareas
- Estilos para tarea completada (tachado, color gris)
- Transiciones/efectos simples

### Paso 3: Crear `app.js` (lógica)
- Seleccionar elementos del DOM
- Funciones:
  - `loadTasks()` — leer tareas desde localStorage
  - `saveTasks(tasks)` — persistir tareas en localStorage
  - `renderTasks()` — dibujar la lista en el DOM
  - `addTask(text)` — agregar nueva tarea
  - `toggleTask(id)` — marcar/desmarcar como completada
  - `deleteTask(id)` — eliminar tarea
- Event listener en el formulario para `submit`
- Event delegation en la lista para toggle y delete
- Inicializar: `loadTasks()` → `renderTasks()`

### Paso 4: Crear `.gitignore` (opcional pero recomendado)
- Excluir `pwd`, `pwd.pub`, y cualquier otro archivo sensible

---

## Riesgos identificados

1. **Seguridad**: Hay claves SSH (`pwd`/`pwd.pub`) en el repo. **Deben eliminarse del historial y rotarse**.
2. **Sin pruebas**: No hay tests. Como es JS vanilla, se pueden probar manualmente en el navegador.
3. **localStorage**: No funciona si el usuario navega en modo privado o si el almacenamiento está lleno. Manejar errores con `try/catch`.
4. **XSS**: Al insertar tareas en el DOM con `innerHTML`, un texto como `<script>alert('xss')</script>` se ejecutaría. Usar `textContent` en lugar de `innerHTML`.
5. **Compatibilidad**: localStorage está soportado en todos los navegadores modernos, pero conviene verificar su disponibilidad.
6. **Persistencia**: No hay sincronización con servidor. Los datos solo existen localmente en el navegador.
