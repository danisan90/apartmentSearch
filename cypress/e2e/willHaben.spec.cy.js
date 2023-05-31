describe('Search apartments in will haben', () => {
  beforeEach('Open willhaben', () => {
    cy.visit('https://www.willhaben.at/iad')
    cy.get('#didomi-notice-agree-button').click()

  })
  it('Search apartment test', () => {
    cy.xpath(`//header/div[@id='main-header']/div[2]/div[2]/a[2]`).click()
    cy.get('[data-testid="searchid-select"]').contains('Wohnung mieten')
    cy.get('[data-testid="navigator-province-open-modal-button"] > .Box-sc-wfmb7k-0').click()
    cy.get('form > :nth-child(17) > .Checkbox__CheckboxLabel-sc-7kkiwa-7 > .Checkbox__CheckboxInputWrapper-sc-7kkiwa-8 > .Checkbox__StyledCheckbox-sc-7kkiwa-9').click()
    cy.get('[type="checkbox"]')
    .eq(9)
    .check({ force: true })
    .should('be.checked')

    
    cy.get('[data-testid="navigator-province-Wien, 01. Bezirk, Innere Stadt-checkbox-label"]')
    .click()

    cy.get('[data-testid="navigator-province-Wien, 07. Bezirk, Neubau-checkbox-label"]')
    .click()

    cy.get('[data-testid="navigator-province-Wien, 13. Bezirk, Hietzing-checkbox-label"]')
    .click()

    cy.get('[data-testid="navigator-province-Wien, 14. Bezirk, Penzing-checkbox-label"]')
    .click()

    cy.get('[data-testid="navigator-province-Wien, 22. Bezirk, Donaustadt-checkbox-label"]')
    .click()
    
    cy.get('[data-testid="province-submit-modal"]')
    .click()
    cy.get('[data-testid="navigator-price-to-input"]').type('1200')

    cy.get('[data-testid="navigator-nrofrooms-open-modal-button"] > .Box-sc-wfmb7k-0')
    .click()

    cy.get(':nth-child(3) > .Checkbox__CheckboxLabel-sc-7kkiwa-7 > .Checkbox__CheckboxInputWrapper-sc-7kkiwa-8 > .Checkbox__StyledCheckbox-sc-7kkiwa-9')
    .click()

    cy.get('[data-testid="nrofrooms-submit-modal"]').click()

  })
})