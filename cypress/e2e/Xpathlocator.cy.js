describe("XpathLocators", () =>  {


  it('finds list items', () => {

    cy.visit("https://www.orangehrm.com//")
   
    cy.xpath("//section[2]//div[4]//div[1]//div[2]//div[1]//ul[1]/li").should("have.length",3)

    
  });


  it('find div', () => {

    cy.visit("https://www.orangehrm.com//")
    cy.xpath("//div[@class='owl-stage-outer']")

  });
// it("Number of Product", () =>{

//   cy.visit("https://store-dashboard.staging.snap.app/stores/")
//   cy.wait(8000)
//   cy.xpath("//snap-card[@class='flex flex-col xs:w-screen sm:w-full py-6 mb-1 xs:rounded-none sm:rounded-md md:rounded-lg hydrated']")
//   .xpath(".//snap-card[@class='flex flex-col xs:w-screen sm:w-full py-6 mb-1 xs:rounded-none sm:rounded-md md:rounded-lg hydrated']//snap-card[1]//snap-card-header[1]//div[1]//div[1]").should("have.length",3)
// })


// it("Chained Xpath", () =>{

//   cy.visit("http://automationpractice.com/index.php")
//   cy.xpath("//ul[@id='homefeatured']").xpath("./li").should("have.length",7)

// })
// it("csscounting", () =>
//   {
//   cy.visit("http://automationpractice.com/index.php")
//   cy.get("//ul[@id='homefeatured']/li").should("have.length",7)
  

// })
})
