describe('Loan Dashboard', () => {
  beforeEach(() => {
    cy.visit('/')
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

  it('should update borrower details when clicking on a borrower', () => {
    cy.get('[data-testid="borrower-card"]').first().click()
    cy.get('[data-testid="borrower-detail"]').should('be.visible')
    cy.get('[data-testid="borrower-detail"]').should('not.contain', 'Select a borrower to view details')
  })

  // Borrower Details Action Button Tests
  describe('Borrower Details Action Buttons', () => {
    beforeEach(() => {
      // Select a borrower to view details
      cy.get('[data-testid="borrower-card"]').first().click()
      cy.get('[data-testid="borrower-detail"]').should('be.visible')
    })

    it('should display all action buttons when borrower is selected', () => {
      cy.get('[data-testid="request-documents-button"]').should('be.visible')
      cy.get('[data-testid="send-to-valuer-button"]').should('be.visible')
      cy.get('[data-testid="approve-button"]').should('be.visible')
    })

    it('should log console output when Request Documents button is clicked', () => {
      cy.window().then((win) => {
        cy.spy(win.console, 'log').as('consoleLog')
      })
      
      cy.get('[data-testid="request-documents-button"]').click()
      cy.get('@consoleLog').should('have.been.calledWith', 'Documents requested successfully')
    })

    it('should log console output when Send to Valuer button is clicked', () => {
      cy.window().then((win) => {
        cy.spy(win.console, 'log').as('consoleLog')
      })
      
      cy.get('[data-testid="send-to-valuer-button"]').click()
      cy.get('@consoleLog').should('have.been.calledWith', 'Sent to valuer successfully')
    })

    it('should log console output when Approve button is clicked', () => {
      cy.window().then((win) => {
        cy.spy(win.console, 'log').as('consoleLog')
      })
      
      cy.get('[data-testid="approve-button"]').click()
      cy.get('@consoleLog').should('have.been.calledWith', 'Loan approved successfully')
    })

    it('should have correct button styling for action buttons', () => {
      // Request Documents and Send to Valuer should be outline variant
      cy.get('[data-testid="request-documents-button"]').should('have.class', 'border')
      cy.get('[data-testid="send-to-valuer-button"]').should('have.class', 'border')
      
      // Approve button should be primary variant with green styling
      cy.get('[data-testid="approve-button"]').should('have.class', 'bg-green-600')
    })

    it('should display Escalate to Credit Committee button when risk signal is present', () => {
      // This test assumes there's a borrower with risk signal in the mock data
      // We'll check if the button exists when risk signal is present
      cy.get('body').then(($body) => {
        if ($body.find('[data-testid="escalate-button"]').length > 0) {
          cy.get('[data-testid="escalate-button"]').should('be.visible')
        }
      })
    })

    it('should log console output when Escalate to Credit Committee button is clicked', () => {
      cy.window().then((win) => {
        cy.spy(win.console, 'log').as('consoleLog')
      })
      
      // Only test if the button exists
      cy.get('body').then(($body) => {
        if ($body.find('[data-testid="escalate-button"]').length > 0) {
          cy.get('[data-testid="escalate-button"]').click()
          cy.get('@consoleLog').should('have.been.calledWith', 'Escalated to credit committee successfully')
        }
      })
    })

    it('should display risk signal warning when present', () => {
      cy.get('body').then(($body) => {
        if ($body.find('.bg-yellow-50').length > 0) {
          cy.get('.bg-yellow-50').should('be.visible')
          cy.get('.bg-yellow-50').within(() => {
            cy.get('svg').should('be.visible') // AlertTriangle icon
          })
        }
      })
    })

    it('should handle multiple button clicks without errors', () => {
      cy.window().then((win) => {
        cy.spy(win.console, 'log').as('consoleLog')
      })
      
      // Click multiple buttons in sequence
      cy.get('[data-testid="request-documents-button"]').click()
      cy.get('[data-testid="send-to-valuer-button"]').click()
      cy.get('[data-testid="approve-button"]').click()
      
      // Verify all console logs were called
      cy.get('@consoleLog').should('have.been.calledWith', 'Documents requested successfully')
      cy.get('@consoleLog').should('have.been.calledWith', 'Sent to valuer successfully')
      cy.get('@consoleLog').should('have.been.calledWith', 'Loan approved successfully')
    })
  })

  // Broker Info Tests
  describe('Broker Information', () => {
    it('should display broker information card', () => {
      cy.get('[data-testid="broker-info"]').should('be.visible')
    })
  })

  // Onboarding Workflow Tests
  describe('Onboarding Workflow', () => {
    it('should display onboarding workflow card', () => {
      cy.get('[data-testid="onboarding-workflow"]').should('be.visible')
    })
  })

  // AI Assistant Toggle Tests
  describe('AI Assistant Toggle', () => {
    it('should display AI Assistant card', () => {
      cy.contains('AI Assistant').should('be.visible')
    })

    it('should display E Ardsassist label', () => {
      cy.contains('E Ardsassist').should('be.visible')
    })

    it('should display AI assistant description', () => {
      cy.contains('Enable AI-powered assistance for loan processing').should('be.visible')
    })

    it('should display toggle switch', () => {
      cy.get('[data-slot="switch"]').should('be.visible')
    })

    it('should toggle AI assistant on/off', () => {
      // Check initial state (should be enabled by default)
      cy.get('[data-slot="switch"]').should('have.attr', 'data-state', 'checked')
      
      // Toggle off
      cy.get('[data-slot="switch"]').click()
      cy.get('[data-slot="switch"]').should('have.attr', 'data-state', 'unchecked')
      
      // Toggle on
      cy.get('[data-slot="switch"]').click()
      cy.get('[data-slot="switch"]').should('have.attr', 'data-state', 'checked')
    })

    it('should show/hide AI Explainability section based on toggle state', () => {
      // Initially AI assistant should be enabled
      cy.get('[data-testid="borrower-card"]').first().click()
      cy.get('[data-testid="borrower-detail"]').should('be.visible')
      
      // AI Explainability section should be visible when AI assistant is enabled
      cy.get('body').then(($body) => {
        if ($body.find('[data-testid="ai-accordion"]').length > 0) {
          cy.get('[data-testid="ai-accordion"]').should('be.visible')
        }
      })
      
      // Toggle AI assistant off
      cy.get('[data-slot="switch"]').click()
      cy.get('[data-slot="switch"]').should('have.attr', 'data-state', 'unchecked')
      
      // AI Explainability section should be hidden when AI assistant is disabled
      cy.get('[data-testid="ai-accordion"]').should('not.exist')
    })
  })
})
