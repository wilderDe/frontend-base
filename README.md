# Frontend Base - NextJS/ReactJS

Este proyecto es compatible con el
actual [Backend Base](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-nestjs-base-backend) creado con
NestJS en la
rama [Develop](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-nestjs-base-backend/-/tree/develop)

## Tecnologías empleadas

- [NextJS](https://nextjs.org), framework sobre ReactJS.
- [ReactJS](https://es.reactjs.org) como librería para desarrollo frontend.
- [MUI (Material UI)](https://mui.com), librería de componentes UI para ReactJS.
- [React Hook Forms](https://react-hook-form.com), librería con Hooks para la gestión de formularios
- [Axios](https://axios-http.com), para el manejo de peticiones HTTP.
- [ESLint](https://eslint.org), para examinar el código en busca de problemas.

## Recomendaciones

Para usar este proyecto como base de un nuevo proyecto, debe seguir los siguientes pasos:

- Crear nuevo proyecto en [Gitlab](https://gitlab.agetic.gob.bo/projects/new) y clonarlo en local
- Añadir este proyecto como otro origen, ejecutar dentro del nuevo proyecto:

```
git remote add origin2 git@gitlab.agetic.gob.bo:agetic/agetic/proyectos-base/agetic-next-base-frontend.git
```

- Descargar los commits desde el 2.º origen, ejecutar

```
git pull origin2 master --allow-unrelated-histories
```

## Estructura general

Para la creación de la estructura general del proyecto base se hizo uso de `Next.js CLI`

## Utilidades

El proyecto cuenta con utilidades que podrían que pueden aplicarse de según el caso:

| Utilidad           | Descripción                                                                                                                             | Ejemplo                                                                                                                       |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| Cookies            | Utilidad wrapper que ayuda a leer/guardar cookies                                                                                       | `guardarCookie('token','mi-token' )` guarda el valor de la cookie                                                             |
| Fechas             | Utilidad wrapper de `dayjs` que puede validar y parsear fechas                                                                          | `formatoFecha('1994-07-05', '05/07/1994')`, retorna el valor de la fecha en nuevo formato                                     |
| Imprimir           | Utilidad wrapper de `console.log` que sirve para mostrar mensajes en consola con el nombre de la función que lo invoca segun el entorno | `imprimir('hola mundo')`, imprime `🖨 funcionSaludo -> hola mundo`                                                            |
| InterpreteMensajes | Utilidad que ayuda a extraer mensajes de respuesta, pueden ser `Exception`, `strings`, objetos que contengan `message` o `mensaje`      | `interpretarMensaje({mensaje: 'hola mundo'})` retorna `Hola Mundo`                                                            |
| Alerta             | Hook que muestra alertas de confirmación, error, advertencía o información                                                              | `Alerta({mensaje: 'Hola mundo', variant: 'success'})` mostrará una Alerta en color verde                                      |
| Token              | Utilidad que valida la caducidad de un token                                                                                            | `verificarToken('mi-token')` el token devolverá `true` o `false` si caduco o no                                               |
| AlertDialog        | Utilidad que muestra una alerta con acciones según el caso                                                                              | `<AlertDialog isOpen={mostrarAlerta} titulo={'Alerta'}, texto={'Hola mundo'}><Button onClick={'cerrarAlerta'}></AlertDialog>` |
| Servicios          | Utilidad wrapper de `Axios` con funciones para hacer peticiones HTTP                                                                    | `await Servicios.get({url: 'localhost:3000', })`                                                                              |

## Navegación

Todas las rutas se encuentran en la carpeta `pages` (si, así de simple)

## Hooks (ciclo de vida)

Funciones de React que permiten crear/acceder al estado y ciclo de vida de componentes, las usadas en el proyecto son:

- useContext, es un Hook que nos permite acceder al contexto de un Provider
- useState, es un Hook que permite añadir el estado de React a un componente de función
- useEffect, es un Hook que permite controlar y decidir cuándo queremos que se ejecute un código concreto

## Componentes

Todos los componentes para uso general se encuentran en la carpeta `common/` y los componentes de uso específico por
módulo se encuentran en `modules/`.

## Archivos estáticos

Los archivos estáticos (imágenes, etc.) se encuentran en la carpeta `public/`.

### Iconos

Los iconos de los menús son de [material icons](https://fonts.google.com/icons).

## Sistema de diseño

Para cambiar los colores del sistema, se debe editar los archivos `theme/light-theme.ts` o `theme/dark-theme.ts` según
corresponda

Para generar paletas de color, se sugiere usar [Material Theme Builder](https://m3.material.io/theme-builder#/custom)

En general se recomienda seguir la regla `60 - 30 - 10` para el uso de colores

Para más información, se recomienda leer él
artículo [How the 60-30-10 rule saved the day](https://uxdesign.cc/how-the-60-30-10-rule-saved-the-day-934e1ee3fdd8)

## Instalación

Para instalar la aplicación se recomienda revisar el siguiente documento:

> [INSTALL.md](INSTALL.md)

### Ejecutar en modo desarrollo

```
npm run dev
```

### Compilar para producción

```
npm run build
```

### Ejecutar test (e2e)

Los test e2e están escritos en [Playwright](https://playwright.dev)

```
npm run test:e2e
```

Para ver la ejecución de los test, modificar el
archivo [test/e2e/playwright/env.sample](test/e2e/playwright/config/.env.sample) y definir
variables `headless : false` y `slowMo : 400`

Para ejecutar un solo test

```
npx playwright test test/e2e/playwright/usuarios.spec.ts
```

## Documentación

La documentación de los componentes fue elaborada
usando [Storybook](https://storybook.js.org/docs/react/get-started/introduction)

Para generar la documentación ejecutar el siguiente comando:

```bash
npm run storybook
```

## Changelog

1. Generar tag de la versión

   > Cambiar el número de versión en archivo `package.json`

2. Generar tag y archivo CHANGELOG

   ```bash
   # Versión mínima, cambia de 1.1.1 a 1.1.2
   npm run release -- --release-as patch
   ```

   ```bash
   # cambio de versión, cambia de 1.1.1 a 1.2.0
   npm run release
   ```

3. Guardar los tags generados

   ```bash
   git push --follow-tags origin master
   ```
