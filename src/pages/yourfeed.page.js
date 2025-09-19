export class YourFeedPage {
    constructor  (page)  {
        // какие есть элементы на странице
        this.createArtical = page.getByRole('link', { name: 'New Article' })
        this.userDropdown = page.locator('div.nav-link.dropdown-toggle.cursor-pointer');
        this.logoutButton = page.getByRole('link', { name: ' Logout' });
        this.loginButton = page.getByRole('link', { name: ' Login' });




    }

    //бизнесовые действия со страницей
    async goToCreateArtical()
    {
        await this.createArtical.click();




    }
    async out()
    {
        await this.userDropdown.click();
        await this.logoutButton.click();



    }
}
