---
name: marlin-download
description: Ayuda a Marco Lino Álvarez a descargar videos de cursos de su página Marcolino Internacional alojados en Vimeo, usando Google Chrome y guardándolos en Descargas. Si la conversación está en Chat, pasa a Work para realizar la descarga.
---

# Descargar videos de Marcolino Internacional

Ayuda a Marco Lino Álvarez a localizar y descargar el video que indique de su página personal. Los videos están alojados en Vimeo. Habla en español claro y guía los pasos que requieran intervención del usuario.

## 1. Pasar de Chat a Work cuando haga falta

Marco Lino siempre utiliza ChatGPT. Da ese contexto por hecho y evita preguntas sobre la aplicación, el entorno o conocimientos técnicos.

Si la conversación ya está en **Work**, continúa directamente. Si está en **Chat**, usa el mecanismo de ChatGPT para pasar a **Work** automáticamente cuando esté disponible, conservando la conversación y los datos proporcionados. La solicitud de usar este skill autoriza ese cambio; no pidas una confirmación adicional.

Si es necesario cambiar a Work y no puedes hacerlo automáticamente, pide únicamente esta acción y espera:

> Marco Lino, activa **Work** en el selector de esta conversación para que pueda descargar el video con tu Google Chrome y guardarlo en Descargas. No puedo activar ese cambio por ti desde aquí. Cuando lo hayas activado, continuamos desde este mismo punto.

No conviertas el modo en una comprobación previa que el usuario deba confirmar. Si el contexto no lo indica, continúa con las herramientas disponibles y solicita el cambio solo si Chat impide avanzar. No afirmes haber cambiado el modo sin que el mecanismo disponible lo confirme.

Si durante el trabajo falta acceso a Chrome o a Descargas, guía únicamente el paso necesario para habilitarlo en su computadora.

## 2. Conectar Google Chrome

Usa exclusivamente **Google Chrome del usuario**, nunca el navegador integrado de ChatGPT, un navegador cloud ni un perfil independiente. Busca y lee las instrucciones del plugin o skill de Chrome disponible en esa sesión y sigue su documentación; no dependas de rutas de instalación de otra máquina.

Si Chrome no está conectado, guía al usuario a la configuración de uso de computadora y a la extensión de Chrome según las instrucciones disponibles. Espera a que conecte Chrome, sin cambiar de navegador.

## 3. Iniciar sesión en orden

Las URL de Marcolino Internacional y Vimeo aún deben ser proporcionadas por el usuario. Reutiliza las que ya existan en la conversación; solicita únicamente las que falten. No adivines el dominio de Marcolino Internacional. Conserva la ruta y los parámetros necesarios de la URL del video durante la sesión, sin publicarlos.

1. Abre primero el acceso de **Marcolino Internacional** en Chrome. Si la URL recibida es la portada, encuentra el acceso en la página.
2. Pide al usuario que inicie sesión directamente en Chrome y avise cuando termine. Si ya está autenticado, verifica el acceso al área de cursos y continúa. No abras aún Vimeo si el acceso a Marcolino Internacional sigue pendiente.
3. Una vez confirmado ese acceso, abre la página de inicio de sesión de **Vimeo** en otra pestaña de Chrome, usando la URL compartida o el enlace de acceso observado en la página de Vimeo proporcionada.
4. Guía al usuario para iniciar sesión en Vimeo y verifica que la sesión esté abierta antes de continuar. Si ya lo está, reutilízala.

No pidas contraseñas ni códigos de autenticación en el chat. No extraigas cookies, perfiles o almacenes de sesión. Ante un captcha o segundo factor, deja que el usuario lo complete en Chrome.

## 4. Elegir curso, módulo y video

Después de los dos accesos, solicita **curso, módulo y video**, salvo que ya estén indicados. Navega desde Marcolino Internacional hasta la selección. Si hay varias coincidencias, presenta los títulos observados para que el usuario elija. Confirma que el reproductor de Vimeo corresponde al video solicitado usando la página, el título y el contexto del módulo; no adivines identificadores ni descargues el curso completo.

## 5. Descubrir y realizar la descarga

Esta primera versión no tiene selectores ni un método de extracción probado. Descubre las opciones reales de la página con las capacidades documentadas de Chrome.

- Prioriza el botón o enlace de descarga ofrecido por la página o por Vimeo para el video elegido. Si es necesario, sigue el enlace observado al video de Vimeo y revisa las opciones de administración o descarga que permita la cuenta.
- Si no aparece una descarga directa, investiga las opciones autorizadas disponibles para el propietario con las herramientas existentes. No confundas el permiso para reproducir con un enlace de descarga disponible. No eludas DRM ni controles de acceso; si no encuentras un método permitido, explica el impedimento concreto y el siguiente paso que puede realizar el propietario.
- Resuelve la carpeta **Descargas del usuario en su computadora**, considerando la configuración real del sistema y de Chrome. No guardes en el repositorio ni en Descargas de un entorno remoto. Si la herramienta entrega el archivo en otra ubicación local, muévelo a Descargas.
- Descarga únicamente el video elegido. Usa un nombre reconocible basado en curso, módulo y video, conserva una extensión correspondiente al formato real y evita sobrescribir archivos existentes. Si hay varias calidades, usa la mayor disponible salvo preferencia del usuario.
- Espera a que termine. Comprueba que existe el archivo final, tiene tamaño mayor que cero y no es una descarga temporal, una página HTML de error ni un manifiesto sin el video. Usa la información multimedia disponible para verificar formato y duración; si puedes, comprueba reproducción. No afirmes que se reproduce si no lo verificaste.
- Informa nombre, ruta local clicable, tamaño y las verificaciones realizadas. Si falla, describe el estado real y no presentes un archivo parcial como descarga completada.

## Mejoras durante las pruebas

Cuando una prueba revele un procedimiento estable, propone incorporar los pasos al skill. No guardes credenciales, cookies, URLs firmadas, videos ni detalles privados de la sesión en el repositorio. La autorización para descargar un video no autoriza por sí sola a publicar cambios en GitHub.
