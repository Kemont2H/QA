import { expect } from '@playwright/test';
import {test} from '../src/helpers/fixtures/fixture';
import { UserBuilder } from '../src/helpers/index';
import { App } from '../src/pages/index';

/*const url = 'https://realworld.qa.guru/#/';
//let newUser; */
let app; 

test.describe('Builder', () => {
   /* test.beforeEach(async ({ page }) => {
        newUser = new UserBuilder()
            .addBio()
            .addEmail()
            .addName()
            .addPassword()
            .generate();
        
        app = new App(page); 
        
        await app.mainPage.open(url);
        await app.mainPage.goToRegister();
        await app.registerPage.enterUsername(newUser.userName);
        await app.registerPage.enterEmail(newUser.userEmail);
        await app.registerPage.enterPassword(newUser.userPassword);
        await app.registerPage.clickSignup();
    }); */

    test('Пользователь может изменить bio.', async ({ registerFixture }) => {
        console.log(process.env.NODE_ENV);
        await registerFixture.mainPage.goToSettings(); 
        await registerFixture.settingsPage.enterUserBio('newUser.userBio');
        await registerFixture.settingsPage.updateProfileSimple();
        await expect(registerFixture.settingsPage.bioField).toHaveValue('newUser.userBio'); 
    });

});