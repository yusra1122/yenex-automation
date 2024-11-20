export class SignupPage{
   name_inputfield = "input[type = text]"   
   email_inputfield = "input[type = email]"
   password_inputfield = "input[name = password]"
   confirm_password_inputfield = "input[name = confirmPassword]"
   checkbox = "input[type = checkbox]"
   signup_button = "button[type = submit]" 



   enterName (name){
       cy.get(this.name_inputfield).type(name)
   }
   enterEmail (email) {
       cy.get(this.email_inputfield).type(email)
   }
   enterPassword (password) {
       cy.get(this.password_inputfield).type(password)  
   }
   enterConfirmPassword (password) {
       cy.get(this.confirm_password_inputfield).type(password)
   }
   clickCheckbox () {
       cy.get(this.checkbox).click()
   }
   clickSignupButton () {
       cy.get(this.signup_button).click()
   }
}
Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false prevents Cypress from failing the test
    return false;
});