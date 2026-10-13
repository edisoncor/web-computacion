# Plantilla de carrera · Computación UNL

Prototipo estático adaptable a distintas carreras. Abra `index.html` en un navegador, o ejecute:

```sh
python3 -m http.server 8000
```

Luego visite http://localhost:8000.

- `index.html`: estructura basada en la imagen proporcionada.
- `styles.css`: identidad institucional, diseño adaptable y estados visuales.
- `carrera-data.js`: ficha, perfiles, asignaturas y rutas editables.
- `app.js`: búsqueda, filtros, selección de asignaturas, prerrequisitos, itinerarios y menú móvil.
- `assets/`: fotografías de la referencia institucional; no representan laboratorios específicos de Computación.

La malla se transcribió de `prototipo/Malla curricular propuesta.pdf`. Incluye nueve ciclos, 135 créditos y 6480 horas según los totales del documento. Los créditos por asignatura conservan el redondeo original. Las horas de aprendizaje y las de prácticas/vinculación se muestran por separado. Los itinerarios son Software y Aplicaciones, además de la ruta sin itinerario.

**Pendiente de validación académica:** el PDF indica E2C4A4 como prerrequisito de E2C3A1 y E2C3A1 como prerrequisito de E2C4A4, generando una dependencia circular. No se corrigió silenciosamente. El campo modalidad del encabezado del PDF no tiene valor; título, modalidad, jornada y campus quedan por confirmar. Las noticias, docentes y contactos no se inventaron.

Para adaptar otra carrera, cambie los datos en `carrera-data.js`, los textos de presentación en `index.html`, los documentos y fotografías. Las asignaturas se renderizan a partir de datos independientes del diseño. El número de ciclos y los totales de esta implementación corresponden a Computación y deben ajustarse al reutilizarla para otra carrera.

## Integración con el prototipo institucional

`index.html` carga directamente los dos CSS originales de `prototipo/Index _ UNL Web Theme_files/`, seguidos de `styles.css`, que contiene la adaptación de carrera. La cabecera, navegación institucional, escudo, búsqueda, pie de página y mapa proceden del HTML proporcionado. También se reutilizan las clases `boton`, `unl-btn-descarga` y `unl-about__container`, las variables de diseño del tema y `a11yUnlTools.js` con sus dependencias locales.

`theme-integration.js` adapta el menú móvil y sus submenús a una página estática, con controles de teclado y estados accesibles. El paquete JavaScript general de Drupal no se carga porque depende del CMS; se conservan los enlaces institucionales originales. No elimine ni renombre la carpeta de recursos del prototipo: la plantilla la utiliza directamente.

## Detalle académico de asignaturas

Cada asignatura incluye una tabla ACD/APE/AA con horas IDP e IDV, T.H, PP, VS y carga total. Las siglas incluyen tooltips solo con su definición. El resumen general se presenta debajo de la malla como un panel visual independiente, con componentes, unidades curriculares, asignaturas en línea y proyectos de integración de saberes. La distribución de las opciones de itinerario se toma de la casilla común del ciclo, pues el documento no repite ese desglose por opción. La suma de los componentes de las 43 asignaturas de cada ruta coincide con las 6480 horas de la malla (incluyendo PP y VS).

La malla dibuja conexiones SVG desde cada prerrequisito hacia la asignatura dependiente. Seleccionar una materia resalta en azul sus prerrequisitos y en verde las materias que la requieren. El control Mostrar conexiones permite ocultarlas. Las líneas se recalculan al filtrar, cambiar de itinerario o redimensionar la página y acompañan el desplazamiento horizontal de la malla.
