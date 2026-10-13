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

**Corrección académica proporcionada por el usuario:** Estructura de Datos (E2C3A1) requiere Programación Orientada a Objetos (E2C2A4). Esta corrección sustituye la referencia E2C4A4 del PDF y elimina la dependencia circular con Complejidad Computacional. El Anexo 4 completa título, modalidad presencial y campus La Argelia. La jornada concreta depende de la oferta. Los docentes y correos se incorporaron del listado del usuario; los proyectos y publicaciones se incorporaron del listado depurado del usuario, con fuentes oficiales.

Para adaptar otra carrera, cambie los datos en `carrera-data.js`, los textos de presentación en `index.html`, los documentos y fotografías. Las asignaturas se renderizan a partir de datos independientes del diseño. El número de ciclos y los totales de esta implementación corresponden a Computación y deben ajustarse al reutilizarla para otra carrera.

## Integración con el prototipo institucional

`index.html` carga directamente los dos CSS originales de `prototipo/Index _ UNL Web Theme_files/`, seguidos de `styles.css`, que contiene la adaptación de carrera. La cabecera, navegación institucional, escudo, búsqueda, pie de página y mapa proceden del HTML proporcionado. También se reutilizan las clases `boton`, `unl-btn-descarga` y `unl-about__container`, las variables de diseño del tema y `a11yUnlTools.js` con sus dependencias locales.

`theme-integration.js` adapta el menú móvil y sus submenús a una página estática, con controles de teclado y estados accesibles. El paquete JavaScript general de Drupal no se carga porque depende del CMS; se conservan los enlaces institucionales originales. No elimine ni renombre la carpeta de recursos del prototipo: la plantilla la utiliza directamente.

## Detalle académico de asignaturas

Cada asignatura incluye una tabla ACD/APE/AA con horas IDP e IDV, T.H, PP, VS y carga total. Las siglas incluyen tooltips solo con su definición. El resumen general se presenta debajo de la malla como un panel visual independiente, con componentes, unidades curriculares, asignaturas en línea y proyectos de integración de saberes. La distribución de las opciones de itinerario se toma de la casilla común del ciclo, pues el documento no repite ese desglose por opción. La suma de los componentes de las 43 asignaturas de cada ruta coincide con las 6480 horas de la malla (incluyendo PP y VS).

La malla dibuja conexiones SVG desde cada prerrequisito hacia la asignatura dependiente. Seleccionar una materia resalta en azul toda la ruta de prerrequisitos directos e indirectos, hasta el inicio cuando corresponde, y en verde las materias que la requieren directamente. La búsqueda recorre todas las ramas y evita bucles ante dependencias circulares del PDF. El control Mostrar conexiones permite ocultarlas. Las líneas se recalculan al filtrar, cambiar de itinerario o redimensionar la página y acompañan el desplazamiento horizontal de la malla.

## Proyectos de Investigación y Vinculación

`researchProjects` contiene dos proyectos (IA institucional y arbolado urbano interdisciplinario) y una investigación documentada en procesamiento de lenguaje natural, cuyo registro como proyecto institucional independiente no se da por confirmado. `communityProjects` contiene un proyecto de inclusión lectora. `communityResults` muestra E-Reader como resultado asociado, sin duplicar el conteo de proyectos. `publications` alimenta una sección independiente de producción científica con dos artículos de CEDAMAZ. Los enlaces llevan a fuentes oficiales y no contienen parámetros de seguimiento.

Se verificaron en fuentes UNL/CEDAMAZ el marco de IA, la participación de Computación en arbolado, la investigación de lenguaje natural, E-Reader (30 estudiantes y primer lugar OdiseIA4Good 2026) y las publicaciones. El PDF del repositorio de inclusión lectora no pudo recuperarse con la herramienta web; se conserva el enlace y la atribución del listado proporcionado por el usuario. Los periodos no se convierten en afirmaciones de vigencia actual.

## Equipo de la carrera

El directorio incorpora los 19 docentes y correos de la imagen proporcionada, con Edison Leonardo Coronel Romero como director. Incluye además a Elisa Beatriz Orellana Bravo (secretaría) y a Ramiro René Rivera Guaman, David Steven Intriago Camacho y Alba Nieto Fernandez (técnicos docentes). Sus correos no fueron proporcionados y se muestran por confirmar. Los datos se editan en `team` dentro de `carrera-data.js`; el directorio permite búsqueda por nombre/correo y filtros por función.

Las fichas del equipo admiten retratos circulares mediante `photo` y `photoPosition`. Las imágenes pueden guardarse en `assets/equipo/`; consulte su README para configurar las rutas y el encuadre. Sin fotografía se muestra un avatar con iniciales, y una imagen que no carga también vuelve a ese estado.

## Contenido del Anexo 4

Se incorporaron la ficha académica, perfil profesional, ámbitos laborales, competencias transversales, dos opciones de titulación, ruta de prácticas (240 horas laborales y 120 de servicio comunitario), línea y sublíneas de investigación, ambientes de aprendizaje y descarga del anexo. El sitio mantiene la identificación de propuesta: los campos de aprobación del anexo están vacíos. La denominación del segundo itinerario difiere (Aplicaciones en la malla; Sistemas en el anexo) y se señala sin modificar la malla. No se incorporaron números de identificación ni teléfonos personales del documento.

## Grupos de investigación

`researchGroups` incorpora GITIC e IAforGood con la información proporcionada por el usuario. Las tarjetas abren un panel dentro de la página con presentación, líneas, integrantes, antecedentes/resultados, publicaciones y colaboración. Para IAforGood se incorpora el registro indicado (31 de julio de 2026, UNL-IAforGood-28), ocho integrantes registrados y cinco de Computación. Solo se identifica nominalmente al coordinador; no se inventan los nombres restantes. Los documentos de propuesta y registro mencionados en el mensaje no estaban presentes en el directorio al realizar la integración.

Los proyectos citados se presentan como antecedentes y E-Reader como producto referenciado. Los indicadores de proyectos activos, publicaciones y redes quedan pendientes hasta disponer de datos atribuibles al grupo. Los enlaces internos restablecen el filtro del listado de proyectos antes de navegar a la ficha correspondiente.

## Acabado visual

Se retiraron las notas editoriales y de revisión de la interfaz; la trazabilidad y las diferencias entre fuentes se conservan en este README y los datos. No se muestran cifras o contactos desconocidos ni paneles sin contenido. La navegación de carrera es fija y las tarjetas, títulos y espacios tienen un ritmo común. Noticias usa las fuentes oficiales de E-Reader y procesamiento de lenguaje natural. La malla incorpora las correcciones de prerrequisitos proporcionadas por el usuario y mantiene el recorrido completo de sus rutas.

## Modal del equipo

Cada tarjeta tiene un botón accesible que abre `team-profile-dialog`, con retrato, cargo, institución, unidad académica y correo. Los enlaces de correo de la tarjeta siguen siendo independientes. El modal se cierra con el botón, Escape o clic en el fondo y devuelve el foco a la tarjeta. Las secciones opcionales `biography`, `education`, `areas` y `profileLinks` permiten ampliar el perfil sin mostrar campos vacíos. Los proyectos y grupos se relacionan por coordinación nominal; `publicationIds` vincula únicamente publicaciones con autoría documentada. No se inventaron biografías ni títulos académicos.
