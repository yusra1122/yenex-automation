export class LoginPage {

   email_inputfield = "input[type = email]"
   password_inputfield = "#password"
   login_button = "button[type = submit]"
   enterEmail (email) {
    cy.get(this.email_inputfield).type(email) 
}
enterPassword (password) {
    cy.get(this.password_inputfield).type(password)
}
clickLoginButton () {
    cy.get(this.login_button).click()
}
}

Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false prevents Cypress from failing the test
    return false;
});


