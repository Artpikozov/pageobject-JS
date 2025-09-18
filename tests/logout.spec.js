import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker';
import {MainPage,RegisterPage,YourFeedPage, CreateArcticlePage, TitleArticlePage} from '../src/pages/index.js';

const name = faker.person.fullName();
const email = faker.internet.email();
const password = faker.internet.password();


const URL = 'https://realworld.qa.guru/';

test('Выход пользователя из аккаунта', async ({page}) => {

    const mainpage = new MainPage(page);
    const registerpage = new RegisterPage(page);

    // перейти на страницу https://realworld.qa.guru/
    await page.goto(URL);
    //перейти на страницу регистрации
    await mainpage.goToRegister();
    //зарегистрировать пользователя
    await registerpage.register(name, email, password);
    // выйти из зарегестрированного аккаунта
    await mainpage.goToRegister.dropdownProfile()
    await mainpage.goToRegister.logoutButton()





});