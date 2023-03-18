describe("Assertions Demo", () => {
  //Implicit Assertions
  // --Should
  // --and

  //Implict Assertions Start Here

  it("Implicit assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
   // cy.wait(500);
    cy.url().should("not.include", "Pakistan");
    cy.url().should("include", "orangehrmlive.com");
    cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login" );
    cy.url().should("not.contain", "123");

    // Second Method

    cy.url()
      .should("not.include", "number")
      .should("include", "opensource-demo")
      .should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login" )
      .should("not.contain", "PPP");

    //and
    cy.url()
      .should("not.include", "late person")
      .and("include", "web/index.php")
      .and(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .and("not.contain", "PTI");
  });

  //Implicit Assertions End Here*/
  it("Automating OraneHRM", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.wait(500);
    cy.title().should("eq", "OrangeHRM");
    cy.get(".orangehrm-login-branding > img").should("be.visible"); //logo
    cy.get(".oxd-text.oxd-text--h5.orangehrm-login-title").should("be.visible"); //login
    cy.get(".orangehrm-login-logo > img").should("be.visible"); //Orange picture on left
    cy.get(".oxd-sheet.oxd-sheet--rounded.oxd-sheet--gutters.oxd-sheet--gray-lighten-2.orangehrm-demo-credentials"); //admin and user name displayed or not
    cy.get(".oxd-sheet > :nth-child(1)").should("contain", "Username : Admin"); //Admin= Admin or not
    cy.get(".oxd-sheet > :nth-child(2)").should("contain",  "Password : admin123" ); //Passwrod = admin123 or not
    // cy.get('.oxd-text.oxd-text--h5.orangehrm-login-title').should("be.visible")
    // cy.get('.oxd-text.oxd-text--h5.orangehrm-login-title').should("be.visible")
  });
});
