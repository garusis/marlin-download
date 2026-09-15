#!/usr/bin/env node
'use strict';

// Manifiesto informativo; no instala, navega ni modifica archivos.
const { readFileSync } = require('node:fs');
const { join } = require('node:path');

const manifest = {
  name: 'marlin-download',
  repositoryUrl: 'https://github.com/garusis/marlin-download',
  visibility: 'private',
  skillDirectory: '.',
  entrypoint: 'SKILL.md',
  readme: 'README.md',
  agentInstructions: 'AGENTS.md',
  requiredMode: 'ChatGPT Work',
  modeTransition: 'Asumir ChatGPT. Pasar de Chat a Work automáticamente si está disponible; pedir el cambio solo cuando sea necesario y no se pueda realizar por el usuario.',
  requiredBrowser: 'Google Chrome',
  destination: 'Carpeta Descargas del usuario en su computadora',
  downloadFallback: 'Si el control del navegador falla con ERR_BLOCKED_BY_CLIENT, probar el control de computadora sobre Chrome y guardar Original en Descargas. Si tampoco funciona o no está disponible, dejar el diálogo listo para el clic manual. Verificar el archivo antes de afirmar que terminó.',
  installation: {
    instructions: 'README.md#instalación-local',
    method: 'Clonar en una carpeta persistente y enlazarla en ~/.agents/skills/marlin-download, o usar el skill-installer disponible con la raíz del repositorio.',
    existingInstallation: 'Inspeccionar antes de instalar; no sobrescribir.',
    verification: 'Comprobar que marlin-download aparece en Skills.',
  },
  sites: {
    marlin: 'https://marlininternacional.com/',
    marlinLogin: 'https://marlininternacional.com/login/',
    vimeo: 'https://vimeo.com/es',
  },
  pendingInputs: ['Curso si no se indicó', 'Módulo solo si hay varios y no se indicó', 'Video si no se indicó'],
};

module.exports = manifest;

if (require.main === module) {
  const skillContent = readFileSync(join(__dirname, manifest.entrypoint), 'utf8');
  process.stdout.write(JSON.stringify({ ...manifest, skillContent }, null, 2) + '\n');
}
