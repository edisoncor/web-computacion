# Fotografías del equipo

Coloque aquí las fotografías de los integrantes. En `carrera-data.js`, configure el campo `photo` de cada persona, por ejemplo:

```js
"photo": "assets/equipo/edison-coronel.jpg",
"photoPosition": "center top"
```

Las fichas recortan la fotografía en un círculo con `object-fit: cover`. `photoPosition` permite ajustar el encuadre. Si `photo` es `null` o la imagen no se puede cargar, se muestran las iniciales. No es necesario modificar HTML o CSS para añadir fotografías.
