// tests/allure.test.js
import { test, expect } from '@playwright/test';
import { UserBuilder } from '../src/helpers/index';
import { allure } from 'allure-playwright';
import { App } from '../src/pages/index';

const url = 'https://realworld.qa.guru/#/';
let newUser;
let app;

test.describe('Builder', () => {
    test.beforeEach(async ({ page }) => {
        newUser = new UserBuilder()
            .addBio()
            .addEmail()
            .addName()
            .addPassword()
            .generate();
        
        app = new App(page);
        
        await app.mainPage.open(url);
        await app.mainPage.goToRegister();
        await allure.step("Ввести имя пользователя", async () => {
        await app.registerPage.enterUsername(newUser.userName);
        });
        await app.registerPage.enterEmail(newUser.userEmail);
        await app.registerPage.enterPassword(newUser.userPassword); 
        await app.registerPage.clickSignup();
    });

    test('Пользователь может изменить bio.', async ({ page }) => {
        await allure.owner("John Doe");
        await allure.tags("smoke", "UI", 'regress', 'profile');
    // await allure.severity(Severity.CRITICAL);
        await allure.link("https:/example.com/docs", 'Related Documentation');
        await allure.issue("AUTH-123","https:/example.com/issue/AUTH-123");
        await allure.tms("TMS-456","https:/example.com/tms/TMS-456");
        await allure.parent_suite("Web interface")
        await allure.suite("Essential features")

        
        await app.mainPage.goToSettings();
        await app.settingsPage.enterUserBio(newUser.userBio);
        await app.settingsPage.updateProfileSimple();
        await expect(app.settingsPage.bioField).toHaveValue(newUser.userBio);
    });
});