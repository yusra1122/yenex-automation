import { LoginPage } from "./pages/loginpage";
const loginPage = new LoginPage();

it('Navbar', () => {
    cy.visit("https://yenex.com/account/login") 

loginPage.enterEmail('yusra1122@yopmail.com')
loginPage.enterPassword('111111')
loginPage.clickLoginButton()

// My Profile:
// cy.get('.ProfileAvatar_profile-avatar__0iJmc').click();
// cy.contains('My Profile').click(); 

// Build Your System:
// cy.get('a[href="/build-your-system"]', { multiple: true }).eq(0) .click();

// Browse System Community map
cy.get('a[href="/community/map"]', { multiple: true }).eq(0) .click();

// Browse System list View
cy.get('button[type="button"]').contains('List View').click();

// cy.get('[placeholder="Search"]').type('Canada'); //Search field

// Randomly select option from All Time Sort
cy.get('.ant-select-selector').eq(1).click();
cy.get('.ant-select-item.ant-select-item-option').then((options) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options).eq(randomIndex).click();
    cy.get('.ant-select-selector')
      .should('contain.text', options[randomIndex].innerText);
  });

// Randomly select option from System type
  cy.get('.ant-select-selector').eq(0).click();
  cy.get('.ant-select-item.ant-select-item-option').should('be.visible');
cy.get('.ant-select-item.ant-select-item-option').then((options) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options).eq(randomIndex).click({ force: true });
    cy.get('.ant-select-selector')
      .should('contain.text', options[randomIndex].innerText);
  });

})