export class TitleArticlePage {
    constructor  (page)  {
        // какие есть элементы на странице
        this.checkTitle = page.getByRole('heading')
        this.checkAbout = page.getByRole('paragraph')

    }

    //бизнесовые действия со страницей
    async CheckTitleArticle()
    {


        await this.checkTitle.toContainText();
        await this.checkAbout.toContaintext();



    }
}