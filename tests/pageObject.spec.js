import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker';
const name = faker.person.fullName();
const email = faker.internet.email();
const password = faker.internet.password();
const title = faker.lorem.sentence();

const URL = 'https://realworld.qa.guru/';

test ('test', async ({page}) => {
    await page.goto(URL);
    await page.getByRole('link', { name: 'Sign up' }).click();
    await page.getByRole('textbox', { name: 'Your Name' }).click();
    await page.getByRole('textbox', { name: 'Your Name' }).fill(name);
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill(email);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    const SignUp = await page.locator('[class="btn btn-lg btn-primary pull-xs-right"]');
    await SignUp.waitFor();
    await SignUp.click();
    await page.waitForTimeout(2000);
    await page.locator('[class="nav navbar-nav pull-xs-right"]').locator('[class="nav-link "]').click();
    await page.getByRole('textbox', { name: 'Article Title' }).click();
    await page.getByRole('textbox', { name: 'Article Title' }).fill(title);
    await page.getByRole('textbox', { name: 'What\'s this article about?' }).click();
    await page.getByRole('textbox', { name: 'What\'s this article about?' }).fill('about cats');
    await page.getByRole('textbox', { name: 'Write your article (in' }).click();
    await page.getByRole('textbox', { name: 'Write your article (in' }).fill('Cats are very affectionate animals, they can purr');
    await page.getByRole('textbox', { name: 'Enter tags' }).click();
    await page.getByRole('textbox', { name: 'Enter tags' }).fill('cats');
    await page.getByRole('button', { name: 'Publish Article' }).click();
    await page.waitForTimeout(2000);
    await page.locator('[class="user-pic"]').click();
    await page.locator('[class="ion-person"]').click()
    await page.waitForTimeout(2000);
    expect(page.locator('[class="preview-link"]')).toContainText(title);
    expect(page.locator('[class="preview-link"]')).toContainText('about cats');







});
