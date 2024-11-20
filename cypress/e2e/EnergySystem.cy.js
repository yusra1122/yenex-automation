import { LoginPage } from "./pages/loginpage";
const loginPage = new LoginPage();

it('EnergySystem', () => {
    cy.visit("https://yenex.com/account/login") 

loginPage.enterEmail('yusra1122@yopmail.com')
loginPage.enterPassword('111111')
loginPage.clickLoginButton()


cy.get('.ProfileAvatar_profile-avatar__0iJmc').click();
cy.contains('Energy Systems').click();

});