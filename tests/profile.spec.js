import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
const url = 'https://realworld.qa.guru/#/';
test.describe('Профиль пользователя',() => {
    test.beforeEach( async ({ page }) => {
    await page.goto(url);
    let userName = faker.person.firstName('male');
    let userEmail = faker.internet.email();
    let userPassword = faker.internet.password();

  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByPlaceholder('Your Name').click();
  await page.getByPlaceholder('Your Name' ).fill(userName);
  await page.getByPlaceholder('Email' ).click();
  await page.getByPlaceholder('Email' ).fill(userEmail);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(userPassword);
  await page.getByRole('button', { name: 'Sign up' }).click();
});

test('Пользователь может изменить bio', async ({ page }) => {
let userBio = faker.music.genre();
    // клик по меню

    await page.getByRole('link', { name: 'Settings' }).click();
    await page.getByPlaceholder('Short bio about you').click();
    await page.getByPlaceholder('Short bio about you').fill(userBio);
    await page.getByRole('button','Update Settings');
  await expect(page.getByPlaceholder('Short bio about you')).toContainText(userBio);
});
});