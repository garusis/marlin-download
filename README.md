# marlin-download

Skill para ayudar a **Marco Lino Álvarez** a descargar videos de su página personal **Marlin Internacional**, alojados en **Vimeo**, y guardarlos en su carpeta **Descargas**.

Repositorio: https://github.com/garusis/marlin-download

## Instalación local

### Para Marco Lino

Comparte el enlace de este repositorio con ChatGPT en la aplicación de escritorio. Si el agente no entiende que deseas instalarlo, escribe: **«Instala este skill para mí»**. ChatGPT debe realizar la instalación y confirmar que está disponible; no necesitas ejecutar comandos ni tener cuenta de GitHub.

### Para ChatGPT: instalar este skill para el usuario

Cuando el usuario comparta este repositorio para instalar el skill, realiza los pasos siguientes. El resultado esperado es **marlin-download instalado de forma persistente para ese usuario**, no solamente un resumen de este README ni una lectura temporal de las instrucciones.

1. **Lee los archivos completos:** [SKILL.md](https://raw.githubusercontent.com/garusis/marlin-download/main/SKILL.md), [AGENTS.md](https://raw.githubusercontent.com/garusis/marlin-download/main/AGENTS.md) y este README. `agents.js` es un manifiesto opcional; no es necesario ejecutarlo ni instalar Node.js.
2. **Usa las capacidades de instalación disponibles en ChatGPT.** Si existe `skill-installer`, lee sus instrucciones y úsalo con repositorio `garusis/marlin-download`, referencia `main`, ruta del skill `.` y nombre de destino `marlin-download`. Si existe un mecanismo nativo para guardar skills personales, úsalo conservando el contenido completo de `SKILL.md`.
3. **Si necesitas acceso local y la conversación está en Chat**, pasa a Work automáticamente cuando sea posible. Si no puedes hacerlo, pide únicamente: «Marco Lino, activa Work en esta conversación para que pueda instalar el skill en tu computadora». Continúa desde el punto pendiente.
4. **Alternativa con archivos locales:** resuelve la carpeta de skills personales que realmente carga esa instalación de ChatGPT. Sigue la configuración o la documentación disponible en esa sesión. En entornos que usan la ubicación documentada `$HOME/.agents/skills`, el destino en Windows se resuelve desde el perfil del usuario como `.agents\skills\marlin-download`; no copies rutas de otro equipo ni supongas que una carpeta de un servidor remoto pertenece a la computadora del usuario.
5. Comprueba si ya existe `marlin-download` en esa ubicación o en el catálogo. Si es la misma versión y está disponible, informa que ya está instalado. Si hay una versión diferente, conserva los cambios locales y explica la diferencia antes de reemplazarla.
6. Para una instalación nueva mediante archivos, crea la carpeta de destino y descarga **sin modificar** [SKILL.md](https://raw.githubusercontent.com/garusis/marlin-download/main/SKILL.md) dentro de ella. Esta versión es autocontenida: ese archivo basta para ejecutar el skill. No necesita Git, enlaces simbólicos, permisos de administrador ni paquetes adicionales. Los otros archivos del repositorio documentan su instalación y mantenimiento.
7. **Verifica antes de anunciar éxito:** comprueba que el archivo guardado es Markdown, comienza con el frontmatter `name: marlin-download` y contiene todas las instrucciones; no guardes una página HTML de GitHub como skill. Comprueba después que `marlin-download` está disponible en el catálogo o selector **Skills** de ChatGPT. Si requiere volver a abrir la conversación o reiniciar la aplicación, indícalo y distingue «archivos instalados, activación pendiente» de «skill disponible».
8. Una vez disponible, confirma: «Marco Lino, marlin-download está instalado. Puedes pedirme: descarga el video 15 de La ley del Éxito». No inicies descargas ni solicites credenciales como parte de la instalación.

**Si la sesión no permite instalar skills persistentes:** explica la limitación concreta y guía al usuario al mecanismo de Skills disponible en su aplicación. No afirmes que pegar el enlace instala el skill automáticamente, ni que leerlo durante una conversación equivale a instalarlo. El acceso a Chrome y al control de computadora depende de las herramientas habilitadas en el equipo; instalar instrucciones no habilita esas herramientas.

El repositorio es público y sus archivos se pueden leer sin iniciar sesión en GitHub. La instalación descrita es local; no publica un plugin en el directorio de OpenAI. La instalación y el control de computadora en Windows todavía necesitan validarse en el equipo de Marco Lino.

## Qué hace el skill

1. Pasar de **Chat a Work** automáticamente si es necesario y ChatGPT lo permite; de lo contrario, indicar cómo activarlo.
2. Conectar **Google Chrome** del usuario.
3. Abrir Marlin Internacional y preparar las ventanas según la pantalla: ChatGPT visible con indicación de ir a Chrome en laptop, o ambas lado a lado en pantalla grande; esperar a que el usuario inicie sesión.
4. Solo después, abrir el acceso de Vimeo y completar la segunda sesión.
5. Localizar el curso, módulo y video indicado; descubrir la descarga disponible.
6. Descargar mediante el control del navegador; si falla con ese bloqueo, probar el control de computadora en Chrome. Si tampoco funciona, dejar el cuadro de Vimeo abierto e indicar que pulse **Original**. Verificar el archivo cuando termine.

### Páginas y acceso verificado

- [Marlin Internacional](https://marlininternacional.com/).
- [Inicio de sesión de Marlin](https://marlininternacional.com/login/): el enlace **«iniciar sesión»** del menú superior abre esta página en la misma pestaña. El agente puede abrirla directamente en Chrome y dejar el formulario listo.
- [Vimeo en español](https://vimeo.com/es): se abrirá después de iniciar sesión en Marlin.

El 15 de septiembre de 2026 se verificó en Chrome la navegación desde la portada al formulario con **«Nombre de usuario o correo electrónico»**, **«Contraseña»** y **«Acceder»**. También se verificó la navegación autenticada: **La ley del Éxito → Modulo → Video 15-Curso la Ley del Éxito** en Vimeo. El curso tiene un solo módulo, así que el skill entra directamente; cuando haya varios, preguntará cuál si no se indicó.

La descarga se encuentra en **Acciones de archivo → Descargar → Original**. En las pruebas, el control del navegador mostró **ERR_BLOCKED_BY_CLIENT**, tanto al pulsar el enlace como al abrirlo en otra pestaña.

**El control de computadora sí funcionó:** pulsó Original en Chrome, abrió el cuadro Guardar y permitió guardar en Descargas. Se verificó el archivo completo de 402.935.696 bytes (384,27 MiB), con video, audio y duración de 25:53. Esta prueba se realizó en macOS; falta probar la alternativa en Windows. Las instrucciones de descarga son independientes de atajos o rutas del sistema y el agente debe adaptarlas a los controles disponibles.

El skill usa este orden: **control del navegador → control de computadora → descarga manual**. Si ambos métodos automáticos fallan, deja el cuadro de descarga abierto e indica a Marco Lino que pulse **Original** y guarde en **Descargas**, sin exigir que diagnostique el bloqueo. Distingue entre «listo para descarga manual» y «archivo descargado y verificado».

## Requisitos

- ChatGPT en modo **Work** en el equipo Windows de Marco Lino, con acceso a Chrome y a Descargas.
- Google Chrome conectado mediante la extensión y las herramientas disponibles en la aplicación.
- Acceso a las dos cuentas y a la carpeta Descargas del equipo.

El skill asume que Marco Lino utiliza ChatGPT. Si ya está en Work, continúa sin comprobaciones ni preguntas sobre el entorno. Si está en Chat, intenta pasar a Work automáticamente; solo pide que lo active cuando el cambio sea necesario y no pueda hacerlo por él. Si falta acceso a Chrome o a Descargas, guía el paso concreto para habilitarlo.

## Uso

En ChatGPT selecciona `@marlin-download` desde el selector de skills o pide:

> Usa marlin-download. Quiero descargar el video [video], del módulo [módulo], del curso [curso].

El usuario completa los inicios de sesión en Chrome. Antes de pedirle actuar, el agente usa el control de computadora disponible para mostrar la pestaña correcta y adaptar las ventanas a la pantalla. En laptop conserva ChatGPT visible y le indica a Marco Lino que vaya a Google Chrome y vuelva al terminar. En pantalla grande, como un monitor de 27 pulgadas, mueve y redimensiona ChatGPT y Chrome para dejarlos lado a lado; puede restaurar, maximizar o minimizar temporalmente esas ventanas durante la preparación, pero ambas quedan visibles al entregar las instrucciones. Si no puede acomodarlas, da una indicación manual breve. El agente retoma la comprobación cuando el usuario avisa que terminó. Esta disposición de ventanas aún está pendiente de probar en Windows.

## Archivos para agentes

- [SKILL.md](SKILL.md): instrucciones completas del skill; la raíz es la carpeta instalable.
- [AGENTS.md](AGENTS.md): guía de lectura, instalación y mantenimiento.
- [agents.js](agents.js): manifiesto legible y ejecutable con Node.js; imprime URL, rutas, instrucciones de instalación y contenido del skill como JSON. No instala ni modifica archivos. No es un formato de descubrimiento automático de OpenAI.

```sh
node agents.js
```

## Actualizar

Pide a ChatGPT: **«Actualiza marlin-download desde su repositorio»**. El agente debe comparar el `SKILL.md` instalado con la versión de `main`, conservar modificaciones locales y verificar que la versión actualizada quede disponible. Descargar una nueva versión no debe borrar otros skills.

Para mantener este repositorio de desarrollo, revisa los cambios, crea un commit y publícalo con Git. Las instalaciones hechas copiando `SKILL.md` no se actualizan automáticamente.

## Referencias oficiales

- [Crear e instalar skills locales](https://learn.chatgpt.com/docs/build-skills).
- [Usar ChatGPT y Work](https://learn.chatgpt.com/docs/use-chatgpt#choose-how-you-want-to-work).
