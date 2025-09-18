import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker';
import {MainPage,RegisterPage,YourFeedPage, CreateArcticlePage, TitleArticlePage} from '../src/pages/index.js';
const name = faker.person.fullName();
const email = faker.internet.email();
const password = faker.internet.password();
const title = faker.lorem.sentence();

const URL = 'https://realworld.qa.guru/';

test ('добавление новой статьи', async ({page}) => {
    //  главная страница
    // вынести в beforeach
    await page.goto(URL);
    const main = new MainPage(page);
    const register = new RegisterPage(page);
    const yourfeed = new YourFeedPage(page);
    const createarcticle = new CreateArcticlePage(page);
    const titlearticle = new TitleArticlePage(page);




    await main.goToRegister();
    // страница регистрации
    await register.register(name,email,password)

    //перейти на страницу создания статьи your feed
    await yourfeed.goToCreateArtical()

    // страница создания(created aticle)
    await  createarcticle.create(title,'Краткое описание','текст статьи','тег')

    // проверка элементов на страничке article-titleser

    await expect(titlearticle.checkTitle(title));
    await expect(titlearticle.checkAbout('Краткое описание'));








// создать страничку артикл и найти все 4 элемента (которые указывались присоздании)

    /*expect ( article.tag).toContaintext
    expect(page.locator('[class="preview-link"]')).toContainText(title);
    expect(page.locator('[class="preview-link"]')).toContainText('about cats');

     */
// создать страничку артикл






});
