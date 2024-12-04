import { LoginPage } from "./pages/loginpage";
import { faker } from "@faker-js/faker";

const propertyName = faker.animal.petName();
const country = faker.location.country();
const city = faker.location.city();
const systemName = faker.person.firstName();

const loginPage = new LoginPage();

it("EnergySystem", () => {
  cy.visit("https://yenex.com/account/login");

  loginPage.enterEmail("yusra1122@yopmail.com");
  loginPage.enterPassword("111111");
  loginPage.clickLoginButton();

  cy.get(
    ".AppBarProfileDropdown_ynx-appbar-profile-dropdown__dElMJ .ant-avatar-image img"
  ).click();
  cy.get(".ant-dropdown-menu-title-content")
    .contains("Energy Systems")
    .eq(0)
    .click();

  // Property Add
  // cy.get("button[type = button]").contains("Add Property").click();
  // cy.get("#name").type(propertyName);
  // cy.get('input[placeholder="Property location"]').type(country);
  // cy.get(".pac-item").first().click();
  // cy.get('input[placeholder="Enter name of city"]').type(city);
  // cy.get("button[type = button]").contains("Submit").click();

  // User System Add
  cy.get("p").contains("User Systems").click();
  cy.get("button[type = button]").contains("Add System").click();
  cy.get("#property").click();

  //first dropwn of selecting property
  cy.get("#property").click();
  cy.get(".rc-virtual-list-holder-inner").first().click({ force: true });
  cy.get(".ant-select-item.ant-select-item-option").then(($options) =>
    cy
      .wrap($options[Math.floor(Math.random() * $options.length)])
      .click({ force: true })
  );

  //second dropwn of selecting type of energy system
  cy.get("#systemType").click();
  cy.get(".rc-virtual-list-holder-inner").last().click();
  cy.get(".ant-select-item.ant-select-item-option")
    .should("be.visible")
    .then(($options) => {
      const randomIndex = Math.floor(Math.random() * $options.length);
      cy.wrap($options[randomIndex]).click({ force: true });
    });

  cy.get("#additionalSystemName").type(systemName); //system name
  cy.get("button[type = button]").contains("Next").click(); // next button

  //Equipment information

  cy.get("button[type = button]").contains("Choose Solar Panels").click();
  // cy.get(".mb-16 lg:hidden border border-lightGray rounded-xl");
  cy.get(
    ".rounded-lg.h-9.w-16.bg-greenLight.flex.items-center.justify-center"
  ).then(($buttons) => {
    // Pick a random index from the list of buttons
    const randomIndex = Math.floor(Math.random() * $buttons.length);
    // Click the randomly selected button
    cy.wrap($buttons[randomIndex]).click();
  });
});
