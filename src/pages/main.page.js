
export class MainPage {
    constructor  (page)  {
        // какие есть элементы на странице
        this.signupLink = page.getByRole('link', { name: 'Sign up' })



    }

    //бизнесовые действия со страницей
    async goToRegister()
    {


     await this.signupLink.click();


    }
}


