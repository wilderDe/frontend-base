import { expect, test } from '@playwright/test'
import { palabraAleatoria } from './utils/generador'

test('Parámetros - crear/editar parámetro', async ({ page, isMobile }) => {
  const parametroAleatorio = palabraAleatoria()

  await page.goto(`/login`)
  await page.locator('#usuario').fill('ADMINISTRADOR-TECNICO')
  await page.locator('#contrasena').fill('123')
  await page.getByRole('button', { name: 'Iniciar sesión' }).click()
  // en caso de ser móvil
  if (isMobile) await page.getByRole('button', { name: 'menu' }).click()
  await page.getByRole('button', { name: 'Parámetros', exact: true }).click()
  await page.locator('#agregarParametro').click()
  await page.locator('#codigo').fill(parametroAleatorio)
  await page.locator('#nombre').fill(parametroAleatorio)
  await page.locator('#grupo').fill(parametroAleatorio)
  await page.locator('#descripcion').fill(parametroAleatorio)
  await page.getByRole('button', { name: 'Guardar' }).click()
  await page.waitForResponse((response) =>
    response.url().includes('/parametros')
  )
  await page.locator('#accionFiltrarParametrosToggle').click()
  await page.locator('#parametro').fill(parametroAleatorio)

  await page.waitForResponse((response) =>
    response.url().includes('/parametros')
  )

  await page.getByRole('button', { name: 'Editar' }).first().click()
  const parametroAleatorio2 = palabraAleatoria()
  await page.locator('#codigo').fill(parametroAleatorio2)
  await page.locator('#nombre').fill(parametroAleatorio2)
  await page.locator('#grupo').fill(parametroAleatorio2)
  await page.locator('#descripcion').fill(parametroAleatorio2)
  await page.getByRole('button', { name: 'Guardar' }).click()
  await page.waitForResponse((response) =>
    response.url().includes('/parametros')
  )
  await page.locator('#parametro').fill(parametroAleatorio2)

  expect(page.getByRole('cell', { name: parametroAleatorio2 })).toBeDefined()
})
