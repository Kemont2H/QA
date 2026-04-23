
import { test, expect } from '@playwright/test';
import { MainPage } from '../src/pages/index';

const url = 'https://realworld.qa.guru/#/';

function convertHexToRGB (hex) {
    hex = hex.replace(/^#/, '');
    const red = parseInt(hex.substring(0,2),16);
    const green = parseInt(hex.substring(2,4),16);
    const blue = parseInt(hex.substring(4,6),16);

    return {
        red: red,
        green: green,
        blue: blue,
    };
}

async function checkColor( element , cssProps, rgbColors){
    await expect(element).toHaveCSS(cssProps, `rgb(${rgbColors.red}, ${rgbColors.green}, ${rgbColors.blue})`);
}

test.describe('CSS', () => {
    test('Проверить цвет логотипа', async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.open(url);
        let hexColor = "#5CB85C";
        let rgbColors = convertHexToRGB(hexColor);
        const logo = await mainPage.logo;
        await checkColor(logo, 'color', rgbColors);

    });
});