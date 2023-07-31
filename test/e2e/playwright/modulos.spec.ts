import { expect, test } from '@playwright/test'
import { numeroAleatorio, palabraAleatoria } from './utils/generador'

test('Módulos - crear/editar módulo', async ({ page, isMobile }) => {
  // Generando palabra aleatoria
  const moduloAleatorio = palabraAleatoria()

  // Iniciando sesión
  await page.goto('/login')
  await page.locator('#usuario').fill('ADMINISTRADOR-TECNICO')
  await page.locator('#contrasena').fill('123')
  await page.getByRole('button', { name: 'Iniciar sesión' }).click()
  // en caso de ser móvil
  if (isMobile) await page.getByRole('button', { name: 'menu' }).click()
  // Abriendo ruta de módulos
  await page.getByRole('button', { name: 'Módulos', exact: true }).click()
  await page.locator('#agregarModuloSeccion').click()
  await page.getByRole('menuitem', { name: 'Nuevo módulo' }).click()
  await page.locator('#idModulo').click()
  await page.getByRole('option', { name: 'Configuración' }).click()
  await page.locator('#icono').fill('check')
  await page.locator('#nombre').fill(moduloAleatorio)
  await page.locator('#label').fill(moduloAleatorio)
  await page.locator('#url').fill(moduloAleatorio)
  await page.locator('#orden').fill(numeroAleatorio(1, 100).toString())
  await page.locator('#descripcion').fill(moduloAleatorio)
  await page.getByRole('button', { name: 'Guardar' }).click()
  await page.waitForResponse((response) => response.url().includes('/modulos'))
  await page.locator('#accionFiltrarModuloToggle').click()
  await page.locator('#buscar').click()
  await page.locator('#buscar').fill(moduloAleatorio)

  await page.waitForResponse((response) => response.url().includes('/modulos'))
  await page.getByRole('button', { name: 'Editar' }).first().click()

  const moduloAleatorio2 = palabraAleatoria()

  await page.locator('#icono').fill('check')
  await page.locator('#nombre').fill(moduloAleatorio2)
  await page.locator('#label').fill(moduloAleatorio2)
  await page.locator('#url').fill(moduloAleatorio2)
  await page.locator('#orden').fill(numeroAleatorio(1, 100).toString())
  await page.locator('#descripcion').fill(moduloAleatorio2)
  await page.getByRole('button', { name: 'Guardar' }).click()
  await page.waitForResponse((response) => response.url().includes('/modulos'))
  await page.locator('#buscar').fill(moduloAleatorio2)

  expect(page.getByRole('cell', { name: moduloAleatorio })).toBeDefined()
})
