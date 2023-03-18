describe("CSSLocators", () =>{

  // it("csslocators", () =>
  // {
  // cy.visit("https://www.daraz.pk/")
  // cy.get(".search-form--uSKTz")
  // cy.get(".search-input--sGlrc").type("Shoes")
  // cy.get("l.search-button--YRxBx").click()
  // cy.get("#root").contains(".product-list--nsoGq")
  
  // })

  it("Login", () =>
  {
  cy.visit("")
  cy.wait(5000)
  //cy.get(".snap-input")
  cy.get(".snap-input").first().type("dashboard_backend@snap.app")
  cy.get(".snap-input").last().type("Store_1111")
  cy.get(".snap-button-primary.hydrated").click()
  cy.get("#root").contains(".product-list--nsoGq")
  
  })
  
  })


  
  
  