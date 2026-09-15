# marlin-download

Skill para ayudar a **Marco Lino Álvarez** a descargar videos de su página personal **Marlin Internacional**, alojados en **Vimeo**, y guardarlos en su carpeta **Descargas**.

Repositorio: https://github.com/garusis/marlin-download

## Primera versión

1. Pasar de **Chat a Work** automáticamente si es necesario y ChatGPT lo permite; de lo contrario, indicar cómo activarlo.
2. Conectar **Google Chrome** del usuario.
3. Abrir Marlin Internacional y esperar a que el usuario inicie sesión.
4. Solo después, abrir el acceso de Vimeo y completar la segunda sesión.
5. Localizar el curso, módulo y video indicado; descubrir la descarga disponible.
6. Guardar y verificar el archivo en Descargas.

### Páginas y acceso verificado

- [Marlin Internacional](https://marlininternacional.com/).
- [Inicio de sesión de Marlin](https://marlininternacional.com/login/): el enlace **«iniciar sesión»** del menú superior abre esta página en la misma pestaña. El agente puede abrirla directamente en Chrome y dejar el formulario listo.
- [Vimeo en español](https://vimeo.com/es): se abrirá después de iniciar sesión en Marlin.

El 15 de septiembre de 2026 se verificó en Chrome la navegación desde la portada al formulario con **«Nombre de usuario o correo electrónico»**, **«Contraseña»** y **«Acceder»**. También se verificó la navegación autenticada: **La ley del Éxito → Modulo → Video 15-Curso la Ley del Éxito** en Vimeo. El curso tiene un solo módulo, así que el skill entra directamente; cuando haya varios, preguntará cuál si no se indicó.

La descarga del video se encuentra en **Acciones de archivo → Descargar → Original**. La prueba llegó al archivo original de 384,27 MB, pero Chrome bloqueó el servidor de archivos con **ERR_BLOCKED_BY_CLIENT**. No se guardó un archivo; falta verificar la descarga completa después de resolver ese bloqueo en Chrome.

## Requisitos

- ChatGPT en modo **Work**, con acceso al Chrome y a Descargas del usuario.
- Google Chrome conectado mediante la extensión y las herramientas disponibles en la aplicación.
- Acceso a las dos cuentas y a la carpeta Descargas del equipo.

El skill asume que Marco Lino utiliza ChatGPT. Si ya está en Work, continúa sin comprobaciones ni preguntas sobre el entorno. Si está en Chat, intenta pasar a Work automáticamente; solo pide que lo active cuando el cambio sea necesario y no pueda hacerlo por él. Si falta acceso a Chrome o a Descargas, guía el paso concreto para habilitarlo.

## Instalación local

Comparte este mensaje con el agente de la aplicación de escritorio:

> Instala el skill de https://github.com/garusis/marlin-download para uso local. Lee primero README.md, AGENTS.md y SKILL.md. Si dispones de skill-installer, úsalo con la raíz del repositorio como ruta del skill; de lo contrario, sigue la instalación manual del README. No sobrescribas una instalación existente. Verifica que marlin-download aparezca disponible.

El repositorio es privado inicialmente: quien lo instale necesita acceso a GitHub. No pegues tokens en el chat.

### Instalación manual para el agente

Clona el repositorio en una carpeta persistente que no exista todavía:

```sh
git clone https://github.com/garusis/marlin-download.git /ruta/persistente/marlin-download
```

Expande `/ruta/persistente` a una ruta real elegida en ese equipo. Después crea un enlace a esa carpeta en la ubicación de skills personales documentada:

```sh
mkdir -p "$HOME/.agents/skills"
ln -s /ruta/persistente/marlin-download "$HOME/.agents/skills/marlin-download"
```

Antes de crear el enlace, comprueba que el destino no exista, incluso si es un enlace roto. Si existe, inspecciona la instalación y evita duplicarla o reemplazarla sin instrucciones. En entornos con una ubicación de skills diferente configurada, usa la ubicación que documente ese entorno. Conserva el clon mientras el enlace esté instalado.

Verifica el skill en **Skills** de la aplicación. Si no aparece, reinicia la aplicación y revisa la ubicación y configuración. Esta es una instalación local; el repositorio no publica un plugin en el directorio de OpenAI.

## Uso

En ChatGPT selecciona `@marlin-download` desde el selector de skills o pide:

> Usa marlin-download. Quiero descargar el video [video], del módulo [módulo], del curso [curso].

El usuario completa los inicios de sesión en Chrome. El agente espera a verificar cada acceso antes de continuar.

## Archivos para agentes

- [SKILL.md](SKILL.md): instrucciones completas del skill; la raíz es la carpeta instalable.
- [AGENTS.md](AGENTS.md): guía de lectura, instalación y mantenimiento.
- [agents.js](agents.js): manifiesto legible y ejecutable con Node.js; imprime URL, rutas, instrucciones de instalación y contenido del skill como JSON. No instala ni modifica archivos. No es un formato de descubrimiento automático de OpenAI.

```sh
node agents.js
```

## Actualizar y sincronizar

Para actualizar el clon instalado sin crear fusiones automáticamente:

```sh
git pull --ff-only
```

El enlace refleja los cambios del clon. Para publicar cambios de desarrollo, revísalos, crea un commit y ejecuta `git push`. GitHub y el clon quedan vinculados mediante `origin`; no hay sincronización automática en segundo plano.

## Referencias oficiales

- [Crear e instalar skills locales](https://learn.chatgpt.com/docs/build-skills).
- [Usar ChatGPT y Work](https://learn.chatgpt.com/docs/use-chatgpt#choose-how-you-want-to-work).
