export class CreateArcticlePage {
    constructor  (page)  {
        // какие есть элементы на странице
        this.titleInput = page.getByRole('textbox', { name: 'Article Title' })
        this.aboutInput = page.getByRole('textbox', { name: 'What\'s this article about?' })
        this.writeInput = page.getByRole('textbox', { name: 'Write your article (in' })
        this.tagsInput = page.getByRole('textbox', { name: 'Enter tags' })
        this.publishButton = page.getByRole('button', { name: 'Publish Article' })


    }
    //бизнесовые действия со страницей
    async create(title,about,article,tag)
    {
        await this.titleInput.click()
        await this.titleInput.fill(title)

        await this.aboutInput.click()
        await this.aboutInput.fill(about)
        await this.writeInput.click()
        await this.writeInput.fill(article)
        await this.tagsInput.click()
        await this.tagsInput.fill(tag)
        await this.publishButton.click()



    }
}
/*
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

 */