import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
const url = 'https://realworld.qa.guru/#/';

let newUser;
test.describe('Демо',() => {
    test.beforeEach( async ({ page }) => {
let womenProfileArray = [1, 1.2, {}, 'string' , false];

newUser = {
userBio : faker.music.genre(),
userName : faker.person.firstName('male'),
userEmail : faker.internet.email(),
userPassword : faker.internet.password(),
"all is ok": () => { console.log('У вас все получится!')},
getMessage: () => {
    const message = 'И у меня все получится!';
    return message;
},
getText : () => {console.log('И у меня все получится!')},
};
newUser["all is ok"]();


/*
1-копируем объект
let exp = structuredClone(newUser);

2-смотрим разницу между двумя объектами
console.log(newUser);
console.log(exp);
3-Добавляем новый ключ в объект
newUser.BrokenMe = true;
4-Смотрим разницу между двумя объектами
console.log(newUser);
console.log(exp);
*/
    
await page.goto(url);
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByPlaceholder('Your Name').click();
  await page.getByPlaceholder('Your Name' ).fill(newUser.userName);
  await page.getByPlaceholder('Email' ).click();
  await page.getByPlaceholder('Email' ).fill(newUser.userEmail);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(newUser.userPassword);
  await page.getByRole('button', { name: 'Sign up' }).click();
});

test('Пользователь может изменить bio', async ({ page }) => {
    // клик по меню
    await page.locator('.dropdown-toggle').click();
    const demo = await page.getByRole('link').all;
    console.log(demo);
    await page.getByRole('link', { name: 'Settings' }).click();
    await page.getByPlaceholder('Short bio about you').click();
    await page.getByPlaceholder('Short bio about you').fill(newUser.userBio);
    await page.getByRole('button','Update Settings');
  await expect(page.getByPlaceholder('Short bio about you')).toContainText(newUser.userBio);
});
});