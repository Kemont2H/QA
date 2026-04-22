// tests/builder.spec.js
import { test, expect } from '@playwright/test';
import { UserBuilder } from '../src/helpers/index';
import { MainPage, RegisterPage, SettingsPage } from '../src/pages/index';

const url = 'https://realworld.qa.guru/#/';
let newUser;

test.describe('Builder', () => {
    test.beforeEach(async ({ page }) => {
        newUser = new UserBuilder()
            .addBio()
            .addEmail()
            .addName()
            .addPassword()
            .generate();

        const mainPage = new MainPage(page);
        const registerPage = new RegisterPage(page);
        
        await mainPage.open(url);
        await mainPage.goToRegister();
        await registerPage.enterUsername(newUser.userName);
        await registerPage.enterEmail(newUser.userEmail);
        await registerPage.enterPassword(newUser.userPassword);
        await registerPage.clickSignup();
    });

    test('Пользователь может изменить bio.', async ({ page }) => {
        const mainPage = new MainPage(page);
        const settingsPage = new SettingsPage(page);

        await mainPage.goToSettings(); // ✅ исправлено: mainPage, а не MainPage
        await settingsPage.enterUserBio(newUser.userBio);
        await settingsPage.updateProfileSimple();
        await expect(settingsPage.bioField).toHaveValue(newUser.userBio); // ✅ toHaveValue вместо toContainText
    });
});