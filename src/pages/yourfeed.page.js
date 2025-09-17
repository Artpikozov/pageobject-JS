export class YourFeedPage {
    constructor  (page)  {
        // какие есть элементы на странице
        this.createArtical = page.getByRole('link', { name: 'New Article' })




    }

    //бизнесовые действия со страницей
    async goToCreateArtical()
    {
        await this.createArtical.click();



    }
}
