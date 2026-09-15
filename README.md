# marlin-download

Skill para ayudar a **Marco Lino Álvarez** a descargar videos de su página personal **Marcolino Internacional**, alojados en **Vimeo**, y guardarlos en su carpeta **Descargas**.

Repositorio: https://github.com/garusis/marlin-download

## Primera versión

1. Comprobar **ChatGPT Work local** antes de navegar.
2. Conectar **Google Chrome** del usuario.
3. Abrir Marcolino Internacional y esperar a que el usuario inicie sesión.
4. Solo después, abrir el acceso de Vimeo y completar la segunda sesión.
5. Localizar el curso, módulo y video indicado; descubrir la descarga disponible.
6. Guardar y verificar el archivo en Descargas.

Las URL de ambas páginas están pendientes de recibir. El skill las pide al comenzar. Aún no se ha probado contra el sitio ni se ha descargado un video.

## Requisitos

- Aplicación de escritorio de ChatGPT/Codex de OpenAI, seleccionando **ChatGPT → Work**, con ejecución local.
- Google Chrome conectado mediante la extensión y las herramientas disponibles en la aplicación.
- Acceso a las dos cuentas y a la carpeta Descargas del equipo.

**Work local es un requisito de este skill.** No basta con tener Codex abierto. Si el agente no puede verificar el modo o cambiarlo mediante una herramienta documentada, debe pedir explícitamente el cambio y esperar. Instalar el skill no habilita Chrome ni permisos de archivos automáticamente.

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

En ChatGPT selecciona `@marlin-download` desde el selector de skills; en la interfaz Codex se usa `$marlin-download`, pero el flujo pedirá pasar a Work local antes de navegar.

> Usa marlin-download. Mi página es [URL] y Vimeo es [URL]. Quiero descargar el video [video], del módulo [módulo], del curso [curso].

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
- [Diferencias entre Chat, Work y Codex; ejecución local](https://learn.chatgpt.com/docs/use-chatgpt#choose-how-you-want-to-work).
