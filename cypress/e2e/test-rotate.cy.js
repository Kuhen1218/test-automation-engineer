describe('Create Product', () => {
  it('Create Product with invalid input', () => {
    cy.visit('http://localhost:4200/')
    cy.get(':nth-child(1) > .nav-link').click()         //Empty all field
    cy.get('.create-button-container > .btn').click()
    cy.get('.btn').click()

    cy.get(':nth-child(1) > .nav-link').click()
    cy.get('.create-button-container > .btn').click()      //Empty one of the field (Product price)
    cy.get('#product-name').type('Green Apple')
    cy.get('#product-description').type('Sweet and Sour')
    cy.get('.btn').click()

    cy.get(':nth-child(1) > .nav-link').click()
    cy.get('.create-button-container > .btn').click()
    cy.get('#product-name').type('Green Apple')
    cy.get('#product-description').type('Sweet and Sour')
    cy.get('#product-price').type('abc@!&*')              //Enter word/symbols in Product Price field 
    cy.get('.btn').click()
  })

  it('Create Duplicate Poduct', () => {
    cy.visit('http://localhost:4200/')
    cy.get(':nth-child(1) > .nav-link').click()
    cy.get('.create-button-container > .btn').click()
    cy.get('#product-name').type('Red Apple')
    cy.get('#product-description').type('Sweet and juicy red apples.')
    cy.get('#product-price').type('5')
    cy.get('.btn').click()
    cy.get('#error-message').should('exist');     //System supposed to show error message and unable to create duplicate product.
  })

  it('Create Product with valid input', () => {
    cy.visit('http://localhost:4200/')
    cy.get(':nth-child(1) > .nav-link').click()
    cy.get('.create-button-container > .btn').click()
    cy.get('#product-name').type('Green Apple')
    cy.get('#product-description').type('Sweet and Sour')     //Valid input 
    cy.get('#product-price').type('8')
    cy.get('.btn').click()

  })
})

describe('Edit Product', () => {
  it('Edit Product with invalid input', () => {
    cy.visit('http://localhost:4200/')
    cy.get(':nth-child(1) > .nav-link').click()
    cy.get(':nth-child(1) > .card-body > .button-container > .btn-primary').click()
    cy.get('#product-name').clear()
    cy.get('#product-description').clear()     // Empty all field
    cy.get('#product-price').clear()
    cy.get('.btn').click()

    cy.get(':nth-child(1) > .nav-link').click()
    cy.get(':nth-child(1) > .card-body > .button-container > .btn-primary').click()
    cy.get('#product-name').clear().type('Grape Juice')
    cy.get('#product-description').clear()             //Empty one of the field (Product description)
    cy.get('#product-price').clear().type('7')
    cy.get('.btn').click()

    cy.get(':nth-child(1) > .nav-link').click()
    cy.get(':nth-child(1) > .card-body > .button-container > .btn-primary').click()
    cy.get('#product-name').clear().type('Grape Juice')
    cy.get('#product-description').clear().type('Sweet and Yummy')
    cy.get('#product-price').clear().type('abcd!@#$')              //Enter word/symbols in Product Price field
    cy.get('.btn').click()
  })


  it('Edit into Duplicate Product', () => {
    cy.visit('http://localhost:4200/')
    cy.get(':nth-child(1) > .nav-link').click()
    cy.get(':nth-child(2) > .card-body > .button-container > .btn-primary').click()
    cy.get('#product-name').clear().type('Grape Juice')
    cy.get('#product-description').clear().type('Sweet and Yummy')
    cy.get('#product-price').clear().type('7')
    cy.get('.btn').click()
    cy.get('#error-message').should('exist');    //System supposed to show error message and unable to create duplicate product.
  })

  it('Edit Product with valid input', () => {
    cy.visit('http://localhost:4200/')
    cy.get(':nth-child(1) > .nav-link').click()
    cy.get(':nth-child(2) > .card-body > .button-container > .btn-primary').click()
    cy.get('#product-name').clear().type('Honeydew')
    cy.get('#product-description').clear().type('Taste like honey')     // Valid input
    cy.get('#product-price').clear().type('8')
    cy.get('.btn').click()
  })
})

describe('Delete Product', () => {
  it('Delete Product', () => {                   //Delete product
    cy.visit('http://localhost:4200/')
    cy.get(':nth-child(1) > .nav-link').click()
    cy.get(':nth-child(20) > .card-body > .button-container > .btn-danger')
  })
})

describe('Order Product', () => {
  it('Order Product with invalid quantity input', () => {
    cy.visit('http://localhost:4200/')                      //Empty quantity field
    cy.get(':nth-child(1) > .nav-link').click()
    cy.get(':nth-child(1) > .card-body > .button-container > .btn-success').click()
    cy.get('.btn').click()


    cy.get(':nth-child(1) > .nav-link').click()
    cy.get(':nth-child(1) > .card-body > .button-container > .btn-success').click()
    cy.get('#product-quantity').type('123456789')
    cy.get('.btn').click()
    cy.get('#error-message').should('exist');    //System supposed to only allow minimal digit and show error 
  })

  it('Order Product with valid quantity', () => {
    cy.visit('http://localhost:4200/')
    cy.get(':nth-child(1) > .nav-link').click()    // Valid input
    cy.get(':nth-child(3) > .card-body > .button-container > .btn-success').click()
    cy.get('#product-quantity').type('10')
    cy.get('.btn').click()
  })
})

describe('Delete Order', () => {
  it('Delete Order', () => {
    cy.visit('http://localhost:4200/')          //Delete order
    cy.get(':nth-child(1) > .nav-link').click()
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get(':nth-child(1) > :nth-child(7) > .btn').click()
  })
})
