import { test, expect } from "@playwright/test";
import { ApiClient } from '../src/services/apiClient';
import config from "config";
import dotenv from 'dotenv';
dotenv.config();

let client;

test.describe("API challenge v3", () => {

  test.beforeAll(async ({ }) => {
    client = await ApiClient.loginAs();
    console.log(config.customer);
    console.log(process.env.API_KEY);
    console.log(process.env.PDF);
  });

  test('Получить список заданий get /challenges @API', async () => {
    const response = await client.challenges.get();
    
    // Правильный способ логирования ответа от Axios
    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);
    console.log('Response data:', JSON.stringify(response.data, null, 2));
    
    // Проверки
    expect(response.status).toBe(200);
    expect(response.headers).toEqual(expect.objectContaining({ 
        "x-challenger": expect.any(String) 
    }));
    
    // Проверяем структуру данных
    expect(response.data).toBeDefined();
    
    if (response.data && response.data.challenges) {
        expect(response.data.challenges.length).toBe(59);
        console.log(`Found ${response.data.challenges.length} challenges`);
    } else {
        console.log('Response data keys:', Object.keys(response.data || {}));
    
        if (Array.isArray(response.data)) {
            console.log('Response data is an array of length:', response.data.length);
            expect(response.data.length).toBe(59);
        }
    }
  });
});