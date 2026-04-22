import { BasePage } from './base.page';
import { allure } from 'allure-playwright';


export class RegisterPage extends BasePage {
    constructor(page) {
        super(page);
        this.emailField = page.getByPlaceholder('Email');
        this.passwordField = page.getByPlaceholder('Password');
        this.usernameField = page.getByPlaceholder('Your Name');
        this.signupButton = page.getByRole('button', { name: 'Sign up' });
    }

    async enterUsername(userName) {
        await allure.step("Ввести имя пользователя", async () => {
            await this.usernameField.click();
            await this.usernameField.fill(userName);
        });
    }

    async enterEmail(userEmail) {
        await this.emailField.click();
        await this.emailField.fill(userEmail);
    }

    async enterPassword(userPassword) {
        await this.passwordField.click();
        await this.passwordField.fill(userPassword);
    }

    async clickSignup() {
        await this.signupButton.click();
    }
}