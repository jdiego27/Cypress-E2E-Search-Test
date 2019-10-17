describe('My first test using Cypress', () => {

    it('Navigate to the url www.google.com', () => {
        cy.visit('http://google.com')
    })

    it('Enter a word in the search field and hit enter', () => {
        cy.get('.gLFyf').type('Cypress').type('{enter}')
        .should('have.value', 'Cypress')

    })
    
    it('Scroll to the bottom of the web site and click on page 2', () => {
        cy.scrollTo('bottom')
        cy.get(':nth-child(3) > .fl').click()  
     })

     it('Clear the searchbox field and type a new search and hit enter', () => {
        cy.get('.gLFyf').clear().type('Python').type('{enter}')
        .should('have.value', 'Python')
 
     })

     it('Click in the second result', () => {
        cy.get('[href="https://es.wikipedia.org/wiki/Python"] > .LC20lb').click()
     })

     it('Take an screenshot of the web site', () => {
         cy.screenshot()
        
     })
})