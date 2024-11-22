import { LoginPage } from "./pages/loginpage";
import { faker } from "@faker-js/faker";

const propertyName = faker.animal.petName()
const country = faker.location.country()
const city = faker.location.city();

const loginPage = new LoginPage();

it('EnergySystem', () => {
    cy.visit("https://yenex.com/account/login") 

loginPage.enterEmail('yusra1122@yopmail.com')
loginPage.enterPassword('111111')
loginPage.clickLoginButton()


cy.get('.ProfileAvatar_profile-avatar__0iJmc').click();
cy.contains('Energy Systems').click();
cy.get('button[type = button]').contains("Add Property").click();
cy.get('#name').type(propertyName);
cy.get('input[placeholder="Property location"]').type(country);
cy.get('.pac-item').first().click();
cy.get('input[placeholder="Enter name of city"]').type(city);
cy.get('button[type = button]').contains("Submit").click();
});