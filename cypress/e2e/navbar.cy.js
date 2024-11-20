import { LoginPage } from "./pages/loginpage";
const loginPage = new LoginPage();

it('Navbar', () => {
    cy.visit("https://yenex.com/account/login") 

loginPage.enterEmail('yusra1122@yopmail.com')
loginPage.enterPassword('111111')
loginPage.clickLoginButton()

// cy.get('.ProfileAvatar_profile-avatar__0iJmc').click();
// cy.contains('My Profile').click();

// cy.get('a[href="/build-your-system"]', { multiple: true }).eq(0) .click();

cy.get('a[href="/community/map"]', { multiple: true }).eq(0) .click();

})