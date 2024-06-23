# marvel-character

https://marvel-characters-production.up.railway.app

## Ejecución en modo desarrollo

`npm run dev` para lanzar la aplicación en modo desarrollo.

## Compilación para producción

Tenemos dos configuraciones distintas para generar el bundle de producción:
`npm run build` lo genera como se pide, con los assets concatenados en un archivo.
`npm run build:split` lo genera en varios archivos, utilizando lazy loading para cargarlos.

## Explicación

Estructura muy sencilla dividiendo la aplicación en distintas páginas (rutas), cada una de ellas tiene su carpeta y dentro tenemos los componentes, hooks, etc propios de cada ruta.

Los archivos que pueden ser invocados desde varias de estas rutas, son definidos fuera del directorio pages (en el primer nivel del proyecto).

Para el testing he decidido usar React Testing Library cambiando su test runner por defecto de Jest a Vitest.

Los test que he realizado los he hecho para testear funcionalidades básicas, he dejado algunos ejemplos testeando tanto hooks como componentes.
