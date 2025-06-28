describe('Loan Dashboard', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the dashboard header with DemoApp title', () => {
    cy.get('h1').should('contain', 'DemoApp')
    cy.get('input[placeholder="Search..."]').should('be.visible')
  })

  it('should display the three-column layout on desktop', () => {
    cy.viewport(1280, 720)
    cy.get('main').should('have.class', 'grid')
    cy.get('main > div').should('have.class', 'grid-cols-3')
  })

  it('should display borrower pipeline with tabs', () => {
    cy.get('[data-testid="borrower-pipeline"]').within(() => {
      cy.get('[role="tablist"]').should('be.visible')
      cy.get('[role="tab"]').should('have.length', 3)
      cy.get('[role="tab"]').first().should('contain', 'New')
      cy.get('[role="tab"]').eq(1).should('contain', 'In Review')
      cy.get('[role="tab"]').eq(2).should('contain', 'Approved')
    })
  })

  it('should display borrower cards in the pipeline', () => {
    cy.get('[data-testid="borrower-card"]').should('have.length.at.least', 1)
    cy.get('[data-testid="borrower-card"]').first().within(() => {
      cy.get('[data-testid="borrower-name"]').should('be.visible')
      cy.get('[data-testid="borrower-amount"]').should('be.visible')
      cy.get('[data-testid="borrower-status"]').should('be.visible')
    })
  })

  it('should update borrower details when clicking on a borrower', () => {
    cy.get('[data-testid="borrower-card"]').first().click()
    cy.get('[data-testid="borrower-detail"]').should('be.visible')
    cy.get('[data-testid="borrower-detail"]').should('not.contain', 'Select a borrower to view details')
  })

  it('should display AI explainability section', () => {
    cy.get('[data-testid="borrower-card"]').first().click()
    cy.get('[data-testid="ai-explainability"]').should('be.visible')
    cy.get('[data-testid="ai-explainability"]').click()
    cy.get('[data-testid="ai-flags"]').should('be.visible')
  })

  it('should display action buttons in borrower details', () => {
    cy.get('[data-testid="borrower-card"]').first().click()
    cy.get('button').should('contain', 'Request Documents')
    cy.get('button').should('contain', 'Send to Valuer')
    cy.get('button').should('contain', 'Approve')
    cy.get('button').should('contain', 'Escalate')
  })

  it('should display broker information', () => {
    cy.get('[data-testid="broker-info"]').should('be.visible')
    cy.get('[data-testid="broker-name"]').should('be.visible')
    cy.get('[data-testid="broker-stats"]').should('be.visible')
  })

  it('should display onboarding workflow', () => {
    cy.get('[data-testid="onboarding-workflow"]').should('be.visible')
    cy.get('[data-testid="workflow-step"]').should('have.length', 7)
  })

  it('should display contact buttons for broker', () => {
    cy.get('[data-testid="broker-contact-buttons"]').should('be.visible')
    cy.get('button').should('contain', 'Call')
    cy.get('button').should('contain', 'Email')
    cy.get('button').should('contain', 'Chat')
  })

  it('should be responsive on mobile', () => {
    cy.viewport(375, 667)
    cy.get('main > div').should('not.have.class', 'grid-cols-3')
    cy.get('main > div').should('have.class', 'grid-cols-1')
  })

  it('should log console output when action buttons are clicked', () => {
    cy.get('[data-testid="borrower-card"]').first().click()
    cy.window().then((win) => {
      cy.spy(win.console, 'log').as('consoleLog')
    })
    
    cy.get('button').contains('Request Documents').click()
    cy.get('@consoleLog').should('have.been.calledWith', 'Requesting documents for borrower 1')
    
    cy.get('button').contains('Send to Valuer').click()
    cy.get('@consoleLog').should('have.been.calledWith', 'Sending borrower 1 to valuer')
    
    cy.get('button').contains('Approve').click()
    cy.get('@consoleLog').should('have.been.calledWith', 'Approving loan for borrower 1')
    
    cy.get('button').contains('Escalate').click()
    cy.get('@consoleLog').should('have.been.calledWith', 'Escalating borrower 1 to credit committee')
  })
}) 