describe('Search apartments in will haben', () => {
  beforeEach('Open willhaben', () => {
    cy.visit('https://www.willhaben.at/iad')
    cy.get('#didomi-notice-agree-button').click()

  })
  it('Search aprtement test', () => {
    cy.xpath(`//header/div[@id='main-header']/div[2]/div[2]/a[2]`).click()
    cy.get('[data-testid="searchid-select"]').contains('Wohnung mieten')
  })
})