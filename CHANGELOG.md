# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.10.0](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/compare/v1.9.2...v1.10.0) (2023-07-28)


### ⚠ BREAKING CHANGES

* al reorganizar los componentes se cambiaron varias importaciones
* Se reemplaza "BotonAgregar" por "IconoBoton"
* será necesario llamar a la API /cambiarRol para obtener un nuevo token con otro rol

### Features

* añadida API para cambio de rol activo en token ([42a06a0](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/42a06a010763947267ee4c7f949ce84a53a4b62e))
* añadida función de adición y verificación de permisos personalizados en políticas de Casbin ([e5df5c9](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/e5df5c9b1325ac6dd9c96d152ca247d646feda71))
* se agrego opción de abrir y cerrar secciones de módulos en Sidebar ([2e03d98](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/2e03d983f2da23d82d2ea1fa4c524e92fab33910))
* se reoganizaron los componentes en grupos, dada la cantidad de los mismos ([eb323bf](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/eb323bf052294a6a4226eb182c1e7719350794a5))


### Bug Fixes

* añadido token en petición de refresh token ([2ad6378](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/2ad6378195c24dbcae489eeec89592669c675a12))
* corrección de un error que hacía que el texto de los botones siempre estuviera en mayúscula ([e3013ff](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/e3013ff3b5be71033a4cf0b81cd9b6585bbb6a56))
* corregido error en tamaño de iconos de @mui/material/Icon aplicando propiedad style ([84371de](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/84371decc9017bd63697d3e26825ce72b81d5e8d))
* eliminado "@mui/icons-material" y reemplazada cada instancia por iconos de "@mui/material/Icon" ([7904198](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/790419870315a7aa6c1a7d6b74e8b14d90a6edab))
* renombrado componente "BotonAgregar" por "IconoBoton" para tener funciones más genéricas ([abbad68](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/abbad686f0cb2d7cf5117d69dc075c85a2038a93))

### [1.9.2](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/compare/v1.9.1...v1.9.2) (2023-07-14)


### Features

* agregando componente personalizable y agrupamiento por fechas TG-40 ([bdf2e52](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/bdf2e521445781714d2b83c890817314a46f9cd7))
* aliminando ordenación de componente bitácora TG-40 ([298230c](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/298230c58da41c70803c6fc167915930559e34ec))
* añadida función para mostrar fechas en español desde una fecha de tipo Date ([ae42e9b](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/ae42e9b01b8b5255dec15958946d969d8e738851))
* eliminando componente contenedor de bitácora TG-48 ([9e1814b](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/9e1814b75fbe26556aec4fb6ffb6a8aff19e181c))
* mejora en FormInputAutocomplete que permite agregar ítems fuera de la lista con su caso de uso ([f55af88](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/f55af88018eb4b2ca68107da1c71da7f53479a74))
* se añade componente para previa de PDF's ([6068a77](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/6068a77d52f97da0c2d60241f371d441aa6d67f6))
* storybook para componente bitacora TG-40 ([d0efcdd](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/d0efcddb2854a271a5a9c2dc7873b3fcee3669a8))


### Bug Fixes

* añadidas propiedades opcionales 'disablePortal' y 'disableScrollLock' para AlertDialog ([f62fa6a](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/f62fa6a3663e6f6f7ee72709e703dd4a40e3d29f))
* añadidas propiedades opcionales 'disablePortal' y 'disableScrollLock' para CustomDialog ([1d38bc3](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/1d38bc3d43d10e4f926ba5c4eb26f44009400e52))
* cambio a versión nuevo de Next Image desde versión Legacy ([21999c1](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/21999c19f8657c8af67bda6c70b7fe2bfc6cdfaa))
* corrección en visualización de vistas,modales y alerts en storybook ([2d4c476](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/2d4c47616a091eefc690d4828ae2f41b69d51f0a))
* mejora en organización de opciones en componente TipTap ([1bff24d](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/1bff24db1188a63a4d327a359750c8225938b8a0))

### [1.9.1](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/compare/v1.9.0...v1.9.1) (2023-07-03)


### ⚠ BREAKING CHANGES

* 'tipo' a 'variante' en BotonAcciones, BotonAgregar y 'seleccionado' en BotonBuscar

### Features

*  storybook para componente FormInputWysiwyg ([7893cad](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/7893cad1fe371dd59733b3c5ea8cfd8974675b61))
* :sparkles: agregando edad minima y edad maxima en modalUsuarios TG-19 ([2e77ff3](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/2e77ff315b1c912c9d6a8da91afca6a0ac73841f))
* :sparkles: agregando variable minDate, maxDate en componente FormInputDate TG-19 ([74fde6e](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/74fde6e79a3316992616bbe923ad36805499dfc0))
* agregado de componente de mapas en storybook ([9565e8c](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/9565e8c1767e73db8aaeb5f74c7773dfdf5b785d))
* agregando tipos de datos en bitacora y su contenedor ([a54962a](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/a54962ad855c8f1ddef2027e9827f4b1c9305ccc))
* añaadido componente autocomplete con opción de selección simple y multiple ([3ffc3e9](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/3ffc3e92dc9796dfe271e4d4ad53fef8da74e68e))
* añadida función de selección multiple de filas para datatable con su respectiva documentación ([d14b2cb](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/d14b2cb1b5b3923d8b3cbb3de06510e146fbf872))
* componente de mapas con buscador ([49b6c9d](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/49b6c9d017019937779ae27d28e14cb44afbe9df))
* componente wysiwyg versión beta ([4fbdcd8](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/4fbdcd8e628f5fbbee77ac9728e2514d49b087ac))
* creación de storybook para bitácora ([be7ca89](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/be7ca89e4fe42b2b426290f95a8a015b04b4a03f))
* creaciónde componentes para visualización de bitácora ([a19f0ed](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/a19f0ed0efb3afbc140e86be63f0f4534e28573d))
* creando nueva historia al componente custom dataTable, historia filtros por columna ([731dbed](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/731dbed43d06eb40c7f897ace3a7567006257b13))
* propiedad sx para componente Icono ([914352f](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/914352f02ffcd758d7839c9a9d8b2709226f9e8c))
* reorganización de archivos Storybook con casos de uso para cada componente personalizado ([f23310d](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/f23310df89a3b3a1f501c7e8a50f4f225e1e240e))
* reorganización de documentación StoryBook compatible con modo oscuro ([d7d6d38](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/d7d6d38590ac9b1169e9d154789a1899da430b3a))


### Bug Fixes

* agregando funcionalidad hover a componente botonAcciones,recive prop hover:bolean opcional ([5b1b9cb](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/5b1b9cba6ed4d8bc0a54e5cc2d5af7e7e5df090c))
* corrección de label en FormInputWysiwyg ([e52916f](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/e52916f5249e56af4567e3c6e3b900296f286f99))
* correcciones visuales y control xss para titap en editable ([ddaef78](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/ddaef782ee3eaa7321595d4f79b403fb6deb43aa))
* eliminada validación de token en petición de sesión ([e82ae28](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/e82ae282b6e258256b1423029591d21d8803d664))
* mejora en la denominación de parámetros para BotonAcciones, BotonAgregar, BotonBuscar ([3fd4400](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/3fd440054e0804e92c6b7804a41123a9fde4b6e5))
* modificadas stories para componentes Icono, IconoTooltip y progreso lineal ([ddfa017](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/ddfa01788ac4019e4cd9d98414713da2ee03f50e))

## [1.9.0](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/compare/v1.7.0...v1.9.0) (2023-05-22)


### ⚠ BREAKING CHANGES

* se elimino `onClear` para FormInputText y FormInputDropdown

### Features

* agregado boton 'agregar' que cambia entre icono o boton de acuerdo a la interfaz ([73105b3](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/73105b3bf4b1e377302794ae6bcd943a98b918af))
* añadida ordenación de columnas para datatable en modo escritorio 🎉 ([de53fbd](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/de53fbd6dce763119f2dff4126b18807e263bc4f))
* añadida ordenación para módulo de módulos ([cb5f3d3](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/cb5f3d308bb49428da37a54a6450d7404dc3b22d))
* añadida ordenación para módulo de parámetros ([f7bb1d6](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/f7bb1d67e81a49986c4cfe2c7ada0508fe8c499a))
* añadida ordenación para módulo de políticas ([e693dd5](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/e693dd5e4daf95c046b020fa060f9a8c5a10f372))
* añadida ordenación para módulo de roles ([9a6c595](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/9a6c595364678641787efd06ff5f12bd312fc4f4))
* añadidas acciones de cambio de estado para módulo de parámetros ([13c9fbc](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/13c9fbcdadd4ae15a56a9676ef0d2d6007e74dd1))
* añadido boton de ordenación con soporte para diferentes criterios ([bc31845](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/bc31845e39f8d3f26f35730d8d7c1fbf72ddcb5d))
* añadido indicador de ordenación activa en boton ordenar ([0880f0c](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/0880f0c7c52984cbda698612f5effb0988791072))
* añadido valor desktopModeMediaQuery en FormInputDate para mostrar modo escritorio o móvil ([af68ba3](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/af68ba31f87ee7125e69d164ec9b0c90fae2fd24))
* estandarización de vistas de acciones para página de módulos, parámetros, usuarios y roles ([5d080db](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/5d080dba89fddca942968626ed770504796e0273))
* implementación de boton de ordenación en módulo de usuarios ([eefcbe9](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/eefcbe994cad05e04280c50e464c23ade6d0f948))
* mejoras en estilo de componente de estado y componente alternativo ⚪️ ([e1394af](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/e1394af1ff524356aef18552a08b367af013f30b))
* se agrego variable `clearable` en FormInputText y FormInputDropdown para reiniciar sus valores ([7a29a34](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/7a29a34a5e8e901d7d3045382460cbbb9d8c9905))
* se mejora la lógica de redirecciones moviendo las reglas a archivo middleware ([99b9d89](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/99b9d8913fd689735f313cc3e0e8e4d41790e7c8))


### Bug Fixes

* añadida validación antes de renovar el token en caso de valor no definido ([03731c5](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/03731c5d0f96ac883cad8fdd5192f00aa590667d))
* corregido error de paginado al cambiar el valor del límite y nuevo boton Toggle de busqueda ([1594998](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/1594998fee283535a33eb95d88652ee0298cb906))
* corregido error de paginado ocasionado por no reiniciar la página en el cambio de límite ([77b7aa3](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/77b7aa37fa402f19d60d4b3fdb262374b495afd2))
* corregido error en cierre de filtros debido a riterios de búsqueda no restaurados ([3e03ad7](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/3e03ad7594424cf16b90a8bfe7db4f9bc60528b2))
* corregido error en función de impresión ocasionado por no encontrar valor en regex ([0fe07e8](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/0fe07e804d14e752478c74f43e9757ab11da4aaf))
* corregido error en redirección de oauth de usuarios no autorizados ([ab52659](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/ab52659743ee61cf7442fa73cdc38230960ddbf7))
* corregido error en SideBar que ocasionaba que no se mostrara en páginas como /usuarios/:uuid ([185d1e8](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/185d1e897ba7e4dc1a1756cc547ecdec69ce619f))
* corregido evento de hover de botones personalizados que evitaba que desaparezcan los mensajes ([73ba6f4](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/73ba6f459600d2de4dc26df77dcbc5fadfaae5b6))
* modificado boton de acciones para funcionar como icono o boton ([d54f4fe](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/d54f4fead2747f3943b31d2f0a1e0ffa8932ed85))
* modificados test e2e con función 'waitForResponse' para esperar eventos de peticiones web ([8630d99](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/8630d99584d35ec58c13094903f726ee10509bf8))
* se corrigió un error en redirección a página de inicio en páginas de desbloqueo ([e2aa6c5](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/e2aa6c5b0ad8d24740dbc8e69c42f28db4857dd9))

## [1.8.0](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/compare/v1.7.0...v1.8.0) (2023-04-02)


### Features

* se mejora la lógica de redirecciones moviendo las reglas a archivo middleware ([99b9d89](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/99b9d8913fd689735f313cc3e0e8e4d41790e7c8))


### Bug Fixes

* añadida validación antes de renovar el token en caso de valor no definido ([03731c5](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/03731c5d0f96ac883cad8fdd5192f00aa590667d))
* corregido error en función de impresión ocasionado por no encontrar valor en regex ([0fe07e8](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/0fe07e804d14e752478c74f43e9757ab11da4aaf))
* corregido error en redirección de oauth de usuarios no autorizados ([ab52659](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/ab52659743ee61cf7442fa73cdc38230960ddbf7))

## [1.7.0](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/compare/v1.6.9...v1.7.0) (2023-02-28)


### Features

* reorganización de lógica de inicio de sesión con Ciudadanía Digital ([9213b9b](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/9213b9b2ffc29a6ed067bb826a69ad5a8bdd2f21))
* separada lógica de peticiones con sesiones y verificación de permisos ([781fea4](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/781fea4f697ec305c540549f5d8a37a13acff04b))


### Bug Fixes

* ajuste parámetros autorización ciudadanía ([6cd2e95](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/6cd2e95b404a194bd6c6f009ee32f73f2cabc541))
* corregido error en componente de carga que muestra el espacio de contenido en la parte inferior ([cddc749](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/cddc749ada3ce912a142efc9b87b47fc25a4c989))
* mejorado método de cierre de sesión, con y sin ciudadanía ([eefc819](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/eefc81948f10eb358800f9f36485ede5c7252091))

### [1.6.9](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/compare/v1.6.8...v1.6.9) (2023-02-26)


### ⚠ BREAKING CHANGES

* el campo id del componente IconoToolTip es obligatorio para futuras pruebas e2e

### Features

* actualización NextJS 13.2.1, ya no se requiere @next/font ([ed0eb74](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/ed0eb74d068d0e7f40d61dddce12cb347e900b34))
* añadido campo de orden para definir la secuencia en que se muestran los módulos ([ffaeb3b](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/ffaeb3b6cb80d431bcc0b3054f09c7d116ae09af))
* añadido evento onSubmit para todos los formularios ([04a81a2](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/04a81a29aec985a31236c09040910a172e26a646))
* añadido menú contextual, para ser usado cuando haya demasiadas acciones por registros ([a31bd94](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/a31bd9425c335335a2e7ded6bd5bb05a2c46ecd7))
* añadido test de módulo de usuarios y configuración con variables de entorno ✅ ([7593aee](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/7593aee799e2304197c19ba9378e195c0cd63cef))
* añadido valor InputBaseProps para FormInputText ([e4072e9](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/e4072e98a6b852b20d454574d4af55bef1913f54))
* añadidos labels para campos de formulario y mejoras de accesibilidad ([f62e1f2](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/f62e1f22a7b5cfbc8594faecabd903ec8ac4c280))
* completado test de parámetros ✅ ([1b6fd94](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/1b6fd9450b3143e41d2c94495b91ad33cc9780d2))
* configuración inicial de Playwright 🚀 ([fe44703](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/fe4470317932b1113aad12bdf7502e77bc2ff0ab))
* modificado boton de agregar nuevo módulo con nuevo componente de boton de acciones ([1e61078](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/1e61078d765c10dee4515e305f6171e55a0061e3))
* **Playwright:** configuración inicial de ruta base global para pruebas ([53010a9](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/53010a92621dd6d1995e79169788d7958d1fbce0))
* se ha añadio una librería que permite cargar iconos de Google Material desde servidor local ([a79b71e](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/a79b71e8d464711db93d700bb631413cbccebd55))


### Bug Fixes

* adición de filtro al componente de rol ([a33756e](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/a33756eb01c23a40983c36e0fad733540896a101))
* cambio de tipo de boton ciudadanía de "submit" a "button" ([f3459e0](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/f3459e0716cefaf0ad56c08bc9c5e643fccb8e76))
* corregido error en componentes de Storybook habilitando crypto en configuración de Webpack ([e838a89](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/e838a8996ec6444aa5b05d0d6d13872c7f77082f))
* corregido id para boton sidebar, módulos de menú lateral y tipado de control para FormInputDate ([24ebd83](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/24ebd8357f2403092a9d7c4083246363ed9cb906))
* corregido test e2e de creación de módulos, compatible con nuevo boton de acciones ([6418206](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/64182066c54b5111268b18926790c56205f32f94))
* corregido tipado de Story de FormInputDate ([44dbd89](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/44dbd89242ca6507693b06485f6ea3c7adbba495))
* corregidos test e2e dando prioridad a selectores con id ([9b691db](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/9b691db119eee7b35e1252603bef7c51901a9367))
* modificado estilo de boton ciudadanía ([c9b1554](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/c9b1554439ce42145fc0c72bcdde3baf8edf6eb8))
* pruebas de e2e para politicas, modulos, y roles ([b2677b9](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/b2677b9c780a844c704a67d16efd943932cd4469))
* renombrado directorio rol por roles, para mantener el estandar de notación de modulos ([f6afb5a](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/f6afb5ab9e679b6267d06eebe96ecdc346c211f3))
* test e2e al componene de rol, edición de datos ([45d95e1](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/45d95e1ed97071edceeea7ff56de043f9b8e640a))
* test e2e, para modulos, políticas y roles, para crear, búsqueda y edicion ([404aebd](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/404aebd492cdbb1f46377a735b613651b7c1c404))


* agregado valor de id en instancias de  IconoToolTip ([b263be6](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/b263be6b5f562d0a7f3a88902249f48ebff7f365))

### [1.6.8](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/compare/v1.6.7...v1.6.8) (2023-02-07)


### ⚠ BREAKING CHANGES

* el campo id del componente IconoToolTip es obligatorio para futuras pruebas e2e

### Bug Fixes

* corregido array de depencias de página de usuarios que ocasionaba que se ejecuten 2 peticiones ([71ce6ec](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/71ce6ecf6e8854e53ae367436cd033e727f5e308))
* corregido error de modo claro en SO en modo oscuro guardando configuración en una cookie ([6b7a203](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/6b7a203156f01da3baaa6e0d1d491ddf320e721b))


* agregado valor de id en instancias de  IconoToolTip ([d7efada](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/d7efadab9db9a882606a4bf625fc4e773ff4cc50))

### [1.6.7](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/compare/v1.6.6...v1.6.7) (2023-01-24)


### ⚠ BREAKING CHANGES

* se requiere DialogContent para vista modal compatible con propiedad scroll

### Bug Fixes

* corregido error en Storybook que ocasionaba que la primera página no se visualizara ([36b51c2](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/36b51c2cd7fc2ca9a24f00edfd47f6f4daaae72b))


* cambio de formato en vista modal ([66b726f](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/66b726f1df6164a20ef55343d7caf6773ac6af18))

### [1.6.6](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/compare/v1.6.5...v1.6.6) (2023-01-17)


### Features

* añadida documentación Storybook para Input Radio, Multi check, Slider y correcciones de tipado ([6a29877](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/6a298770151abf6296b67f5cb605daec87c5267a))
* añadida referencia de directorios en eslint para una mejor corrección de linter 🧹 ([e8281a9](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/e8281a93f6260bc93e2a9e9964dc70ed62cc2438))
* añadido tipado para componentes de formulario en función a valores admitidos 🎉 ([20371b8](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/20371b88de74a8ff6f2fe375f006ed917fb2f2cd))


### Bug Fixes

* corrección en custom-data-table para no mostrar espacio en caso de no tener títulos o acciones ([b36a35f](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/b36a35f077639ec17ad1357f4bb7e1a55217515a))
* correccion test de probar_botones ([9aba732](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/9aba732f01815b4b25859abc9873d481253d72ed))
* corregida generación de documentos de Storybook y actualización de dependencias ([5cefef1](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/5cefef1b346ce78716dd04e56ee0721b3930bb00))
* mitigación de problema de seguridad actualizando la dependencia eslint-config-prettier ([b03639d](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/b03639da7652161f81fd01c9a7a9e547562a6867))
* modificado formato de petición de actualización de módulos y denominación de variables de roles ([7d8004c](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/7d8004c0a3fb9f270ed443d323cc260af59fac97))
* optimizado código de filtros, para evitar redundancia en llamada de métodos de actualización 🧹 ([e2e4a6b](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/e2e4a6b3774bdbff10b0edbdf3267b750aadc09f))

### [1.6.5](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/compare/v1.6.4...v1.6.5) (2022-12-11)


### Bug Fixes

* corrección en validación por defecto para campo de fecha, permitiendo valores nulos ([48d6b4f](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/48d6b4fd8fd9845fd09422b4b86381838fd1e0e5))

### [1.6.4](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/compare/v1.6.3...v1.6.4) (2022-12-04)


### Features

* actualización nextJS 13.0.6, eliminado modulo fontsource/poppins ([c8c7ef0](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/c8c7ef0e72c61f0798c41844dc006df735cf669d))
* añadida librería @next/bundle-analyzer para mostrar el tamaño del compilado ([9ba1e50](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/9ba1e502fd160ca9abae5ebe896c45ed9132885c))
* añadido flag responseType para peticiones http ([62153ec](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/62153ecffe061a5162604abc22bf9a57550dee44))
* añadido flag sideEffects:false para reducir tamaño del compilado 🪄 ([4eb840d](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/4eb840d1c09a2cc1690e81601faacec7f8b55f13))
* carga dinámica de librería casbin 🥳 ([c10dfa4](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/c10dfa4ee44288a328183f1c7942e5c5915b3e13))
* carga dinámica de librería ZXCVBN disminuyendo el tamaño del compilado 🥳 ([b09d0ac](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/b09d0aca446912a4f99e936dc4463cc5492af99e))
* crud de roles ([7196b59](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/7196b592e20a080340d57319b3bfdc4bba9c591c))
* se implementa next/font para optimización de fuentes y se reemplaza fontWeight bold por medium ([9fccb54](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/9fccb540b3a6bd3b63f5372f7fd9d0f397b18deb))


### Bug Fixes

* añadido flag withCredentials para peticiones web, en true por defecto ([e36dc03](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/e36dc03df6edfdacb509146b26dc925f47aeec35))
* cambio de nombre de api de roles-table a roles-todos ([d7ca3d1](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/d7ca3d196cd639632b3baa6d66d2ce47bc466dc5))
* cambio de pagina rol a roles ([9e3cf6c](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/9e3cf6c67d79053c4391739dbb6229b11c766531))
* cambios de nombre de los tests y test de login ciudadania ([4adb690](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/4adb690b84770ce6e5bc277beca5cfaf56343811))
* correccion caracteres faltantes home ([b575edf](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/b575edf6d0422b1da9b1a64e2dd089c397ae4875))
* corregido error en identificador de sección para modal de edición de módulos [#2](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/issues/2) ([291d812](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/291d8128ea54b8187613594ee2a7fd48cd8d221a))
* modificada dependencia Casbin, para evitar usar dependencia transitiva ([a5c420f](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/a5c420f725297311d9b24422bd13012ca53e0e9f))
* modificada documentación mencionando que sacar un fork ya no es necesario 🤦‍♂️ ([051d34a](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/051d34aabaf6074ec2a3e14351b2c5cb564357cf))
* se cambió el nombre de fidModulo a idModulo ([d78d239](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/d78d239e140f725775a5d38cf33a9392327a3a71))

### [1.6.3](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/compare/v1.4.2...v1.6.3) (2022-10-01)


### Features

* :hammer: Funcionalidad para mantener abierto Custom Dialog ([3489bd6](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/3489bd6d2eccdd035d55ac932f416f71b889dca2))
* actualización de librerías MUI 5.10.3 ([04c49d8](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/04c49d8896042ac3fbc8a8c5a7d844979cd04e09))
* actualización de versiones MUI 5.10 y NextJS 12.2.5 ([ecc4058](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/ecc4058301739ac9e404d3846ce86a3c2f41a90c))
* añadida opción de limpiar campo FormInputDropdown ([06f5bc0](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/06f5bc0e7d69a7de10056fefcac0b1ecff3c64bf))
* añadida vista de activación de cuenta y correcciones menores de texto ([d9b5a0d](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/d9b5a0d01a05e01f603ac81485fe76cd185a3ad8))
* añadido boton que llama a servicio de reenvio de correos para cuentas pendientes de activación ([0df6783](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/0df67838e4f9202276f40ed255a7a326bb5c54aa))
* añadido comando prepare para ejecutar 'npm run lint' ([bfd737c](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/bfd737cf928d340f881f50b634739b52eac20ac2))
* configuración inicial (opcional) de Matomo ([7b16d38](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/7b16d38322d9c9a2e03a635757035704e98d4d43))
* separada lógica de Login para tener una pestaña de creación de cuenta opcional ([c856e9e](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/c856e9e201b2a2aeb9777f6bf8f2bc7fbf5bba12))
* soporte para recibir n parámetros en función imprimir 🖨 ([71c29e5](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/71c29e58518dc3f7f318fcfe7dd3230c6e491bc9))
* test e2e cypress ([1061f5d](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/1061f5df9ddd29ffb69d66f96819f05eceeb646a))
* tests para la adicion de modulos, politicas, y prueba de botones ([7c9d773](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/7c9d773ee8b6f4838edccd37baba2eb2357a7914))
* vista de recuperación de contraseña y correcciones menores de estilos ([dc28ebd](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/dc28ebd24c2e6defcb5398a57d535d2fb5d2456d))


### Bug Fixes

* actualización de dependencias MUI 5.10.1 ([693c4c9](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/693c4c9bb2d947a27f49353eff5c713ef9a0ccf1))
* cambio en versión de Cypress, retiradas variables sin utilizar ([c2d7e01](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/c2d7e01df43553dae1ceea23a5b7b56859d13704))
* cambios de var por let ([dfcfb63](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/dfcfb63f1822ea7215f8dc0d9e6b283613a684ef))
* correccion de contador de parametros ([22601e9](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/22601e99e5738b98a3318fca44171e7ba94920bf))
* corrección en Auth provider, para retirar el control de autorización a páginas fuera de /admin ([17981bb](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/17981bb0dea5bb185cbbbe692cd55945e918d9a4))
* corrección en filtro de políticas que enviaba filtros vacios ([136ee21](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/136ee21c53d75591a8b2aee9dcc4737ea12f2981))
* corrección en interpretación de objeto error en interprete de mensajes ([705c244](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/705c244f2b5a9fec820566f7b779390c6b81ad47))
* correcion de tests ([84d1510](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/84d1510fc6945b8d84b4db4d1f99b17c39e7fd76))
* correciones menores en archivos install.md y readme.md ([d4e1500](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/d4e15002ce700a4064147a3257f4352c32c97868))
* corregido archivo commands.ts agregando export ([488c051](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/488c051ab4d81d4196f390003865af681c9ad075))
* corregido error en filtro que causaba que no se muestre datos el no reiniciar página y límite ([39cf4fc](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/39cf4fcc6a61255facd0bf82e254b8f143c84450))
* corregido path archivo con nombres de prueba ([5ab5bb0](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/5ab5bb0ac3b759dde3a3dbb84905502f2cd6e0da))
* deshabilitado boton de cambio de contraseña mientras hay una peticíón en curso ([e43665c](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/e43665c72ce5eb19eb9e7908fb944ee2a65168f5))
* filtro de politicas ([946bbc8](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/946bbc893482d1fcc104a076cd97ec86761fe5ab))
* modificado registro de cuenta con datos del usuario sin datos personales ([7278397](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/7278397c77a9e8c4557c43c3d860086bc8856a68))
* reemplazado icono de favicon en lugar de icono de Agetic ([9841379](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/984137951ecca4851eda57cc8f78315dfa7ec70c))
* retirado caracter (^) de las librerias xlsx y random-words ([9691878](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/969187862388042b2c18287c2c9aa9770d8f0607))
* rutas de test ([1b79644](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/1b79644b8a2e17a2eb300d080d5b2191dcee1be0))

## [1.6.0](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/compare/v1.4.2...v1.6.0) (2022-08-24)


### Features

* actualización de versiones MUI 5.10 y NextJS 12.2.5 ([ecc4058](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/ecc4058301739ac9e404d3846ce86a3c2f41a90c))
* añadida vista de activación de cuenta y correcciones menores de texto ([d9b5a0d](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/d9b5a0d01a05e01f603ac81485fe76cd185a3ad8))
* añadido comando prepare para ejecutar 'npm run lint' ([bfd737c](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/bfd737cf928d340f881f50b634739b52eac20ac2))
* configuración inicial (opcional) de Matomo ([7b16d38](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/7b16d38322d9c9a2e03a635757035704e98d4d43))
* separada lógica de Login para tener una pestaña de creación de cuenta opcional ([c856e9e](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/c856e9e201b2a2aeb9777f6bf8f2bc7fbf5bba12))
* vista de recuperación de contraseña y correcciones menores de estilos ([dc28ebd](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/dc28ebd24c2e6defcb5398a57d535d2fb5d2456d))


### Bug Fixes

* actualización de dependencias MUI 5.10.1 ([693c4c9](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/693c4c9bb2d947a27f49353eff5c713ef9a0ccf1))
* corrección en Auth provider, para retirar el control de autorización a páginas fuera de /admin ([17981bb](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/17981bb0dea5bb185cbbbe692cd55945e918d9a4))
* correciones menores en archivos install.md y readme.md ([d4e1500](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/d4e15002ce700a4064147a3257f4352c32c97868))
* filtro de politicas ([946bbc8](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/946bbc893482d1fcc104a076cd97ec86761fe5ab))
* modificado registro de cuenta con datos del usuario sin datos personales ([7278397](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/7278397c77a9e8c4557c43c3d860086bc8856a68))
* reemplazado icono de favicon en lugar de icono de Agetic ([9841379](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/984137951ecca4851eda57cc8f78315dfa7ec70c))

## [1.5.0](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/compare/v1.4.2...v1.5.0) (2022-08-14)


### Features

* actualización de versiones MUI 5.10 y NextJS 12.2.5 ([ecc4058](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/ecc4058301739ac9e404d3846ce86a3c2f41a90c))
* añadido comando prepare para ejecutar 'npm run lint' ([bfd737c](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/bfd737cf928d340f881f50b634739b52eac20ac2))
* configuración inicial (opcional) de Matomo ([7b16d38](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/7b16d38322d9c9a2e03a635757035704e98d4d43))


### Bug Fixes

* correciones menores en archivos install.md y readme.md ([d4e1500](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/d4e15002ce700a4064147a3257f4352c32c97868))
* reemplazado icono de favicon en lugar de icono de Agetic ([9841379](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/984137951ecca4851eda57cc8f78315dfa7ec70c))

### [1.4.2](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/compare/v1.4.0...v1.4.2) (2022-08-07)


### Bug Fixes

* añadido name a FormInputDropdown ([f655d32](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/f655d32c83454faff2cbd4d1fd8c76c376d92dab))
* corrección en nombre de identificador campo de nombres al registrar un usuario ([d2f8632](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/d2f863263b1bf6184ff4c06258ca1f76dd725346))
* correcciones de ortografía en readme y otros componentes ([9a01dbc](https://gitlab.agetic.gob.bo/agetic/agetic/proyectos-base/agetic-next-base-frontend/commit/9a01dbc477a08425b6e3538ef4c0caefac0a14cc))

## 1.4.0 (2022-07-31)


### Features

* acción de inicio de sesión en proveedor global de sesión y almacenamiento en cookies ([aa17c95](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/aa17c9504a472b49983d3688f7ab7c4851d8ed1c))
* adición de filtros en Políticas ([b281ceb](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/b281cebc0027c0c29af2f06647aada17c274b3bb))
* adicion de filtros para módulos ([6aabbd3](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/6aabbd3d7d55c6197ba9b864ac90196a412c3710))
* agregadas columnas de nro de documento y personas para vista de usuarios ([460a645](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/460a645703d1266b0ecb6082dba7b1d874699a4b))
* agregado skeleton en modo lista ([cd1e9ba](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/cd1e9ba2c0cfd9ecf8c49cb59e629ca4ca9277a7))
* ajuste en Sidebar para interpretar iconos dinamicos ([2e0f0ae](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2e0f0aef97daa312dae187ce1b96c13239d72fec))
* alineación de botones acción de modal de usuarios ([f72d08c](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f72d08cdc04132170d8548966443c583c214f846))
* añadida api de estado de ejemplo ([65cb0ce](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/65cb0ce3ff8e53e20b765e4ebce128ed92b7d430))
* añadida carpeta de componentes y uso de variable .env ([0a32e32](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/0a32e323b1e19e32541bcc75f8c8a73758c03d7b))
* añadida clase de Servicios que hace peticiones Web usando Axios ([a7493ce](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a7493ceb8af96efe94bbad64b755f4f8868d1eb9))
* añadida función que imprime contenido solo cuando no está en modo producción ([7544b0f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/7544b0f27a5d0637c5549e0883163eaa25c59238))
* añadida librería react-use para controlar mejor el estado de los renders ([09f1ac0](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/09f1ac011dab379d26555cb7b47cdc8e33c5d9a7))
* añadida opción para cambio de modo claro/oscuro en menu lateral derecho ([f372add](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f372add57a7717db05752a0ba409bee6e1c41e98))
* añadida página de desbloqueo 🔐, redirección a login desde index ([712f6c2](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/712f6c2a15fc2d59aff0df2dbc5141861aecf924))
* añadida páginación y parametros de url a vista de usuarios, políticas y parámetros ([2a02814](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2a0281491a3b4b5225ebe1a34896402e96b6af79))
* añadida petición de restablecimiento de contraseña ([800afd3](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/800afd3a898e19ef036c8857fe4c87149b3344e6))
* añadida utilidad global para cookies; se muestra expiración de JWT ([eaeacba](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/eaeacbaafb629bd763e42eff2397f8171a0d1309))
* añadida utilidad para codificar y decodificar base64 ([4ff1424](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/4ff14245e0b7564148116c6bbd9697c186c1c30c))
* añadida verificación de inicio de sesión antes de mostrar una ruta layoutUser ([4407bec](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/4407bec376272148ac80f19bd40005512f786e89))
* añadida vista de alerta que ejecuta acciones en navbar y vista de usuarios ([057dc28](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/057dc28293dba2f4969dc14c85987042df199214))
* añadida vista home de ejemplo con descripción de los módulos ([f96c06f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f96c06f4efe954e8f98db0bb95583c6fd97eff17))
* añadida vista inicial CRUD políticas ([0433558](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/043355868fb78022a7629e98025e3998193a73f4))
* añadida vista inicial de CRUD de parámetros ([d8b667e](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d8b667e7ff382fa4cc881f73fe56341c0cd7bad5))
* añadida vista inicial para login, duplicados navbar y layouts para mejor control ([f8c6ac7](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f8c6ac7803b0a89213d8f7d074fb014e55971651))
* añadida vista modal de edición de políticas ([59e6031](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/59e60316b7bb99677ccf8dbb5d6ae2a2f96e5da2))
* añadidas alertas que si se adaptan a pantallas moviles en reemplazo de react-toastify ([df577c2](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/df577c2d42f1a29af65b32e3fb9b29b38248c29c))
* añadidas animaciones para modales de dialogo ([dc75e89](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/dc75e897b0c0a3afb0621c393ab886e10ba77755))
* añadidas peticiones para editar y eliminar políticas ([4c020cb](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/4c020cbc3090d17b10212d86432c509375ac1e58))
* añadidas tipografía 'Poppins' de forma global ([787cee3](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/787cee3e24596c0923f6659cc733e7c1517690df))
* añadido archivo para centralizar interfaces reutilizables ([c206b8f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/c206b8f301728bd91fd02c1157131b70c7d8b4fd))
* añadido boton clear a filtros y cambio de color de fondo ([24ad228](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/24ad228732768a5dc2603a3b82d9201e699007a3))
* añadido camio de rol dinámico desde Navbar que modifica modulos de Sidebar usando AuthProvider ([97b3aac](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/97b3aacf9a4a504a0430febab3f2fd51a1fcd56a))
* añadido comando que crea .metadata_never_index para no indexar node_modules en macos ([dfe8b2d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/dfe8b2d19b0985d91f9b9d0cbd67b0fe82fde617))
* añadido espacio para filtros, paginación en CustomDataTable implementado en vista de políticas ([c61b5b9](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/c61b5b9a196e2f10f67702e023b612d4d70a066f))
* añadido evento para limpiar un campo de texto ([d8519a9](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d8519a99dc7dce2feea791588d94579ce07aa813))
* añadido filtro de nombres en la página de usuarios ([55e978f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/55e978f04def977a158a34aad298fec3eb82c5f1))
* añadido formulario de inicio de sesión, ajuste tema global para botones ([c3909d6](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/c3909d6daddc979601f73b998da4ca84b7a0e1e7))
* añadido indicador de tipo de cuenta (Ciudadanía o no) en lista de usuarios ([e2aed84](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/e2aed84803e359be5878811a76507c936299c5e2))
* añadido inicio de sesión usando Ciudadanía Digital, con redirección en login ([73b2fff](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/73b2fff585618086e5d41f7d0627fe28ef9e5e47))
* añadido inicio de sesión usando Ciudadaníd Digital, con redirección en login ([bfb58df](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bfb58dfc89962de79d1d1a7c9615fb917903cf4e))
* añadido input form que permite seleccionar multiples elementos ([254b355](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/254b35524b66824831c410bf24a25019e1b4ef21))
* añadido manual de instalación y despliegue ([b36251e](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/b36251ee0c2e8d103dac361f6c1604e85f9d460c))
* añadido mensaje de error en CustomTable en caso de suceder ([26248c7](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/26248c7013559bf19f51d95545eb14899be8d9eb))
* añadido método de cambio de estado ([d5d0bf4](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d5d0bf49ce2f10676679ad89a67e43c77db9ef0f))
* añadido método onChange para Input Drop Down ([45b4a57](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/45b4a575ccb30cea260dbd95bdbd8960bdc6bf16))
* añadido método que hace peticiones con la sesión iniciada ([85b3f04](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/85b3f045742d3bccd523b6df5ed1812a79f6cd40))
* añadido modal de cambio de contraseña desde vista de perfil con validación de seguridad zxcvbn ([f6ea269](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f6ea269d64570f920d35c78bedb16e45670547a4))
* añadido modal filtro de roles para modal de usuarios, que se borran al descartarse ([54cda45](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/54cda452c807f55787f044d5ead8d3325b845ae5))
* añadido modal para crear o adicionar parámetros ([840211b](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/840211b45eaf273c0f8100bf0ce2ea73709f36b1))
* añadido modal reutilizable 🥳 ([1eea4e3](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/1eea4e3438ca399dd5bc76e5dd959b4b2fcc4ecb))
* añadido modo oscuro automático ([20411d9](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/20411d9cfb062f10e5dd989b52a2910506b247b5))
* añadido modo oscuro automático con y también se guarda configuración del usuario ([7f71c6d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/7f71c6d176648592e51f4f9ad8777567b703c2a3))
* añadido nombre de usuario en Appbar; completada vista de perfil ([b5f51ed](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/b5f51edfb60b14342e5354586a83a2023ff28802))
* añadido nombre y rol de usuario en navbar que oculta el nombre cuando la vista es pequeña ([bd9f02e](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bd9f02e01df339b099b97f263a7c491bf9e7313a))
* añadido nuevo filtro de usuarios que conserva el estado y se ejecuta con función debounce ([bad818b](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bad818b86b301ceb2027947c8bc1458fe96228ba))
* añadido número de versión visible en sidebar ([9f0d187](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/9f0d187eceec3c1ef97e20b33c83465751ca8510))
* añadido onChange para dropdown, referencias para input text y PaperProps para Custom dialog ([3f9584d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/3f9584d2a2475af1e348d0d95651553caa8cf060))
* añadido progreso líneal y campos deshabilitados implementados en el formulario de usario ([09b3bcf](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/09b3bcfc923c688e65c4401040e61f0b86a03f8d))
* añadido SideBar, NavBar y manejadores de estado para controlar si el AppBar está abierto o no ([84899d1](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/84899d1baf0bf46b7a72215e039df806d369b88f))
* añadido skeleton para tablas; completada petición para obtener usuarios ([d56cad2](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d56cad28be70e3ea7b38949f7ccc715fa9e9c01f))
* añadido soporte para refresh token ([bef0d4c](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bef0d4c0feecaa10cdbde2682a07ffcd9bc01a5e))
* añadidos campos de formulario para añadir o editar usuarios ([106c93d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/106c93daa39efdff44ebfc91504eee2b97a5e44d))
* añadidos checkbox en multi selector ([9fc55a8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/9fc55a8134c95ca61184ffed99b211f765bfc095))
* añadidos componentes para texto en el login, además de selector de fecha, dropdown, radio ([ccd2342](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ccd2342a255cb7ad6b3c2fe8afc03d5e44e6c29f))
* añadido filtro de roles para vista de usuarios (aún en progreso 🔨) ([978c996](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/978c99641c9f213370a1e044ec3d899fe6b03f89))
* añadidos iconos para NavBar ([e4c61be](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/e4c61bee99e5d118a4f11cf53981aee8e035fea2))
* añadidos métodos para apagar y activar/inactivar módulos ([a000364](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a000364e6b9e2793812b9df7d7b534692869e388))
* añadidos metodos que agregan datos del último commit en la cabecera (idea de [@malejo](https://gitlab.agetic.gob.bo/malejo) ) ([c9f2861](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/c9f28615771170f3a7b9c05748268330e4c29d50))
* añadidos nombres en iconos para mejorar la accesibilidad y descripción en meta tags ([726ecd8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/726ecd8cb98d19bb4408cf0640c4e609f009918f))
* añadidos selectores de roles y selector multiple de acciones para políticas ([bda03e8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bda03e8145e45c4512e2e974b2bb25c454132e37))
* animaciones en Layouts al cargar el login o al iniciar sesión; corregida proporción de Sidebar ([bf071c2](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bf071c229bf979c14afd19fbd47970a352e47003))
* componente FormInputAutocomplete ([a6fef69](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a6fef69d7770c6bffd55fd89cbd8d882e7af3cdd))
* componente para mostrar mensajes estado ([0b4d01a](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/0b4d01a3ed0f2d27086279634f106bdf5bf468dc))
* corregido error al parsear la fecha en datepicker, dado que DayJS parsea automáticamente ([2581623](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2581623020d479e4206d7515042504fcfc758677))
* corregido handler de mensajes al hacer peticiones web; añadida petición inicial de estado ([a576523](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a576523d51bb8f5f16915141c4d5cc9c77b61c89))
* corregidos errores de keys en componentes en formato lista ([a839670](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a8396703070e18bf7967574d01881b27f2269db6))
* datatable responsivo dentro de usuarios, con metodos genericos para dibujar los elementos ([2b0de84](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2b0de8466d65a0cfbe4050a0a8e8b077bfadc986))
* docker, pipeline, env path para k8s ([445df2f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/445df2f4d529d5916ed208b34586da6ac407d96a))
* filtros en módulo de parametros ([fb4622f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/fb4622f3ba20fdee596c6483f2777eb68722ab1d))
* funcionalidad de crud para modulos ([ea03e57](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ea03e573a63ae45d0367bf38ef9333069fb997ea))
* **global:** instalado NextJS, MaterialUI con Typescript y ajustes EsLint ([ace4848](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ace484897ccdc5e3c4e7df19c4d1863f548f38ad))
* implementado renderizado condicional de botones agregar y editar en vista de usuarios ([74f5e2d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/74f5e2d622fb82b09acc9e0f6e88088ee8a68bc0))
* modificada asignación de permisos por app (CRUD), para modal de políticas ([7c6344a](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/7c6344af66cfcd3db5a098f46c6f9b379d433ba4))
* modificado orden de páginas de admin, para añadir un midleware que valide si tiene token ([311d951](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/311d9511934c334ac4f5e9e1eb50baea2426e32f))
* modificado tamaño de label genérico para todos los componentes de formulario parametrizable ([1caa6bc](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/1caa6bc2d08e457d0ed0dbba824665979f26c615))
* modificados estilos de login para tener un ancho máximo ([b074d90](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/b074d90c0f236760ba7390dca15a3b97a9f7d881))
* provider para vistas a pantalla completa que se usan desde layout de usuario y eventos login ([afa3f81](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/afa3f813d9c0bc9841dfa2fb19d8d1e689888242))
* quietando icono para módulos padres ([f36c818](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f36c818ea98fed5159eef466e96bb53c2e9a008d))
* retirada opción de ordenar en columna ([bddd25a](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bddd25accdfcf9577968cc43197a03447e46f618))
* se crea componente IconoTooltip para contener iconos y eventos ([fc57a15](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/fc57a157280b01a3883281732a3d7bb80ccb2970))
* se mueve la lógica de interpretar permisos a auth provider y se usa en políticas y parámetros ([d7007f4](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d7007f4f493c858febb059f52a10fa89f6da2853))
* separada lógica de componentes de modal de usuario y filtros en componentes separados ([463e1a8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/463e1a89c7d80e52db92ba5c146eeecff9c0ed4e))
* separada lógica de datatable para ser reutilizable 🥳 ([6afa847](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/6afa8471cbd6dec4d94699b4a0185ba47308faae))
* separada lógica de modales de parámetros y políticas ([0ab2dec](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/0ab2dec5acf7e427815020d109a5360e3ec62348))
* storybook para los componentes comunes ([e8b02f9](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/e8b02f9d2b08a4abd8c15997963f9d4e0304d6d4))
* utilidad para almacenamiento local; eventos de Sidebar para mostrar menus y cambiar de página ([7a5e5e8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/7a5e5e80774a2b34162003ab177368eaadf04add))
* variables de .env disponibles en forma estática variables APP_ENV, SITE_NAME y BASE_URL ([ff40a50](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ff40a5061b500b43c2dc6b2663aca5771d07a6f0))
* vistas iniciales para perfil, parametros, politicas y usuarios con ejemplo de datatable ([f635f9e](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f635f9e7d219dbcfc427181cb1b6ad5bda70e0cf))


### Bug Fixes

* :zap: ajuste responsive en card de home ([c9d3d99](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/c9d3d9955c9da15f7bb5265885b21d1d63540305))
* actualización de dependencias y documentación ([726ed54](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/726ed54e38b68f9ed3ea5b6454180b335a6e642f))
* actualización de dependencias, cambio de middleware a versión estable ([79dfde3](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/79dfde3d4558214dac5a5e5a43c2921f91157616))
* actualizada dependencia react-toastify a versión 0, corregido env.sample ([4556c50](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/4556c5092a6039e2ddf12d19006539814c8c81fb))
* actualizadas versiones estables de dependencias, eliminadas dependencias sin utilizar ([f3e884b](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f3e884bde40b34643dd83e44be874aeb7a124b0b))
* aislada proporción de layout de usuario para interpretar contenido ([3e4e6c4](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/3e4e6c4177e8adce41eda8f3c84a96d0f73239b9))
* ajuste de estilo en custom data table, para desplegar filtros a mano ([78fd200](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/78fd20022a2576c61c879be8533e8d8d2397d260))
* ajuste en sidebar para mostrarse u ocultarse en escala md ([2f40813](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2f4081365a689f96602b0254bcf8ad5e47aa6880))
* ajuste experimental de colores 👨‍🎨 ([68a3b60](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/68a3b60b4a6ffd13f158f40969504f5853f829b6))
* ajuste para soportar cabeceras personalizadas ([0fe4e1c](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/0fe4e1c907ed51885befe86efc531b38c52b3bbc))
* ajustes en icono tooltip para color en modo desactivado ([ebba5a5](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ebba5a52f63fda86da756dd72b78a3766784811d))
* ajustes en tema y titulos ([75b66e3](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/75b66e3549c0f86d1fe81f07d0a0d25e62403ed5))
* ajustes en textos para ser color texto secundario; se reemplazan router.push por router.replace ([ccfb158](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ccfb158a00b17ce24866e7678e303ecb4776aa53))
* ajustes para login responsivo ([d8efcca](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d8efcca3624ed48d72e9351c908dc74db00c804c))
* ajustes visuales en ventanamos modales ([50fec9e](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/50fec9e7186de3bbd585e9857df10341b0407434))
* añadida opción de cierre automatico al redimensionar la pantalla ([2f9b5d6](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2f9b5d6433fc40d5fcab27c43596febf085689c4))
* añadida opción para guardar permisos al iniciar y validar la sesión ([a3fbba1](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a3fbba12d5cafc88ae8b0cf0ff4cbc7765c0a547))
* añadida utilidad global de alertas, con variantes correcto, incorrecto, advertencia y normal ([e60bacb](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/e60bacbe3d192207be56f77c95d9e2203d2696ea))
* añadida vista de mensaje de datos vacios en custom data table ([3146db7](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/3146db7fff83295cde69133304e0ace9bfb6cc0f))
* añadidadas dependencias nuevas para fechas ([bc7312a](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bc7312a4651d593ef1f24c6c37c5ceea8e64d0f7))
* añadidas validaciones de fechas en input date, estilo de título en custom data table ([cfb7802](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/cfb7802ff228a45807ca0339394082c13c09f5a2))
* añadida vista detalle de usuario y lista de roles ([a794c1f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a794c1f3c2779038d92d0f9026df5819680c61e5))
* añadido control de interpretación de html en intérprete de mensajes, eliminado ToastContainer ([3169a4b](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/3169a4b01180acfccbc1a396ed8eb90aa6fb2545))
* añadido delay al cerrar modal de usaurios, políticas y parámetros ([ec3dd63](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ec3dd63ca093d6a95329723e144df11f196af7ac))
* añadido delay en vista index antes de redirigir a vista de login ([89c4785](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/89c4785cfe130f04227440d83cc01237a9d658fc))
* añadido evento para responder en caso de error en la red 🌎 ([b934d51](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/b934d510472418d62b6dd55fdd0e6d54a4da28a2))
* añadido filtro de roles para usuarios ([0e6ca75](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/0e6ca75f635955350afaf558027065eea22bed85))
* añadido helper text para campo de texto y selector ([a086186](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a0861862a99d0ac5ff87e28ccd1b1048a2355e43))
* añadido método onchange a form input text ([b73065d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/b73065d0de92f6ee30907da304ccfcd4f67e5141))
* añadido método que guarda o actualiza un usuario ([92c2d11](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/92c2d116f54196539bea7c200a15d045744d566d))
* añadido permiso faltante de lectura con casbin ([e7b8f91](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/e7b8f91d4865d4d747a920d33f486970b92aa116))
* añadido título para la sección de módulos para en meta tag ([e2425b3](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/e2425b3d755f5106e2531e48bd6c5b4a20f78814))
* añadidos flags para no hacer peticiones hasta que se verifique la sesión ([274cce8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/274cce8d95000c1f7aed0988d762cc5d2811f98a))
* ancho de layout de usarios diferente para movil y escritorio ([1789187](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/17891874b8d68aea6fa1c60765bf870563167011))
* cambio de letra y colores de texto en custom table ([8e39317](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/8e393179e2095aceb9e16e473559322082591782))
* **ci:** cambio de path inyectado ([6793e30](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/6793e305e73c3db0f279dd7162f03cac2449ca1b))
* **ci:** cambio de workdir docker.k8s ([e475278](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/e475278a72d983cabd0dd2294a4e4b46eae68238))
* **ci:** copiar build desde artefacto ([5c0dc64](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/5c0dc64c0ced83d5d6528a4ffd29122e3548c899))
* colores de vista home y proporción de título en datatable para móviles ([21c3d8c](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/21c3d8c6d7553aa4c3a67645daad8c75b222896b))
* copia env para build k8s ([2cadc9d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2cadc9dbdacdbd238695b2cfb904a6b0acf07f7b))
* corrección en basePath - Next 12.2.3 ([bdf7aef](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bdf7aefddc4226c9c8c08483f62a4e357fe74a1f))
* corrección en input dropdown para mostrar errores de validación y color de fondo ([35a5ec9](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/35a5ec9569dc209acf3dca43199214f5a0663ecd))
* corrección en lista de secciones (antes llamados 'padres') ([0f342f8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/0f342f831472c4f25ad44af002284dad66dcd07b))
* corrección en módulo de módulos, respecto a tipos y valores por defecto ([3f12f00](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/3f12f00504c4c4ec542800dadd8e6ccf5aeec7c9))
* corrección pliege de layout de usuario para movil y eliminado CardActionArea de CustomDataTable ([584ed1f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/584ed1f480b88378612f9796e111f6e5a3a03131))
* corrección redirección login y manual ([cf9f5ac](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/cf9f5ac3db2cdfa42dd98c256ba6cad17a9e382f))
* correcciones en tipo de variables y proporción de campos en vista modal de módulos ([1ba9623](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/1ba9623fac958865de1b37d917e404dfae836dae))
* correcciones React 18: añadido tipo PropsWithChildren para LayoutUser AlertDialog, CustomDialog ([bb1b16f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bb1b16f068ff496fa2daad927c878e1927802e90))
* correción de color en CustomMensajeEstado ([e87211a](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/e87211a9fd841c1cc85012dc572293fb0c592dc8))
* correción de componente hijo en typography ([ac9fd60](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ac9fd608944b7d57d60bafda5476b048941951cf))
* corregida forma de interpretar mensajes de error, ya sean string u objetos ([a881878](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a881878505ccdc92f2f0504ed4e7871dfa46097e))
* corregida forma en que se cierra sesión en caso de usar ciudadanía digital ([b1bf3ef](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/b1bf3ef174ce0d53e0b7fd54989b44b1a8a2a0c2))
* corregida importación de utilidad que imprime, para importar otras utilidas más rapidamente ([9edff25](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/9edff2510854c8ad34ce4e91eb3a8d8e888bd34b))
* corregida importación no necesaria de modulos de React ([aef7b85](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/aef7b85a4047cacf52d4d45041e60d2e5a435d2c))
* corregida proporción de campos de roles, correo para ocupar tamaño completo en modal de usuario ([e453870](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/e453870cffa567fa30565ede3c207e8a5dbc073b))
* corregida redirección a vista de desbloqueo, añadido método que borra datos de sesión ([b0d7e10](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/b0d7e108e27affa19a0b3c25d5e910e0b2f73b1a))
* corregida redirección desde vista index hacia login ([014c119](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/014c1193969851b83092791daca6a3fed93787e5))
* corregida validación de formato de fecha válida usando momentJS (porque DateJS tiene errores) ([3c8bbfd](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/3c8bbfd50ae8172a3673d746fc3b223d202608e8))
* corregida validación para mostrar sidebar, en rutas disponibles ([21892d6](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/21892d6511e99051ae89f97ea0acff1f053f3e53))
* corregido al cerrar sesión que ocasionaba que aún se viera por un segundo la vista home ([b32774c](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/b32774cc7948ba235b98f9342307f2da36b7fdb8))
* corregido ancho de columnas de módulos en vista home para submodulos de un solo item ([9ffdb88](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/9ffdb88c410b457b3582fcef4be149c61a579ee4))
* corregido color de fondo de dialogos en modo oscuro ([608bfdc](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/608bfdc69ab1f8a2e58e778cd168a8a03aae2e36))
* corregido dentro de la ventana modal que ocasionaba que se muestren los valores por defecto ([c27a965](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/c27a96557368070b1ad302f33d78860b82a74e9b))
* corregido divider de modal en custom dialog, para tomar el color del entorno ([1f62f89](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/1f62f89b0ad866092e2462d0e32eb4d68a9e0949))
* corregido error al cerrar sesión que ocasionaba que aún se pudiera usar rutas protegidas 🤦‍♂️ ([94aa3c2](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/94aa3c25dca5b57f7b093fce46f5fdc3049e4a61))
* corregido error con para componentes que requieren children como parámetro, eliminado react-use ([7abad86](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/7abad867f7d489dbdb7759b196fcca952f1a2b2c))
* corregido error de commit liint instalando dependencias locales ([5139f12](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/5139f125d582602ff8d53aeb2c2a2cbe8658bbd1))
* corregido error en importación de icono con error de librería ([9582b08](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/9582b08f1e4ba6967cff50e0df71a7857e53cc26))
* corregido error en modo oscuro al no dejar interpretar el modo claro apropiadamente ([f45816a](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f45816a33dd8b274b0cf6faa8ce6824d01ec58f1))
* corregido error en redirección a vista home cuando se cambia de rol ([8a2c368](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/8a2c36815a6cbee810348150138e65479519820c))
* corregido error en redirección de perfil desde Navbar ([dd6e29c](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/dd6e29cd12b8a994ab288943ec00586f06b0a1b6))
* corregido error que ocasionaba que no se pudieran enviar query params ([99721ca](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/99721ca37fa017b005e0fdd12ab4d89553d7217e))
* corregido error que ocasionaba que no se recarguen los items de los menus al cambiar de rol ([46b86c0](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/46b86c0851cdd6e7d69436b1ea377486708af4c1))
* corregido error que ocasionaba que no se recarguen los items de los menus al cambiar de rol ([761e0f0](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/761e0f0ebd5a3e21c61da3e99259b14c26a02e85))
* corregido form input dropdown para tener valores por defecto ([d3f0dae](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d3f0daeab528c1e5c7bd46562cbd33f5b6a5f50c))
* corregido interpreté de mensajes ([3ef1023](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/3ef10237fbc079667ab7081a3188c7c573d9c83c))
* corregido modo oscuro inicial automatico ([6f68a1b](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/6f68a1bf9a84ad6a23021c39b5a31577bf4fa72a))
* corregido orden en que se cierran vistas modales de usuarios, políticas y parámetros ([eb228ff](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/eb228ff13a4f515a2a18dc83380ae1c12be1936a))
* corregido orden en que se renderiza las tablas de custom data table ([c001f35](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/c001f35b1d8463679cd2ba0c8d38aed109e901c7))
* corregida redirección para inicio de sesión con ciudadanía, se espera token por respuesta ([0999d7b](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/0999d7b8168a65ad6416741a9f79b5d4ef1bf65d))
* corregidos colores de estado, implementación en módulo de módulos ([d6e8911](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d6e89113a1aacf2848463eb594b816894c1a9fba))
* corregidos colores en acciones de edición para páginas de parámetros, políticas y usuarios ([a4ab271](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a4ab271599743b397556caaad69f9d2ff30cb4f9))
* corregidos nombres de variables, variables no utilizadas, organización de componentes ([d891ac3](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d891ac38cfce0a39a65c22f18369c7c1ab2631e6))
* corregidos parámetros de componentes FormInputText CustomDialog e importaciones sin utilizar ([168cdfe](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/168cdfe0a25792c1cf7b3039445d6d9451812a8d))
* denominacion para metodos de AuthProvider, eventos de Sidebar, logout en Navbar ([083c1d8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/083c1d887cfd2da624184c9ce57e8bc61ee93af9))
* dependencias faltantes y variables para Storybook ([31b988d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/31b988d35df412980a96da03f0de4b3f356aabf8))
* deshabilitado telemetria next en el build ([1626413](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/1626413b6da39355db5aaac9b60823e73e6d2d5a))
* eliminado tiempo de expiración de access_token; se ejecuta logout cuando refresh token falla ([0682762](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/0682762dd13a3b8cd7e363379e50191b83952534))
* en data table se muestran los filtros activos sin animación de colapso con skeleton de 10 items ([6e30930](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/6e30930eddb42f58d8156647c4abff871c0b6723))
* espacio de card en modo responsivo ([24f954f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/24f954f2a31fa43bbd7d89942678634cd4f50919))
* estados de usuarios por el componente CustomMensajeEstado ([e2ab0ad](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/e2ab0ad95e04f4d7a9e05a274865e2331d723b87))
* implementación de SWR para hacer peticiones, solo como ejemplo ([199c7e8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/199c7e8fa0acabc812f65cffbf9ffedd1f317885))
* instalado typescript-eslint, para verificar correctamente el tipado de interfaces ([2cef5e3](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2cef5e3a11a978a99dfde413005cf5bf85de54c9))
* modificada condición para mostrar boton que cambia a modo oscuro en pantallas pequeñas ([2daea87](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2daea877eeb0e9b67cc897318acae783fe34d09d))
* modificada estructura de carpetas de componentes de páginas ([19b159a](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/19b159a5fbdbb1a6366c3583ccd3146b05f9aee3))
* modificadas constantes de test ([ca778aa](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ca778aa796f1614f56d613bf5327bed117eca78a))
* modificadas tipografias, en cambio, de color y debug banner ([2e77bc3](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2e77bc3cd765c5fa4b172e592750658dc7e19f87))
* modificado cambio de rol para solicitar lista de modulos y permisos actualizados ([86063fa](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/86063fa654fe9788a54e5360fcbb8e51d24e153a))
* modificado formato de Input de fecha a DD/MM/YYYY aplicado en modal de usuarios ([56d6d18](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/56d6d1844a70e2e77dd2f7d7473cc39ab58109ca))
* modificado orden de carpetas, para ser flexible y escalable ([48dba09](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/48dba09cb8caac439e5938eebdacf188c6c71382))
* modificado orden en que las peticiones interpretan una petición que ha tardado demasiado ([afb4d77](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/afb4d77bbde186727af385f656cc46609d64d7bf))
* modificados colores primario y secundario ([8c4c368](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/8c4c3688532a05afa9377933a352a7a02e2a3740))
* modificados estilos de filas en modo responsivo ([d2dee9a](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d2dee9a771a1d18d0611b7017c5dc561f59f3dc9))
* modificados estilos de títulos de secciones en vista home, con espacio al final ([a24be2e](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a24be2efce410a1126fb24309af24e240cb96327))
* modificados iconos para añadir registros, icono de menu abierto ([72cf815](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/72cf8151bb97da1f2e33e7b73b2b42eab46f3d2d))
* modificados parametros de input type texto, select y custom dialog ([a540c0d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a540c0dcbadde93120e3ce13d4d144ea762f996b))
* optimización en paginado y cambio de color en drawer ([a42cdef](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a42cdefc928b8875f47ba06fa6bada4eb9bb52fd))
* optimizadas importacione innecesarias ([0c1880d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/0c1880d6ab361f78bdf0264c50ce47cdb24ff8fa))
* padding de paginación, color de fondo en tema claro, interfaz de filtro de usuario ([846a2c5](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/846a2c585592938bf1d8f06a12dfd6ccf6a061f3))
* path en imagenes corregido ([6f89cd7](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/6f89cd7d0b1da3f901e67a1e984d53b8101ee526))
* pequeña edición de readme.md ([7737db0](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/7737db095044a2dc14fd486e6789672480bab68b))
* react-hooks/exhaustive-deps para problemas de eslint en index y vista de desbloqueo ([91abca1](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/91abca145a77b3c4cabb1d0692c224435017db47))
* reemplazados campos de formulario en modal de nuevo usuario ([d170371](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d170371c4a30fd34daff0b2aaed9bbd7e2189ac0))
* restaurada versión de React 17, por un error de estilos con MUI 🤦‍♂️ ([a3ab356](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a3ab356f4eb991178378dfd20b94f892e1bcedc3))
* retirada fecha de nacimiento de vista de usuarios en custom ([0484d75](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/0484d7577917e065a8a643ed4ef4af8d687049d7))
* se bloquean los campos de login al iniciar sesión ([2fb1f37](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2fb1f37fdcc20d3dc00d27740ea7b8fcc2e343d7))
* se modifica readme.md para mostrar comando que ejecutara Storybook ([c1186c0](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/c1186c021f95de78bc418c6c0e109e0120277167))
* se mueve debug banner a la parte inferior derecha ([95e1702](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/95e17026e371122666c63f7dfe00c894c047cee7))
* se mueve lógica de verificación de autorización con ciudadanía a AuthProvider, ([e27179f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/e27179f8e0bee17327a8f9e78aa74f53e732fc57))
* separada lógica de acciones en array de elementos ([53e5fd0](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/53e5fd07a08a29617aa5bb19df1df52413691973))
* separada utilidad de fechas para no ser importadas en middleware al momento de la compilación ([d85c009](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d85c00949032dc5c2c6c70f251b1c5f8f47c61ac))
* separado boton ciudadanía para ser reutilizado en Login y Perfil ([9fbb096](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/9fbb09621281ca65c2e07fee4796b6b33f669017))
* separados typos en archivos individuales ([cf49106](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/cf4910684e1f0b99b96f9101bb023a567107ef1a))
* tamaños de iconos por defecto para modo claro y oscuro ([bbfdde9](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bbfdde9471b0bcaf0e4c3913ca60ab91145ca1b7))
* variable path para build ([b820fd2](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/b820fd2304650e8dab45d3f4530cc8dd5916a74e))

## 1.3.0 (2022-06-06)


### Features

* acción de inicio de sesión en proveedor global de sesión y almacenamiento en cookies ([aa17c95](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/aa17c9504a472b49983d3688f7ab7c4851d8ed1c))
* agregadas columnas de nro de documento y personas para vista de usuarios ([460a645](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/460a645703d1266b0ecb6082dba7b1d874699a4b))
* agregado skeleton en modo lista ([cd1e9ba](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/cd1e9ba2c0cfd9ecf8c49cb59e629ca4ca9277a7))
* ajuste en Sidebar para interpretar iconos dinamicos ([2e0f0ae](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2e0f0aef97daa312dae187ce1b96c13239d72fec))
* alineación de botones acción de modal de usuarios ([f72d08c](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f72d08cdc04132170d8548966443c583c214f846))
* añadida api de estado de ejemplo ([65cb0ce](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/65cb0ce3ff8e53e20b765e4ebce128ed92b7d430))
* añadida carpeta de componentes y uso de variable .env ([0a32e32](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/0a32e323b1e19e32541bcc75f8c8a73758c03d7b))
* añadida clase de Servicios que hace peticiones Web usando Axios ([a7493ce](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a7493ceb8af96efe94bbad64b755f4f8868d1eb9))
* añadida función que imprime contenido solo cuando no está en modo producción ([7544b0f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/7544b0f27a5d0637c5549e0883163eaa25c59238))
* añadida librería react-use para controlar mejor el estado de los renders ([09f1ac0](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/09f1ac011dab379d26555cb7b47cdc8e33c5d9a7))
* añadida página de desbloqueo 🔐, redirección a login desde index ([712f6c2](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/712f6c2a15fc2d59aff0df2dbc5141861aecf924))
* añadida páginación y parametros de url a vista de usuarios, políticas y parámetros ([2a02814](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2a0281491a3b4b5225ebe1a34896402e96b6af79))
* añadida petición de restablecimiento de contraseña ([800afd3](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/800afd3a898e19ef036c8857fe4c87149b3344e6))
* añadida utilidad global para cookies; se muestra expiración de JWT ([eaeacba](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/eaeacbaafb629bd763e42eff2397f8171a0d1309))
* añadida utilidad para codificar y decodificar base64 ([4ff1424](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/4ff14245e0b7564148116c6bbd9697c186c1c30c))
* añadida verificación de inicio de sesión antes de mostrar una ruta layoutUser ([4407bec](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/4407bec376272148ac80f19bd40005512f786e89))
* añadida vista de alerta que ejecuta acciones en navbar y vista de usuarios ([057dc28](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/057dc28293dba2f4969dc14c85987042df199214))
* añadida vista home de ejemplo con descripción de los módulos ([f96c06f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f96c06f4efe954e8f98db0bb95583c6fd97eff17))
* añadida vista inicial CRUD políticas ([0433558](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/043355868fb78022a7629e98025e3998193a73f4))
* añadida vista inicial de CRUD de parámetros ([d8b667e](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d8b667e7ff382fa4cc881f73fe56341c0cd7bad5))
* añadida vista inicial para login, duplicados navbar y layouts para mejor control ([f8c6ac7](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f8c6ac7803b0a89213d8f7d074fb014e55971651))
* añadida vista modal de edición de políticas ([59e6031](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/59e60316b7bb99677ccf8dbb5d6ae2a2f96e5da2))
* añadidas alertas que si se adaptan a pantallas moviles en reemplazo de react-toastify ([df577c2](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/df577c2d42f1a29af65b32e3fb9b29b38248c29c))
* añadidas animaciones para modales de dialogo ([dc75e89](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/dc75e897b0c0a3afb0621c393ab886e10ba77755))
* añadidas peticiones para editar y eliminar políticas ([4c020cb](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/4c020cbc3090d17b10212d86432c509375ac1e58))
* añadidas tipografía 'Poppins' de forma global ([787cee3](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/787cee3e24596c0923f6659cc733e7c1517690df))
* añadido archivo para centralizar interfaces reutilizables ([c206b8f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/c206b8f301728bd91fd02c1157131b70c7d8b4fd))
* añadido boton clear a filtros y cambio de color de fondo ([24ad228](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/24ad228732768a5dc2603a3b82d9201e699007a3))
* añadido camio de rol dinámico desde Navbar que modifica modulos de Sidebar usando AuthProvider ([97b3aac](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/97b3aacf9a4a504a0430febab3f2fd51a1fcd56a))
* añadido comando que crea .metadata_never_index para no indexar node_modules en macos ([dfe8b2d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/dfe8b2d19b0985d91f9b9d0cbd67b0fe82fde617))
* añadido espacio para filtros, paginación en CustomDataTable implementado en vista de políticas ([c61b5b9](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/c61b5b9a196e2f10f67702e023b612d4d70a066f))
* añadido evento para limpiar un campo de texto ([d8519a9](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d8519a99dc7dce2feea791588d94579ce07aa813))
* añadido filtro de nombres en la página de usuarios ([55e978f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/55e978f04def977a158a34aad298fec3eb82c5f1))
* añadido formulario de inicio de sesión, ajuste tema global para botones ([c3909d6](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/c3909d6daddc979601f73b998da4ca84b7a0e1e7))
* añadido inicio de sesión usando Ciudadanía Digital, con redirección en login ([73b2fff](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/73b2fff585618086e5d41f7d0627fe28ef9e5e47))
* añadido inicio de sesión usando Ciudadaníd Digital, con redirección en login ([bfb58df](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bfb58dfc89962de79d1d1a7c9615fb917903cf4e))
* añadido input form que permite seleccionar multiples elementos ([254b355](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/254b35524b66824831c410bf24a25019e1b4ef21))
* añadido manual de instalación y despliegue ([b36251e](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/b36251ee0c2e8d103dac361f6c1604e85f9d460c))
* añadido mensaje de error en CustomTable en caso de suceder ([26248c7](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/26248c7013559bf19f51d95545eb14899be8d9eb))
* añadido método de cambio de estado ([d5d0bf4](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d5d0bf49ce2f10676679ad89a67e43c77db9ef0f))
* añadido método onChange para Input Drop Down ([45b4a57](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/45b4a575ccb30cea260dbd95bdbd8960bdc6bf16))
* añadido método que hace peticiones con la sesión iniciada ([85b3f04](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/85b3f045742d3bccd523b6df5ed1812a79f6cd40))
* añadido modal de cambio de contraseña desde vista de perfil con validación de seguridad zxcvbn ([f6ea269](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f6ea269d64570f920d35c78bedb16e45670547a4))
* añadido modal filtro de roles para modal de usuarios, que se borran al descartarse ([54cda45](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/54cda452c807f55787f044d5ead8d3325b845ae5))
* añadido modal para crear o adicionar parámetros ([840211b](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/840211b45eaf273c0f8100bf0ce2ea73709f36b1))
* añadido modal reutilizable 🥳 ([1eea4e3](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/1eea4e3438ca399dd5bc76e5dd959b4b2fcc4ecb))
* añadido modo oscuro automático ([20411d9](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/20411d9cfb062f10e5dd989b52a2910506b247b5))
* añadido modo oscuro automático con y también se guarda configuración del usuario ([7f71c6d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/7f71c6d176648592e51f4f9ad8777567b703c2a3))
* añadido nombre de usuario en Appbar; completada vista de perfil ([b5f51ed](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/b5f51edfb60b14342e5354586a83a2023ff28802))
* añadido nombre y rol de usuario en navbar que oculta el nombre cuando la vista es pequeña ([bd9f02e](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bd9f02e01df339b099b97f263a7c491bf9e7313a))
* añadido nuevo filtro de usuarios que conserva el estado y se ejecuta con función debounce ([bad818b](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bad818b86b301ceb2027947c8bc1458fe96228ba))
* añadido onChange para dropdown, referencias para input text y PaperProps para Custom dialog ([3f9584d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/3f9584d2a2475af1e348d0d95651553caa8cf060))
* añadido progreso líneal y campos deshabilitados implementados en el formulario de usario ([09b3bcf](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/09b3bcfc923c688e65c4401040e61f0b86a03f8d))
* añadido SideBar, NavBar y manejadores de estado para controlar si el AppBar está abierto o no ([84899d1](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/84899d1baf0bf46b7a72215e039df806d369b88f))
* añadido skeleton para tablas; completada petición para obtener usuarios ([d56cad2](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d56cad28be70e3ea7b38949f7ccc715fa9e9c01f))
* añadido soporte para refresh token ([bef0d4c](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bef0d4c0feecaa10cdbde2682a07ffcd9bc01a5e))
* añadidos campos de formulario para añadir o editar usuarios ([106c93d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/106c93daa39efdff44ebfc91504eee2b97a5e44d))
* añadidos checkbox en multi selector ([9fc55a8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/9fc55a8134c95ca61184ffed99b211f765bfc095))
* añadidos componentes para texto en el login, además de selector de fecha, dropdown, radio ([ccd2342](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ccd2342a255cb7ad6b3c2fe8afc03d5e44e6c29f))
* añadido filtro de roles para vista de usuarios (aún en progreso 🔨) ([978c996](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/978c99641c9f213370a1e044ec3d899fe6b03f89))
* añadidos iconos para NavBar ([e4c61be](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/e4c61bee99e5d118a4f11cf53981aee8e035fea2))
* añadidos metodos que agregan datos del último commit en la cabecera (idea de [@malejo](https://gitlab.agetic.gob.bo/malejo) ) ([c9f2861](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/c9f28615771170f3a7b9c05748268330e4c29d50))
* añadidos nombres en iconos para mejorar la accesibilidad y descripción en meta tags ([726ecd8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/726ecd8cb98d19bb4408cf0640c4e609f009918f))
* añadidos selectores de roles y selector multiple de acciones para políticas ([bda03e8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bda03e8145e45c4512e2e974b2bb25c454132e37))
* animaciones en Layouts al cargar el login o al iniciar sesión; corregida proporción de Sidebar ([bf071c2](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bf071c229bf979c14afd19fbd47970a352e47003))
* corregido error al parsear la fecha en datepicker, dado que DayJS parsea automáticamente ([2581623](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2581623020d479e4206d7515042504fcfc758677))
* corregido handler de mensajes al hacer peticiones web; añadida petición inicial de estado ([a576523](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a576523d51bb8f5f16915141c4d5cc9c77b61c89))
* corregidos errores de keys en componentes en formato lista ([a839670](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a8396703070e18bf7967574d01881b27f2269db6))
* datatable responsivo dentro de usuarios, con metodos genericos para dibujar los elementos ([2b0de84](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2b0de8466d65a0cfbe4050a0a8e8b077bfadc986))
* **global:** instalado NextJS, MaterialUI con Typescript y ajustes EsLint ([ace4848](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ace484897ccdc5e3c4e7df19c4d1863f548f38ad))
* implementado renderizado condicional de botones agregar y editar en vista de usuarios ([74f5e2d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/74f5e2d622fb82b09acc9e0f6e88088ee8a68bc0))
* modificada asignación de permisos por app (CRUD), para modal de políticas ([7c6344a](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/7c6344af66cfcd3db5a098f46c6f9b379d433ba4))
* modificado orden de páginas de admin, para añadir un midleware que valide si tiene token ([311d951](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/311d9511934c334ac4f5e9e1eb50baea2426e32f))
* modificado tamaño de label genérico para todos los componentes de formulario parametrizable ([1caa6bc](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/1caa6bc2d08e457d0ed0dbba824665979f26c615))
* modificados estilos de login para tener un ancho máximo ([b074d90](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/b074d90c0f236760ba7390dca15a3b97a9f7d881))
* provider para vistas a pantalla completa que se usan desde layout de usuario y eventos login ([afa3f81](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/afa3f813d9c0bc9841dfa2fb19d8d1e689888242))
* retirada opción de ordenar en columna ([bddd25a](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bddd25accdfcf9577968cc43197a03447e46f618))
* se crea componente IconoTooltip para contener iconos y eventos ([fc57a15](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/fc57a157280b01a3883281732a3d7bb80ccb2970))
* se mueve la lógica de interpretar permisos a auth provider y se usa en políticas y parámetros ([d7007f4](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d7007f4f493c858febb059f52a10fa89f6da2853))
* separada lógica de componentes de modal de usuario y filtros en componentes separados ([463e1a8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/463e1a89c7d80e52db92ba5c146eeecff9c0ed4e))
* separada lógica de datatable para ser reutilizable 🥳 ([6afa847](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/6afa8471cbd6dec4d94699b4a0185ba47308faae))
* separada lógica de modales de parámetros y políticas ([0ab2dec](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/0ab2dec5acf7e427815020d109a5360e3ec62348))
* utilidad para almacenamiento local; eventos de Sidebar para mostrar menus y cambiar de página ([7a5e5e8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/7a5e5e80774a2b34162003ab177368eaadf04add))
* variables de .env disponibles en forma estática variables APP_ENV, SITE_NAME y BASE_URL ([ff40a50](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ff40a5061b500b43c2dc6b2663aca5771d07a6f0))
* vistas iniciales para perfil, parametros, politicas y usuarios con ejemplo de datatable ([f635f9e](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f635f9e7d219dbcfc427181cb1b6ad5bda70e0cf))


### Bug Fixes

* actualizada dependencia react-toastify a versión 0, corregido env.sample ([4556c50](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/4556c5092a6039e2ddf12d19006539814c8c81fb))
* actualizadas versiones estables de dependencias, eliminadas dependencias sin utilizar ([f3e884b](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f3e884bde40b34643dd83e44be874aeb7a124b0b))
* aislada proporción de layout de usuario para interpretar contenido ([3e4e6c4](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/3e4e6c4177e8adce41eda8f3c84a96d0f73239b9))
* ajuste de estilo en custom data table, para desplegar filtros a mano ([78fd200](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/78fd20022a2576c61c879be8533e8d8d2397d260))
* ajuste en sidebar para mostrarse u ocultarse en escala md ([2f40813](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2f4081365a689f96602b0254bcf8ad5e47aa6880))
* ajuste experimental de colores 👨‍🎨 ([68a3b60](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/68a3b60b4a6ffd13f158f40969504f5853f829b6))
* ajustes en icono tooltip para color en modo desactivado ([ebba5a5](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ebba5a52f63fda86da756dd72b78a3766784811d))
* ajustes en tema y titulos ([75b66e3](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/75b66e3549c0f86d1fe81f07d0a0d25e62403ed5))
* ajustes en textos para ser color texto secundario; se reemplazan router.push por router.replace ([ccfb158](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ccfb158a00b17ce24866e7678e303ecb4776aa53))
* ajustes para login responsivo ([d8efcca](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d8efcca3624ed48d72e9351c908dc74db00c804c))
* ajustes visuales en ventanamos modales ([50fec9e](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/50fec9e7186de3bbd585e9857df10341b0407434))
* añadida opción de cierre automatico al redimensionar la pantalla ([2f9b5d6](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2f9b5d6433fc40d5fcab27c43596febf085689c4))
* añadida opción para guardar permisos al iniciar y validar la sesión ([a3fbba1](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a3fbba12d5cafc88ae8b0cf0ff4cbc7765c0a547))
* añadida utilidad global de alertas, con variantes correcto, incorrecto, advertencia y normal ([e60bacb](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/e60bacbe3d192207be56f77c95d9e2203d2696ea))
* añadida vista de mensaje de datos vacios en custom data table ([3146db7](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/3146db7fff83295cde69133304e0ace9bfb6cc0f))
* añadidadas dependencias nuevas para fechas ([bc7312a](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bc7312a4651d593ef1f24c6c37c5ceea8e64d0f7))
* añadidas validaciones de fechas en input date, estilo de título en custom data table ([cfb7802](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/cfb7802ff228a45807ca0339394082c13c09f5a2))
* añadida vista detalle de usuario y lista de roles ([a794c1f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a794c1f3c2779038d92d0f9026df5819680c61e5))
* añadido control de interpretación de html en intérprete de mensajes, eliminado ToastContainer ([3169a4b](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/3169a4b01180acfccbc1a396ed8eb90aa6fb2545))
* añadido delay al cerrar modal de usaurios, políticas y parámetros ([ec3dd63](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ec3dd63ca093d6a95329723e144df11f196af7ac))
* añadido evento para responder en caso de error en la red 🌎 ([b934d51](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/b934d510472418d62b6dd55fdd0e6d54a4da28a2))
* añadido filtro de roles para usuarios ([0e6ca75](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/0e6ca75f635955350afaf558027065eea22bed85))
* añadido helper text para campo de texto y selector ([a086186](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a0861862a99d0ac5ff87e28ccd1b1048a2355e43))
* añadido método onchange a form input text ([b73065d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/b73065d0de92f6ee30907da304ccfcd4f67e5141))
* añadido método que guarda o actualiza un usuario ([92c2d11](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/92c2d116f54196539bea7c200a15d045744d566d))
* añadidos flags para no hacer peticiones hasta que se verifique la sesión ([274cce8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/274cce8d95000c1f7aed0988d762cc5d2811f98a))
* ancho de layout de usarios diferente para movil y escritorio ([1789187](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/17891874b8d68aea6fa1c60765bf870563167011))
* cambio de letra y colores de texto en custom table ([8e39317](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/8e393179e2095aceb9e16e473559322082591782))
* colores de vista home y proporción de título en datatable para móviles ([21c3d8c](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/21c3d8c6d7553aa4c3a67645daad8c75b222896b))
* corrección pliege de layout de usuario para movil y eliminado CardActionArea de CustomDataTable ([584ed1f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/584ed1f480b88378612f9796e111f6e5a3a03131))
* correcciones React 18: añadido tipo PropsWithChildren para LayoutUser AlertDialog, CustomDialog ([bb1b16f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bb1b16f068ff496fa2daad927c878e1927802e90))
* corregida forma de interpretar mensajes de error, ya sean string u objetos ([a881878](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a881878505ccdc92f2f0504ed4e7871dfa46097e))
* corregida importación de utilidad que imprime, para importar otras utilidas más rapidamente ([9edff25](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/9edff2510854c8ad34ce4e91eb3a8d8e888bd34b))
* corregida importación no necesaria de modulos de React ([aef7b85](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/aef7b85a4047cacf52d4d45041e60d2e5a435d2c))
* corregida proporción de campos de roles, correo para ocupar tamaño completo en modal de usuario ([e453870](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/e453870cffa567fa30565ede3c207e8a5dbc073b))
* corregida validación de formato de fecha válida usando momentJS (porque DateJS tiene errores) ([3c8bbfd](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/3c8bbfd50ae8172a3673d746fc3b223d202608e8))
* corregido al cerrar sesión que ocasionaba que aún se viera por un segundo la vista home ([b32774c](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/b32774cc7948ba235b98f9342307f2da36b7fdb8))
* corregido ancho de columnas de módulos en vista home para submodulos de un solo item ([9ffdb88](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/9ffdb88c410b457b3582fcef4be149c61a579ee4))
* corregido color de fondo de dialogos en modo oscuro ([608bfdc](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/608bfdc69ab1f8a2e58e778cd168a8a03aae2e36))
* corregido dentro de la ventana modal que ocasionaba que se muestren los valores por defecto ([c27a965](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/c27a96557368070b1ad302f33d78860b82a74e9b))
* corregido divider de modal en custom dialog, para tomar el color del entorno ([1f62f89](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/1f62f89b0ad866092e2462d0e32eb4d68a9e0949))
* corregido error al cerrar sesión que ocasionaba que aún se pudiera usar rutas protegidas 🤦‍♂️ ([94aa3c2](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/94aa3c25dca5b57f7b093fce46f5fdc3049e4a61))
* corregido error con para componentes que requieren children como parámetro, eliminado react-use ([7abad86](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/7abad867f7d489dbdb7759b196fcca952f1a2b2c))
* corregido error de commit liint instalando dependencias locales ([5139f12](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/5139f125d582602ff8d53aeb2c2a2cbe8658bbd1))
* corregido error en importación de icono con error de librería ([9582b08](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/9582b08f1e4ba6967cff50e0df71a7857e53cc26))
* corregido error en modo oscuro al no dejar interpretar el modo claro apropiadamente ([f45816a](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f45816a33dd8b274b0cf6faa8ce6824d01ec58f1))
* corregido error en redirección a vista home cuando se cambia de rol ([8a2c368](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/8a2c36815a6cbee810348150138e65479519820c))
* corregido error en redirección de perfil desde Navbar ([dd6e29c](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/dd6e29cd12b8a994ab288943ec00586f06b0a1b6))
* corregido error que ocasionaba que no se recarguen los items de los menus al cambiar de rol ([46b86c0](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/46b86c0851cdd6e7d69436b1ea377486708af4c1))
* corregido error que ocasionaba que no se recarguen los items de los menus al cambiar de rol ([761e0f0](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/761e0f0ebd5a3e21c61da3e99259b14c26a02e85))
* corregido form input dropdown para tener valores por defecto ([d3f0dae](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d3f0daeab528c1e5c7bd46562cbd33f5b6a5f50c))
* corregido modo oscuro inicial automatico ([6f68a1b](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/6f68a1bf9a84ad6a23021c39b5a31577bf4fa72a))
* corregido orden en que se cierran vistas modales de usuarios, políticas y parámetros ([eb228ff](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/eb228ff13a4f515a2a18dc83380ae1c12be1936a))
* corregido orden en que se renderiza las tablas de custom data table ([c001f35](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/c001f35b1d8463679cd2ba0c8d38aed109e901c7))
* corregidos colores en acciones de edición para páginas de parámetros, políticas y usuarios ([a4ab271](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a4ab271599743b397556caaad69f9d2ff30cb4f9))
* denominacion para metodos de AuthProvider, eventos de Sidebar, logout en Navbar ([083c1d8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/083c1d887cfd2da624184c9ce57e8bc61ee93af9))
* en data table se muestran los filtros activos sin animación de colapso con skeleton de 10 items ([6e30930](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/6e30930eddb42f58d8156647c4abff871c0b6723))
* espacio de card en modo responsivo ([24f954f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/24f954f2a31fa43bbd7d89942678634cd4f50919))
* implementación de SWR para hacer peticiones, solo como ejemplo ([199c7e8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/199c7e8fa0acabc812f65cffbf9ffedd1f317885))
* modificada condición para mostrar boton que cambia a modo oscuro en pantallas pequeñas ([2daea87](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2daea877eeb0e9b67cc897318acae783fe34d09d))
* modificada estructura de carpetas de componentes de páginas ([19b159a](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/19b159a5fbdbb1a6366c3583ccd3146b05f9aee3))
* modificadas constantes de test ([ca778aa](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ca778aa796f1614f56d613bf5327bed117eca78a))
* modificadas tipografias, en cambio, de color y debug banner ([2e77bc3](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2e77bc3cd765c5fa4b172e592750658dc7e19f87))
* modificado cambio de rol para solicitar lista de modulos y permisos actualizados ([86063fa](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/86063fa654fe9788a54e5360fcbb8e51d24e153a))
* modificado formato de Input de fecha a DD/MM/YYYY aplicado en modal de usuarios ([56d6d18](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/56d6d1844a70e2e77dd2f7d7473cc39ab58109ca))
* modificado orden de carpetas, para ser flexible y escalable ([48dba09](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/48dba09cb8caac439e5938eebdacf188c6c71382))
* modificado orden en que las peticiones interpretan una petición que ha tardado demasiado ([afb4d77](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/afb4d77bbde186727af385f656cc46609d64d7bf))
* modificados colores primario y secundario ([8c4c368](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/8c4c3688532a05afa9377933a352a7a02e2a3740))
* modificados estilos de filas en modo responsivo ([d2dee9a](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d2dee9a771a1d18d0611b7017c5dc561f59f3dc9))
* modificados estilos de títulos de secciones en vista home, con espacio al final ([a24be2e](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a24be2efce410a1126fb24309af24e240cb96327))
* modificados iconos para añadir registros, icono de menu abierto ([72cf815](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/72cf8151bb97da1f2e33e7b73b2b42eab46f3d2d))
* modificados parametros de input type texto, select y custom dialog ([a540c0d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a540c0dcbadde93120e3ce13d4d144ea762f996b))
* optimización en paginado y cambio de color en drawer ([a42cdef](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a42cdefc928b8875f47ba06fa6bada4eb9bb52fd))
* padding de paginación, color de fondo en tema claro, interfaz de filtro de usuario ([846a2c5](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/846a2c585592938bf1d8f06a12dfd6ccf6a061f3))
* pequeña edición de readme.md ([7737db0](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/7737db095044a2dc14fd486e6789672480bab68b))
* react-hooks/exhaustive-deps para problemas de eslint en index y vista de desbloqueo ([91abca1](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/91abca145a77b3c4cabb1d0692c224435017db47))
* reemplazados campos de formulario en modal de nuevo usuario ([d170371](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d170371c4a30fd34daff0b2aaed9bbd7e2189ac0))
* restaurada versión de React 17, por un error de estilos con MUI 🤦‍♂️ ([a3ab356](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a3ab356f4eb991178378dfd20b94f892e1bcedc3))
* retirada fecha de nacimiento de vista de usuarios en custom ([0484d75](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/0484d7577917e065a8a643ed4ef4af8d687049d7))
* se bloquean los campos de login al iniciar sesión ([2fb1f37](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2fb1f37fdcc20d3dc00d27740ea7b8fcc2e343d7))
* se mueve debug banner a la parte inferior derecha ([95e1702](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/95e17026e371122666c63f7dfe00c894c047cee7))
* separada lógica de acciones en array de elementos ([53e5fd0](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/53e5fd07a08a29617aa5bb19df1df52413691973))
* separada utilidad de fechas para no ser importadas en middleware al momento de la compilación ([d85c009](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d85c00949032dc5c2c6c70f251b1c5f8f47c61ac))
* separados typos en archivos individuales ([cf49106](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/cf4910684e1f0b99b96f9101bb023a567107ef1a))

## 1.2.0 (2022-05-27)


### Features

* acción de inicio de sesión en proveedor global de sesión y almacenamiento en cookies ([aa17c95](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/aa17c9504a472b49983d3688f7ab7c4851d8ed1c))
* agregadas columnas de nro de documento y personas para vista de usuarios ([460a645](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/460a645703d1266b0ecb6082dba7b1d874699a4b))
* agregado skeleton en modo lista ([cd1e9ba](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/cd1e9ba2c0cfd9ecf8c49cb59e629ca4ca9277a7))
* ajuste en Sidebar para interpretar iconos dinamicos ([2e0f0ae](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2e0f0aef97daa312dae187ce1b96c13239d72fec))
* alineación de botones acción de modal de usuarios ([f72d08c](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f72d08cdc04132170d8548966443c583c214f846))
* añadida api de estado de ejemplo ([65cb0ce](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/65cb0ce3ff8e53e20b765e4ebce128ed92b7d430))
* añadida carpeta de componentes y uso de variable .env ([0a32e32](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/0a32e323b1e19e32541bcc75f8c8a73758c03d7b))
* añadida clase de Servicios que hace peticiones Web usando Axios ([a7493ce](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a7493ceb8af96efe94bbad64b755f4f8868d1eb9))
* añadida función que imprime contenido solo cuando no está en modo producción ([7544b0f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/7544b0f27a5d0637c5549e0883163eaa25c59238))
* añadida librería react-use para controlar mejor el estado de los renders ([09f1ac0](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/09f1ac011dab379d26555cb7b47cdc8e33c5d9a7))
* añadida página de desbloqueo 🔐, redirección a login desde index ([712f6c2](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/712f6c2a15fc2d59aff0df2dbc5141861aecf924))
* añadida páginación y parametros de url a vista de usuarios, políticas y parámetros ([2a02814](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2a0281491a3b4b5225ebe1a34896402e96b6af79))
* añadida petición de restablecimiento de contraseña ([800afd3](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/800afd3a898e19ef036c8857fe4c87149b3344e6))
* añadida utilidad global para cookies; se muestra expiración de JWT ([eaeacba](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/eaeacbaafb629bd763e42eff2397f8171a0d1309))
* añadida utilidad para codificar y decodificar base64 ([4ff1424](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/4ff14245e0b7564148116c6bbd9697c186c1c30c))
* añadida verificación de inicio de sesión antes de mostrar una ruta layoutUser ([4407bec](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/4407bec376272148ac80f19bd40005512f786e89))
* añadida vista de alerta que ejecuta acciones en navbar y vista de usuarios ([057dc28](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/057dc28293dba2f4969dc14c85987042df199214))
* añadida vista home de ejemplo con descripción de los módulos ([f96c06f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f96c06f4efe954e8f98db0bb95583c6fd97eff17))
* añadida vista inicial CRUD políticas ([0433558](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/043355868fb78022a7629e98025e3998193a73f4))
* añadida vista inicial de CRUD de parámetros ([d8b667e](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d8b667e7ff382fa4cc881f73fe56341c0cd7bad5))
* añadida vista inicial para login, duplicados navbar y layouts para mejor control ([f8c6ac7](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f8c6ac7803b0a89213d8f7d074fb014e55971651))
* añadida vista modal de edición de políticas ([59e6031](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/59e60316b7bb99677ccf8dbb5d6ae2a2f96e5da2))
* añadidas alertas que si se adaptan a pantallas moviles en reemplazo de react-toastify ([df577c2](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/df577c2d42f1a29af65b32e3fb9b29b38248c29c))
* añadidas animaciones para modales de dialogo ([dc75e89](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/dc75e897b0c0a3afb0621c393ab886e10ba77755))
* añadidas peticiones para editar y eliminar políticas ([4c020cb](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/4c020cbc3090d17b10212d86432c509375ac1e58))
* añadidas tipografía 'Poppins' de forma global ([787cee3](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/787cee3e24596c0923f6659cc733e7c1517690df))
* añadido archivo para centralizar interfaces reutilizables ([c206b8f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/c206b8f301728bd91fd02c1157131b70c7d8b4fd))
* añadido boton clear a filtros y cambio de color de fondo ([24ad228](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/24ad228732768a5dc2603a3b82d9201e699007a3))
* añadido camio de rol dinámico desde Navbar que modifica modulos de Sidebar usando AuthProvider ([97b3aac](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/97b3aacf9a4a504a0430febab3f2fd51a1fcd56a))
* añadido comando que crea .metadata_never_index para no indexar node_modules en macos ([dfe8b2d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/dfe8b2d19b0985d91f9b9d0cbd67b0fe82fde617))
* añadido espacio para filtros, paginación en CustomDataTable implementado en vista de políticas ([c61b5b9](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/c61b5b9a196e2f10f67702e023b612d4d70a066f))
* añadido evento para limpiar un campo de texto ([d8519a9](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d8519a99dc7dce2feea791588d94579ce07aa813))
* añadido filtro de nombres en la página de usuarios ([55e978f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/55e978f04def977a158a34aad298fec3eb82c5f1))
* añadido formulario de inicio de sesión, ajuste tema global para botones ([c3909d6](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/c3909d6daddc979601f73b998da4ca84b7a0e1e7))
* añadido input form que permite seleccionar multiples elementos ([254b355](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/254b35524b66824831c410bf24a25019e1b4ef21))
* añadido manual de instalación y despliegue ([b36251e](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/b36251ee0c2e8d103dac361f6c1604e85f9d460c))
* añadido mensaje de error en CustomTable en caso de suceder ([26248c7](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/26248c7013559bf19f51d95545eb14899be8d9eb))
* añadido método de cambio de estado ([d5d0bf4](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d5d0bf49ce2f10676679ad89a67e43c77db9ef0f))
* añadido método onChange para Input Drop Down ([45b4a57](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/45b4a575ccb30cea260dbd95bdbd8960bdc6bf16))
* añadido método que hace peticiones con la sesión iniciada ([85b3f04](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/85b3f045742d3bccd523b6df5ed1812a79f6cd40))
* añadido modal de cambio de contraseña desde vista de perfil con validación de seguridad zxcvbn ([f6ea269](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f6ea269d64570f920d35c78bedb16e45670547a4))
* añadido modal filtro de roles para modal de usuarios, que se borran al descartarse ([54cda45](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/54cda452c807f55787f044d5ead8d3325b845ae5))
* añadido modal para crear o adicionar parámetros ([840211b](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/840211b45eaf273c0f8100bf0ce2ea73709f36b1))
* añadido modal reutilizable 🥳 ([1eea4e3](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/1eea4e3438ca399dd5bc76e5dd959b4b2fcc4ecb))
* añadido modo oscuro automático ([20411d9](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/20411d9cfb062f10e5dd989b52a2910506b247b5))
* añadido modo oscuro automático con y también se guarda configuración del usuario ([7f71c6d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/7f71c6d176648592e51f4f9ad8777567b703c2a3))
* añadido nombre de usuario en Appbar; completada vista de perfil ([b5f51ed](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/b5f51edfb60b14342e5354586a83a2023ff28802))
* añadido nombre y rol de usuario en navbar que oculta el nombre cuando la vista es pequeña ([bd9f02e](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bd9f02e01df339b099b97f263a7c491bf9e7313a))
* añadido nuevo filtro de usuarios que conserva el estado y se ejecuta con función debounce ([bad818b](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bad818b86b301ceb2027947c8bc1458fe96228ba))
* añadido onChange para dropdown, referencias para input text y PaperProps para Custom dialog ([3f9584d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/3f9584d2a2475af1e348d0d95651553caa8cf060))
* añadido progreso líneal y campos deshabilitados implementados en el formulario de usario ([09b3bcf](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/09b3bcfc923c688e65c4401040e61f0b86a03f8d))
* añadido SideBar, NavBar y manejadores de estado para controlar si el AppBar está abierto o no ([84899d1](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/84899d1baf0bf46b7a72215e039df806d369b88f))
* añadido skeleton para tablas; completada petición para obtener usuarios ([d56cad2](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d56cad28be70e3ea7b38949f7ccc715fa9e9c01f))
* añadidos campos de formulario para añadir o editar usuarios ([106c93d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/106c93daa39efdff44ebfc91504eee2b97a5e44d))
* añadidos checkbox en multi selector ([9fc55a8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/9fc55a8134c95ca61184ffed99b211f765bfc095))
* añadidos componentes para texto en el login, además de selector de fecha, dropdown, radio ([ccd2342](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ccd2342a255cb7ad6b3c2fe8afc03d5e44e6c29f))
* añadido filtro de roles para vista de usuarios (aún en progreso 🔨) ([978c996](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/978c99641c9f213370a1e044ec3d899fe6b03f89))
* añadidos iconos para NavBar ([e4c61be](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/e4c61bee99e5d118a4f11cf53981aee8e035fea2))
* añadidos metodos que agregan datos del último commit en la cabecera (idea de [@malejo](https://gitlab.agetic.gob.bo/malejo) ) ([c9f2861](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/c9f28615771170f3a7b9c05748268330e4c29d50))
* añadidos nombres en iconos para mejorar la accesibilidad y descripción en meta tags ([726ecd8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/726ecd8cb98d19bb4408cf0640c4e609f009918f))
* añadidos selectores de roles y selector multiple de acciones para políticas ([bda03e8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bda03e8145e45c4512e2e974b2bb25c454132e37))
* animaciones en Layouts al cargar el login o al iniciar sesión; corregida proporción de Sidebar ([bf071c2](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bf071c229bf979c14afd19fbd47970a352e47003))
* corregido error al parsear la fecha en datepicker, dado que DayJS parsea automáticamente ([2581623](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2581623020d479e4206d7515042504fcfc758677))
* corregido handler de mensajes al hacer peticiones web; añadida petición inicial de estado ([a576523](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a576523d51bb8f5f16915141c4d5cc9c77b61c89))
* corregidos errores de keys en componentes en formato lista ([a839670](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a8396703070e18bf7967574d01881b27f2269db6))
* datatable responsivo dentro de usuarios, con metodos genericos para dibujar los elementos ([2b0de84](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2b0de8466d65a0cfbe4050a0a8e8b077bfadc986))
* **global:** instalado NextJS, MaterialUI con Typescript y ajustes EsLint ([ace4848](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ace484897ccdc5e3c4e7df19c4d1863f548f38ad))
* implementado renderizado condicional de botones agregar y editar en vista de usuarios ([74f5e2d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/74f5e2d622fb82b09acc9e0f6e88088ee8a68bc0))
* modificada asignación de permisos por app (CRUD), para modal de políticas ([7c6344a](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/7c6344af66cfcd3db5a098f46c6f9b379d433ba4))
* modificado orden de páginas de admin, para añadir un midleware que valide si tiene token ([311d951](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/311d9511934c334ac4f5e9e1eb50baea2426e32f))
* modificado tamaño de label genérico para todos los componentes de formulario parametrizable ([1caa6bc](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/1caa6bc2d08e457d0ed0dbba824665979f26c615))
* modificados estilos de login para tener un ancho máximo ([b074d90](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/b074d90c0f236760ba7390dca15a3b97a9f7d881))
* provider para vistas a pantalla completa que se usan desde layout de usuario y eventos login ([afa3f81](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/afa3f813d9c0bc9841dfa2fb19d8d1e689888242))
* retirada opción de ordenar en columna ([bddd25a](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bddd25accdfcf9577968cc43197a03447e46f618))
* se crea componente IconoTooltip para contener iconos y eventos ([fc57a15](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/fc57a157280b01a3883281732a3d7bb80ccb2970))
* se mueve la lógica de interpretar permisos a auth provider y se usa en políticas y parámetros ([d7007f4](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d7007f4f493c858febb059f52a10fa89f6da2853))
* separada lógica de componentes de modal de usuario y filtros en componentes separados ([463e1a8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/463e1a89c7d80e52db92ba5c146eeecff9c0ed4e))
* separada lógica de datatable para ser reutilizable 🥳 ([6afa847](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/6afa8471cbd6dec4d94699b4a0185ba47308faae))
* separada lógica de modales de parámetros y políticas ([0ab2dec](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/0ab2dec5acf7e427815020d109a5360e3ec62348))
* utilidad para almacenamiento local; eventos de Sidebar para mostrar menus y cambiar de página ([7a5e5e8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/7a5e5e80774a2b34162003ab177368eaadf04add))
* variables de .env disponibles en forma estática variables APP_ENV, SITE_NAME y BASE_URL ([ff40a50](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ff40a5061b500b43c2dc6b2663aca5771d07a6f0))
* vistas iniciales para perfil, parametros, politicas y usuarios con ejemplo de datatable ([f635f9e](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f635f9e7d219dbcfc427181cb1b6ad5bda70e0cf))


### Bug Fixes

* actualizada dependencia react-toastify a versión 0, corregido env.sample ([4556c50](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/4556c5092a6039e2ddf12d19006539814c8c81fb))
* actualizadas versiones estables de dependencias, eliminadas dependencias sin utilizar ([f3e884b](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f3e884bde40b34643dd83e44be874aeb7a124b0b))
* aislada proporción de layout de usuario para interpretar contenido ([3e4e6c4](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/3e4e6c4177e8adce41eda8f3c84a96d0f73239b9))
* ajuste de estilo en custom data table, para desplegar filtros a mano ([78fd200](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/78fd20022a2576c61c879be8533e8d8d2397d260))
* ajuste en sidebar para mostrarse u ocultarse en escala md ([2f40813](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2f4081365a689f96602b0254bcf8ad5e47aa6880))
* ajuste experimental de colores 👨‍🎨 ([68a3b60](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/68a3b60b4a6ffd13f158f40969504f5853f829b6))
* ajustes en icono tooltip para color en modo desactivado ([ebba5a5](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ebba5a52f63fda86da756dd72b78a3766784811d))
* ajustes en tema y titulos ([75b66e3](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/75b66e3549c0f86d1fe81f07d0a0d25e62403ed5))
* ajustes en textos para ser color texto secundario; se reemplazan router.push por router.replace ([ccfb158](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ccfb158a00b17ce24866e7678e303ecb4776aa53))
* ajustes para login responsivo ([d8efcca](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d8efcca3624ed48d72e9351c908dc74db00c804c))
* ajustes visuales en ventanamos modales ([50fec9e](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/50fec9e7186de3bbd585e9857df10341b0407434))
* añadida opción de cierre automatico al redimensionar la pantalla ([2f9b5d6](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2f9b5d6433fc40d5fcab27c43596febf085689c4))
* añadida opción para guardar permisos al iniciar y validar la sesión ([a3fbba1](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a3fbba12d5cafc88ae8b0cf0ff4cbc7765c0a547))
* añadida utilidad global de alertas, con variantes correcto, incorrecto, advertencia y normal ([e60bacb](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/e60bacbe3d192207be56f77c95d9e2203d2696ea))
* añadida vista de mensaje de datos vacios en custom data table ([3146db7](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/3146db7fff83295cde69133304e0ace9bfb6cc0f))
* añadidadas dependencias nuevas para fechas ([bc7312a](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bc7312a4651d593ef1f24c6c37c5ceea8e64d0f7))
* añadidas validaciones de fechas en input date, estilo de título en custom data table ([cfb7802](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/cfb7802ff228a45807ca0339394082c13c09f5a2))
* añadida vista detalle de usuario y lista de roles ([a794c1f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a794c1f3c2779038d92d0f9026df5819680c61e5))
* añadido control de interpretación de html en intérprete de mensajes, eliminado ToastContainer ([3169a4b](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/3169a4b01180acfccbc1a396ed8eb90aa6fb2545))
* añadido delay al cerrar modal de usaurios, políticas y parámetros ([ec3dd63](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ec3dd63ca093d6a95329723e144df11f196af7ac))
* añadido evento para responder en caso de error en la red 🌎 ([b934d51](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/b934d510472418d62b6dd55fdd0e6d54a4da28a2))
* añadido filtro de roles para usuarios ([0e6ca75](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/0e6ca75f635955350afaf558027065eea22bed85))
* añadido helper text para campo de texto y selector ([a086186](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a0861862a99d0ac5ff87e28ccd1b1048a2355e43))
* añadido método onchange a form input text ([b73065d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/b73065d0de92f6ee30907da304ccfcd4f67e5141))
* añadido método que guarda o actualiza un usuario ([92c2d11](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/92c2d116f54196539bea7c200a15d045744d566d))
* añadidos flags para no hacer peticiones hasta que se verifique la sesión ([274cce8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/274cce8d95000c1f7aed0988d762cc5d2811f98a))
* ancho de layout de usarios diferente para movil y escritorio ([1789187](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/17891874b8d68aea6fa1c60765bf870563167011))
* cambio de letra y colores de texto en custom table ([8e39317](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/8e393179e2095aceb9e16e473559322082591782))
* colores de vista home y proporción de título en datatable para móviles ([21c3d8c](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/21c3d8c6d7553aa4c3a67645daad8c75b222896b))
* corrección pliege de layout de usuario para movil y eliminado CardActionArea de CustomDataTable ([584ed1f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/584ed1f480b88378612f9796e111f6e5a3a03131))
* correcciones React 18: añadido tipo PropsWithChildren para LayoutUser AlertDialog, CustomDialog ([bb1b16f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/bb1b16f068ff496fa2daad927c878e1927802e90))
* corregida forma de interpretar mensajes de error, ya sean string u objetos ([a881878](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a881878505ccdc92f2f0504ed4e7871dfa46097e))
* corregida importación de utilidad que imprime, para importar otras utilidas más rapidamente ([9edff25](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/9edff2510854c8ad34ce4e91eb3a8d8e888bd34b))
* corregida importación no necesaria de modulos de React ([aef7b85](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/aef7b85a4047cacf52d4d45041e60d2e5a435d2c))
* corregida proporción de campos de roles, correo para ocupar tamaño completo en modal de usuario ([e453870](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/e453870cffa567fa30565ede3c207e8a5dbc073b))
* corregida validación de formato de fecha válida usando momentJS (porque DateJS tiene errores) ([3c8bbfd](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/3c8bbfd50ae8172a3673d746fc3b223d202608e8))
* corregido al cerrar sesión que ocasionaba que aún se viera por un segundo la vista home ([b32774c](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/b32774cc7948ba235b98f9342307f2da36b7fdb8))
* corregido ancho de columnas de módulos en vista home para submodulos de un solo item ([9ffdb88](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/9ffdb88c410b457b3582fcef4be149c61a579ee4))
* corregido color de fondo de dialogos en modo oscuro ([608bfdc](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/608bfdc69ab1f8a2e58e778cd168a8a03aae2e36))
* corregido dentro de la ventana modal que ocasionaba que se muestren los valores por defecto ([c27a965](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/c27a96557368070b1ad302f33d78860b82a74e9b))
* corregido divider de modal en custom dialog, para tomar el color del entorno ([1f62f89](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/1f62f89b0ad866092e2462d0e32eb4d68a9e0949))
* corregido error al cerrar sesión que ocasionaba que aún se pudiera usar rutas protegidas 🤦‍♂️ ([94aa3c2](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/94aa3c25dca5b57f7b093fce46f5fdc3049e4a61))
* corregido error con para componentes que requieren children como parámetro, eliminado react-use ([7abad86](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/7abad867f7d489dbdb7759b196fcca952f1a2b2c))
* corregido error de commit liint instalando dependencias locales ([5139f12](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/5139f125d582602ff8d53aeb2c2a2cbe8658bbd1))
* corregido error en importación de icono con error de librería ([9582b08](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/9582b08f1e4ba6967cff50e0df71a7857e53cc26))
* corregido error en modo oscuro al no dejar interpretar el modo claro apropiadamente ([f45816a](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/f45816a33dd8b274b0cf6faa8ce6824d01ec58f1))
* corregido error en redirección de perfil desde Navbar ([dd6e29c](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/dd6e29cd12b8a994ab288943ec00586f06b0a1b6))
* corregido form input dropdown para tener valores por defecto ([d3f0dae](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d3f0daeab528c1e5c7bd46562cbd33f5b6a5f50c))
* corregido modo oscuro inicial automatico ([6f68a1b](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/6f68a1bf9a84ad6a23021c39b5a31577bf4fa72a))
* corregido orden en que se cierran vistas modales de usuarios, políticas y parámetros ([eb228ff](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/eb228ff13a4f515a2a18dc83380ae1c12be1936a))
* corregido orden en que se renderiza las tablas de custom data table ([c001f35](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/c001f35b1d8463679cd2ba0c8d38aed109e901c7))
* corregidos colores en acciones de edición para páginas de parámetros, políticas y usuarios ([a4ab271](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a4ab271599743b397556caaad69f9d2ff30cb4f9))
* denominacion para metodos de AuthProvider, eventos de Sidebar, logout en Navbar ([083c1d8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/083c1d887cfd2da624184c9ce57e8bc61ee93af9))
* en data table se muestran los filtros activos sin animación de colapso con skeleton de 10 items ([6e30930](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/6e30930eddb42f58d8156647c4abff871c0b6723))
* espacio de card en modo responsivo ([24f954f](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/24f954f2a31fa43bbd7d89942678634cd4f50919))
* implementación de SWR para hacer peticiones, solo como ejemplo ([199c7e8](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/199c7e8fa0acabc812f65cffbf9ffedd1f317885))
* modificada condición para mostrar boton que cambia a modo oscuro en pantallas pequeñas ([2daea87](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2daea877eeb0e9b67cc897318acae783fe34d09d))
* modificada estructura de carpetas de componentes de páginas ([19b159a](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/19b159a5fbdbb1a6366c3583ccd3146b05f9aee3))
* modificadas constantes de test ([ca778aa](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/ca778aa796f1614f56d613bf5327bed117eca78a))
* modificadas tipografias, en cambio, de color y debug banner ([2e77bc3](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2e77bc3cd765c5fa4b172e592750658dc7e19f87))
* modificado cambio de rol para solicitar lista de modulos y permisos actualizados ([86063fa](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/86063fa654fe9788a54e5360fcbb8e51d24e153a))
* modificado formato de Input de fecha a DD/MM/YYYY aplicado en modal de usuarios ([56d6d18](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/56d6d1844a70e2e77dd2f7d7473cc39ab58109ca))
* modificado orden de carpetas, para ser flexible y escalable ([48dba09](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/48dba09cb8caac439e5938eebdacf188c6c71382))
* modificado orden en que las peticiones interpretan una petición que ha tardado demasiado ([afb4d77](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/afb4d77bbde186727af385f656cc46609d64d7bf))
* modificados colores primario y secundario ([8c4c368](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/8c4c3688532a05afa9377933a352a7a02e2a3740))
* modificados estilos de filas en modo responsivo ([d2dee9a](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d2dee9a771a1d18d0611b7017c5dc561f59f3dc9))
* modificados estilos de títulos de secciones en vista home, con espacio al final ([a24be2e](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a24be2efce410a1126fb24309af24e240cb96327))
* modificados iconos para añadir registros, icono de menu abierto ([72cf815](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/72cf8151bb97da1f2e33e7b73b2b42eab46f3d2d))
* modificados parametros de input type texto, select y custom dialog ([a540c0d](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a540c0dcbadde93120e3ce13d4d144ea762f996b))
* optimización en paginado y cambio de color en drawer ([a42cdef](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a42cdefc928b8875f47ba06fa6bada4eb9bb52fd))
* padding de paginación, color de fondo en tema claro, interfaz de filtro de usuario ([846a2c5](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/846a2c585592938bf1d8f06a12dfd6ccf6a061f3))
* pequeña edición de readme.md ([7737db0](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/7737db095044a2dc14fd486e6789672480bab68b))
* react-hooks/exhaustive-deps para problemas de eslint en index y vista de desbloqueo ([91abca1](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/91abca145a77b3c4cabb1d0692c224435017db47))
* reemplazados campos de formulario en modal de nuevo usuario ([d170371](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d170371c4a30fd34daff0b2aaed9bbd7e2189ac0))
* restaurada versión de React 17, por un error de estilos con MUI 🤦‍♂️ ([a3ab356](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/a3ab356f4eb991178378dfd20b94f892e1bcedc3))
* retirada fecha de nacimiento de vista de usuarios en custom ([0484d75](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/0484d7577917e065a8a643ed4ef4af8d687049d7))
* se bloquean los campos de login al iniciar sesión ([2fb1f37](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/2fb1f37fdcc20d3dc00d27740ea7b8fcc2e343d7))
* se mueve debug banner a la parte inferior derecha ([95e1702](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/95e17026e371122666c63f7dfe00c894c047cee7))
* separada lógica de acciones en array de elementos ([53e5fd0](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/53e5fd07a08a29617aa5bb19df1df52413691973))
* separada utilidad de fechas para no ser importadas en middleware al momento de la compilación ([d85c009](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/d85c00949032dc5c2c6c70f251b1c5f8f47c61ac))
* separados typos en archivos individuales ([cf49106](https://gitlab.agetic.gob.bo/ivillarreal/agetic-next-base-frontend/commit/cf4910684e1f0b99b96f9101bb023a567107ef1a))
