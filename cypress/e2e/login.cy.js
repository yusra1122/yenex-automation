import { LoginPage } from "./pages/loginpage";

const loginPage = new LoginPage();
it('login successfully', () => {
   cy.visit("https://yenex.com/account/login") 

loginPage.enterEmail('yusra1122@yopmail.com')
loginPage.enterPassword('111111')
loginPage.clickLoginButton()
});