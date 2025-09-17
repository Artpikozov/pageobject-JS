
export class RegisterPage {
    constructor  (page)  {
        // какие есть элементы на странице
        this.nameInput = page.getByRole('textbox', { name: 'Your Name' })
        this.emailInput = page.getByRole('textbox', { name: 'Email' })
        this.passwordInput = page.getByRole('textbox', { name: 'Password' })
        this.signUpButton = page.getByRole('button', { name: 'Sign up' })





    }

    //бизнесовые действия со страницей
    async register(
        name,email,password
    )
    {
        await this.nameInput.click();
        await this.nameInput.fill(name);
        await this.emailInput.click();
        await this.emailInput.fill(email);
        await this.passwordInput.click();
        await this.passwordInput.fill(password);
        await this.signUpButton.click();




    }
}
