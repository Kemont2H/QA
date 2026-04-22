import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
const url = 'https://realworld.qa.guru/#/';

/*
test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'First Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'First Name' }).fill('D');
  await page.getByRole('textbox', { name: 'First Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'First Name' }).fill('Dmitry');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('B');
  await page.getByRole('textbox', { name: 'Last Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Bondarchuk');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('napishimne@yandex.ru');
  await page.locator('div').filter({ hasText: /^Male$/ }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('9529023030');
  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('gridcell', { name: 'Choose Tuesday, March 17th,' }).click();
  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('gridcell', { name: 'Choose Tuesday, March 17th,' }).selectOption('2007');
  await page.getByRole('combobox').first().selectOption('1');
  await page.getByRole('gridcell', { name: 'Choose Tuesday, January 30th,' }).click();
  await page.locator('.subjects-auto-complete__input-container').click();
  await page.locator('#subjectsInput').press('CapsLock');
  await page.locator('#subjectsInput').fill('T');
  await page.locator('#subjectsInput').press('CapsLock');
  await page.locator('#subjectsInput').fill('This theme');
  await page.getByRole('checkbox', { name: 'Sports' }).check();
  await page.getByRole('checkbox', { name: 'Reading' }).check();
  await page.locator('.subjects-auto-complete__input-container').click();
  await page.locator('#subjectsInput').press('CapsLock');
  await page.locator('#subjectsInput').fill('E');
  await page.locator('#subjectsInput').press('CapsLock');
  await page.locator('#subjectsInput').fill('Englis');
  await page.getByRole('option', { name: 'English' }).click();
  await page.getByRole('checkbox', { name: 'Music' }).check();
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('N');
  await page.getByRole('textbox', { name: 'Current Address' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Novosibirsk');
  await page.locator('.css-hlgwow > .css-19bb58m').click();
  await page.getByRole('option', { name: 'Uttar Pradesh' }).click();
  await page.locator('.css-13cymwt-control > .css-hlgwow > .css-19bb58m').click();
  await page.getByRole('option', { name: 'Lucknow' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
});

/*
test('req-form', async ({ page }) => {
    await page.goto('https://realworld.qa.guru/#/login');
    // Поиск элемента по типу
  await page.getByRole('textbox', {name: 'Email'}).click();
  await page.getByRole('textbox', {name: 'Email'}).fill('27dec 20244');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('fsafjasf');
*/
//await page.locator('.form-control form-control-lg', {name: 'Email'}).click();
//await page.locator('.form-control form-control-lg', {name: 'Email'}).fill('27dec 20245');

// Поиск элемента по классу (начинается с . )- todo посмомотреть как использовать HAS
//await page.getByRole('button', { name: 'Login' }).click();



// Поиск элемента по id (начинается с #btn)
//await page.locator('#btn').click();

//Поиск элемента по атрибуту (начинается с [])
//await page.locator('[aria-label="email"]').click();



  test('Пользователь может зарегистрироваться с помощью email и пароля', async ({ page }) => {
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
  await expect(page.getByRole('navigation')).toContainText(userName);
});


