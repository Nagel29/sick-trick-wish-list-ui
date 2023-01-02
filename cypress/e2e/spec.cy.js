describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/tricks', {
      method: 'GET',
      fixture: '../fixtures/tricks.json',
    })
    cy.visit('localhost:3000')
  })

  it('should display the header', () => {
    cy.get('h1').should('contain', 'Sick Trick Wish List')
  })

  it('should display the form', () => {
    cy.get('#form').should('exist')
    cy.get('#stance').should('contain', 'Choose Your Stance')
    cy.get('#name').should('exist')
    cy.get('#obstacle').should('contain', 'Choose Your Obstacle')
    cy.get('#tutorial').should('exist')
    cy.get('button').should('exist')
  })

  it('should display the initial tricks', () => {
    cy.get('.trick').eq(0).should('contain', 'regular')
      .and('contain', 'kickflip')
      .and('contain', 'Obstacle: flat ground')
      .and('contain', 'Link to Tutorial')
      .and('contain', 'www.learn2skate.com/1')
    cy.get('.trick').eq(1).should('contain', 'switch')
      .and('contain', 'heelflip')
      .and('contain', 'Obstacle: stairs')
      .and('contain', 'Link to Tutorial')
      .and('contain', 'www.learn2skate.com/2')
  })

  it('should update form values as changed', () => {
    cy.get('#stance').select('Regular').should('contain', 'Regular')
    cy.get('#name').type('Backflip').should('have.value', 'Backflip')
    cy.get('#obstacle').select('Stairs').should('contain', 'Stairs')
    cy.get('#tutorial').type('www.learn2skate.com/3').should('have.value', 'www.learn2skate.com/3')
  })

  it('should add the trick once the form is submitted', () => {
    cy.get('#stance').select('Regular')
    cy.get('#name').type('Backflip')
    cy.get('#obstacle').select('Stairs')
    cy.get('#tutorial').type('www.learn2skate.com/3')
    cy.get('button').click()
    cy.get('.trick').eq(2).should('contain', 'Regular')
    .and('contain', 'Backflip')
    .and('contain', 'Obstacle: Stairs')
    .and('contain', 'Link to Tutorial')
    .and('contain', 'www.learn2skate.com/3')
  })


})