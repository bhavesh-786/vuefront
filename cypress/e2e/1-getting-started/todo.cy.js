describe('Load Dashboard', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/#/')
  })

  it('displays Dashboard Text', () => {
    cy.get('.justify-between.items-center .getText').should('have.text', 'Good afternoon, Joe!')
    //cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  })

  it('get permormance on click', () => {
    cy.get('.getPerformance').click()
  })

  it('get Average Of G1, G2, G3 on click', () => {
    cy.get('.getAverage').click()
  })

})
