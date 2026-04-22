// src/pages/settings.page.js
import { BasePage } from './base.page';

export class SettingsPage extends BasePage {
    constructor(page) {
        super(page);
        this.bioField = page.getByPlaceholder('Short bio about you');
        this.usernameField = page.getByPlaceholder('Your Name');
        this.emailField = page.getByPlaceholder('Email');
        this.passwordField = page.getByPlaceholder('Password');
        this.updateSettingsButton = page.getByRole('button', { name: 'Update Settings' });
        this.logoutButton = page.getByRole('button', { name: 'Logout' });
    }

    async enterUserBio(bio) {
        await this.bioField.click();
        await this.bioField.fill(bio);
    }

    async updateProfileSimple() {
        await this.updateSettingsButton.click();
    }

    async updateProfile({ username, email, bio, password }) {
        if (username) {
            await this.usernameField.fill(username);
        }
        if (email) {
            await this.emailField.fill(email);
        }
        if (bio) {
            await this.bioField.fill(bio);
        }
        if (password) {
            await this.passwordField.fill(password);
        }
        await this.updateSettingsButton.click();
    }

    async logout() {
        await this.logoutButton.click();
    }

    async getBioText() {
        return await this.bioField.inputValue();
    }
}