
export class MainPage {
    constructor  (page)  {
        // какие есть элементы на странице
        this.signupLink = page.getByRole('link', { name: 'Sign up' })
        this.dropdownProfile = page.getByText('retaergaeraergare')
        this.logoutButton = page.getByRole('link', { name: ' Logout' })



    }

    //бизнесовые действия со страницей
    async goToRegister()
    {

     await this.dropdownProfile.click();
     await this.signupLink.click();
     await this.logoutButton.click();


    }
}


