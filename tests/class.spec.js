import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage, RegisterPage, SettingsPage } from '../src/pages/index';
const url = 'https://realworld.qa.guru/#/';

let newUser;
test.describe.only('Демо',() => {
    test.beforeEach( async ({ page }) => {
newUser = {
userBio : faker.music.genre(),
userName : faker.person.firstName('male'),
userEmail : faker.internet.email(),
userPassword : faker.internet.password(),
};
 const MainPage = new MainPage(page);  
 const registerPage = new RegisterPage(page); 
 
 await MainPage.open(url);
 await MainPage.register();
 //Page Object здорового человека
 //await registerPage.register(newUser.userName, newUser.userEmail, newUser.userPassword);
 // Упрощенный Page Object
await registerPage.userNameClickAndFill(newUser.userName);
await registerPage.emailClickAndFill(newUser.userEmail);
await registerPage.passwordClickAndFill(newUser.userPassword);
await registerPage.signupClick();


 /*   await MainPage.open(url);
 await MainPage.register();
  //await page.goto(url);
  //await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByPlaceholder('Your Name').click();
  await page.getByPlaceholder('Your Name' ).fill(newUser.userName);
  await page.getByPlaceholder('Email' ).click();
  await page.getByPlaceholder('Email' ).fill(newUser.userEmail);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(newUser.userPassword);
  await page.getByRole('button', { name: 'Sign up' }).click();
}); */
});
});
/*
test('Class', async ({ page }) => {
class Animals {
constructor (snakeName, catAge = 5) {
    this.dogName = 'Бонд';
    this.catName = 'Мурка';
    this.snakeName = snakeName;
    this.catAge = catAge;
}
    sayDog(){
        const voice = 'Гав';
        return voice;
    }
}
let animal = new Animals('ИмяЗмейки');
console.log(animal);
console.log(animal.sayDog());
});
});
*/
