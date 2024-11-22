// Ckeck footer links are working fine or not
import { LoginPage } from "./pages/loginpage";

const loginPage = new LoginPage();
it('Footer links work', () => {
    cy.visit("https://yenex.com/account/login") 

loginPage.enterEmail('yusra1122@yopmail.com')
loginPage.enterPassword('111111')
loginPage.clickLoginButton()
cy.visit("https://yenex.com/")

cy.scrollTo('bottom')
// cy.get('.flex .text-blackLight').contains('Build Your System').click(); 
cy.get('.flex .text-blackLight').contains('Browse Systems').click(); 
// cy.get('.flex .text-blackLight').contains('Products').click(); 
// cy.get('.flex .text-blackLight').contains('yenexos').click(); 
});