// const { it } = require("node:test");




describe("Static page load tests", () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html')
      });

      it("button is displayed on page load", () => {
      cy.get(".calculator__number--eight").should("have.text", "8");

    });

});

describe("Basic calculations", () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html')
      });

      it("7 multiplied by 7 equal to 49", () => {
        // Act - user flow that is being performed
      cy.get(".calculator__number--seven").click();
      cy.get(".calculator__operator--times").click();
      cy.get(".calculator__number--seven").click();
      cy.get(".calculator__operator--equals").click();

    //create assertion of what the display should be
    cy.get(".calculator__screen").should("have.value", "49.00");

    });

    it("24 divided by 6 equal to 4", () => {
      cy.get(".calculator__number--two").click();
      cy.get(".calculator__number--four").click();
      cy.get(".calculator__operator--divide").click();
      cy.get(".calculator__number--six").click();
      cy.get(".calculator__operator--equals").click();

      cy.get(".calculator__screen").should("have.value", "4.00");
    });    

    it("3 plus 102 equal to 105", () => {
      cy.get(".calculator__number--three").click();
      cy.get(".calculator__operator--plus").click();
      cy.get(".calculator__number--one").click();
      cy.get(".calculator__number--zero").click();
      cy.get(".calculator__number--two").click();
      cy.get(".calculator__operator--equals").click();

      cy.get(".calculator__screen").should("have.value", "105.00");
    });

    it("94 minus 156 equal to -62", () => {
      cy.get(".calculator__number--nine").click();
      cy.get(".calculator__number--four").click();
      cy.get(".calculator__operator--minus").click();
      cy.get(".calculator__number--one").click();
      cy.get(".calculator__number--five").click();
      cy.get(".calculator__number--six").click();
      cy.get(".calculator__operator--equals").click();

      cy.get(".calculator__screen").should("have.value", "-62.00");
    });

    it("AC button returns to 0", () => {
      cy.get(".calculator__number--nine").click();
      cy.get(".calculator__number--eight").click();
      cy.get(".calculator__operator--clear").click();
      cy.get(".calculator__screen").should("have.value", "0");

      });

      it("12 minus 6 equal to 6", () => {
        cy.get(".calculator__number--nine").click();
        cy.get(".calculator__operator--clear").click();
        cy.get(".calculator__number--one").click();
        cy.get(".calculator__number--two").click();
        cy.get(".calculator__operator--minus").click();
        cy.get(".calculator__number--six").click();
        cy.get(".calculator__operator--equals").click();

        cy.get(".calculator__screen").should("have.value", "6.00");
    });

    it("14.5 multiplied by 68.3 equals 990.35", () => {
        cy.get(".calculator__number--one").click();
        cy.get(".calculator__number--four").click();
        cy.get(".calculator__number--point").click();
        cy.get(".calculator__number--five").click();
        cy.get(".calculator__operator--times").click();
        cy.get(".calculator__number--six").click();
        cy.get(".calculator__number--eight").click();
        cy.get(".calculator__number--point").click();
        cy.get(".calculator__number--three").click();
        cy.get(".calculator__operator--equals").click();

        cy.get(".calculator__screen").should("have.value", "990.35");
    })



});

// check buttons are there: numbers/operands/equals/decimal/clear
// check that operands function -- positive/negative/plus/minus/divide/multiply
// check that equals produces correct values
// check that when numbers/operands clicked -- display value/operand
// clicking multiple numbers produces sequential display