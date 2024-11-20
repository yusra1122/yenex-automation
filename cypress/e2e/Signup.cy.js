import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/loginpage";
import { faker } from "@faker-js/faker";
const name = faker.person.fullName();
const email = faker.internet.email();
const password = faker.internet.password();
const login = new LoginPage();
const signup = new SignupPage();
it('signup successfully', () => {
    cy.visit("https://yenex.com/account/signup")
   signup.enterName(name);
   signup.enterEmail(email);  
   signup.enterPassword(password)
   signup.enterConfirmPassword(password)
   signup.clickCheckbox()
   signup.clickSignupButton() 
   
//    login
cy.visit("https://yenex.com/account/login")
signup.enterEmail(email);  
signup.enterPassword(password);
login.clickLoginButton();

});