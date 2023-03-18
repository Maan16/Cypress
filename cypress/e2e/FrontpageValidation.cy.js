

describe("OrangeHRM Front Page Validation",()=>{

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  })

  before(() => {
    cy.wait(500);
  })


//it 1  Verifing Title and URL
it("Verifing Title and URL",()=>{
cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")//url
cy.title().should("eq","OrangeHRM")
})


//it 2  Verifing All pictures and Text visible and Correct or not
it("Verifing pictures visible or not",()=>{
  cy.get('.orangehrm-login-branding > img').should("be.visible")//OrangeHrm top picture
  cy.get('.orangehrm-login-logo > img').should("be.visible")//OrangeHrm left picture

 
  //Login Button and Login text
  cy.get('.oxd-button').should("be.visible")//Login Button
  cy.get('.oxd-button').contains("Login")//Login text 

  cy.get('.orangehrm-login-layout-blob').should("be.visible")//full page

 //Login text on top
  cy.get('.oxd-text--h5').should("be.visible")//Login Text
  cy.get('.oxd-text--h5').contains("Login")//Login text 

  cy.get('.oxd-sheet > :nth-child(1)').should("be.visible").contains("Username : Admin")//USer name Text and USer name

  cy.get('.orangehrm-login-form').should("be.visible")//User Name,Password and text boxes
  cy.get('.orangehrm-login-footer-sm').should("be.visible")//Social media Logos
  cy.get('.orangehrm-login-slot').should("be.visible")//Middle BLock

  })
  
  


})