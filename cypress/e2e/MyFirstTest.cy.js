

describe('My First Test', () => {


  it('Title Test Positive', () => {
 cy.visit("https://opensource-demo.orangehrmlive.com/")
cy.title().should("eq","OrangeHRM")
                                  })

it('Title Test Negative', () => {
 cy.visit("https://opensource-demo.orangehrmlive.com/")
 cy.title().should("not.eq","Orangehrm")
                                  })


})


