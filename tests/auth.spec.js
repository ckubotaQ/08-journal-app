import { test, expect } from '@playwright/test';
test('local host button register', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Journal App/);

  // create a locator
  const getStarted = page.locator('button');
  await expect(getStarted).toHaveCount(1)
  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  const swalAlaert = page.locator('#swal2-title');
  await expect(swalAlaert).toHaveText('Error');
  const countbutton1 = page.locator('button');
  console.log(countbutton1);
  await expect(countbutton1).toHaveCount(5)

  const buttonswalAlert = page.locator('button',{ hasText: 'OK' }).click();
  const countbutton = page.locator('button');
  await expect(countbutton).toHaveCount(1)
  ;
  page.on('console', msg => console.log(msg.text()))
});
test('local host init page', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Journal App/);

  // create a locator
  const getStarted = page.locator('a');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/auth/login');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL("http://localhost:3000/auth/login");
});
