import { expect, test } from '@playwright/test'
import { palabraAleatoria } from './utils/generador'

const rolAleatorio = palabraAleatoria()
test('Roles - crear/editar rol', async ({ page, isMobile }) => {
  await page.goto(`/login`)
  await page.locator('#usuario').fill('ADMINISTRADOR-TECNICO')
  await page.locator('#contrasena').fill('123')
  await page.getByRole('button', { name: 'Iniciar sesión' }).click()
  // en caso de ser móvil
  if (isMobile) await page.getByRole('button', { name: 'menu' }).click()
  await page.getByRole('button', { name: 'Roles', exact: true }).click()
  await page.locator('#agregarRol').click()
  await page.locator('#rol').fill(rolAleatorio)
  await page.locator('#nombre').fill(rolAleatorio)
  await page.getByRole('button', { name: 'Guardar' }).click()

  await page.waitForResponse((response) => response.url().includes('/roles'))

  await page.locator('#accionFiltrarRolToggle').click()
  await page.locator('#filtroRol').fill(rolAleatorio)

  await page.waitForResponse((response) => response.url().includes('/roles'))
  await page.getByRole('button', { name: 'Editar' }).first().click()
  const rolAleatorio2 = palabraAleatoria()

  await page.locator('#rol').fill(rolAleatorio2)
  await page.locator('#nombre').fill(rolAleatorio2)
  await page.getByRole('button', { name: 'Guardar' }).click()

  await page.waitForResponse((response) => response.url().includes('/roles'))

  await page.locator('#filtroRol').fill(rolAleatorio2)
  expect(page.getByRole('cell', { name: rolAleatorio2 })).toBeDefined()
})
