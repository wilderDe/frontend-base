import { expect, test } from '@playwright/test'
import { palabraAleatoria } from './utils/generador'

const politicaAleatoria = palabraAleatoria()

test('Políticas - crear/editar política', async ({ page, isMobile }) => {
  await page.goto(`/login`)
  await page.locator('#usuario').fill('ADMINISTRADOR-TECNICO')
  await page.locator('#contrasena').fill('123')
  await page.getByRole('button', { name: 'Iniciar sesión' }).click()
  // en caso de ser móvil
  if (isMobile) await page.getByRole('button', { name: 'menu' }).click()
  await page.getByRole('button', { name: 'Políticas', exact: true }).click()
  await page.locator('#agregarPolitica').click()
  await page.locator('#sujeto').click()
  await page.getByRole('option', { name: 'ADMINISTRADOR' }).click()
  await page.locator('#objeto').click()
  await page.locator('#objeto').fill(politicaAleatoria)
  await page.locator('#app').click()
  await page.getByRole('option', { name: 'frontend' }).click()
  await page.locator('#accion').click()
  await page.getByRole('option', { name: 'read' }).click()
  await page.getByRole('button', { name: 'Guardar' }).click()
  await page.waitForResponse((response) =>
    response.url().includes('/politicas')
  )
  await page.locator('#accionFiltrarPoliticasToggle').click()
  await page.locator('#buscar').fill(politicaAleatoria)

  await page.waitForResponse((response) =>
    response.url().includes('/politicas')
  )

  await page.getByRole('button', { name: 'Editar' }).first().click()
  await page.locator('#objeto').click()
  const politicaAleatoria2 = palabraAleatoria()
  await page.locator('#objeto').fill(politicaAleatoria2)
  await page.getByRole('button', { name: 'Guardar' }).click()

  await page.waitForResponse((response) =>
    response.url().includes('/politicas')
  )

  await page.locator('#buscar').fill(politicaAleatoria2)

  expect(page.getByRole('cell', { name: politicaAleatoria2 })).toBeDefined()
})
