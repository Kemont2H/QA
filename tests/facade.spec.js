// tests/facade.spec.js
import { test, expect } from '@playwright/test';
import { UserBuilder } from '../src/helpers/index';
import { App } from '../src/pages/index';

const url = 'https://realworld.qa.guru/#/';
let newUser;
let app; // ✅ объявляем app на уровне describe

test.describe('Builder', () => {
    test.beforeEach(async ({ page }) => {
        newUser = new UserBuilder()
            .addBio()
            .addEmail()
            .addName()
            .addPassword()
            .generate();
        
        app = new App(page); // ✅ присваиваем значение
        
        await app.mainPage.open(url);
        await app.mainPage.goToRegister();
        await app.registerPage.enterUsername(newUser.userName);
        await app.registerPage.enterEmail(newUser.userEmail);
        await app.registerPage.enterPassword(newUser.userPassword);
        await app.registerPage.clickSignup();
    });

    test('Пользователь может изменить bio.', async ({ page }) => {
        await app.mainPage.goToSettings(); // ✅ теперь app доступен
        await app.settingsPage.enterUserBio(newUser.userBio);
        await app.settingsPage.updateProfileSimple();
        await expect(app.settingsPage.bioField).toHaveValue(newUser.userBio); // ✅ toHaveValue вместо toContainText
    });
});