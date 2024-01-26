describe('Load Dashboard', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/#/')
  })

  it('displays Dashboard Text', () => {
    cy.get('.justify-between.items-center').should('have.text', 'MenuGood afternoon, Joe!')
    //cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  })

})
