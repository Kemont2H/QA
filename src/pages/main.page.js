// src/pages/main.page.js
import { BasePage } from './base.page';

export class MainPage extends BasePage {
    constructor(page) {
        super(page);
        this.logo = page.locator('.navbar-brand');
        this.signupButton = page.getByRole('link', { name: 'Sign up' });
        this.loginButton = page.getByRole('link', { name: 'Sign in' });
        this.settingsLink = page.locator('.dropdown-toggle');
        this.settingsButton = page.getByRole('link', { name: 'Settings' });
    }

    async register() {
        await this.signupButton.click();
    }

    async goToRegister() {
        await this.signupButton.click();
    }

    async goToLogin() {
        await this.loginButton.click();
    }

    async goToSettings() {
        await this.settingsLink.click();
        await this.settingsButton.click();
    }
}