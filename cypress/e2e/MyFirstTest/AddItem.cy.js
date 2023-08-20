import './HomePage.cy';
import './CartPage.cy';

describe("home ", () => {

  beforeEach(() => {
    cy.GoToHomePage()
  })

  it('Add Bamba to cart', () => {
    //Variable Defination
    let productName;
    let productPrice;
    let productImage;
    const numberOfProducts = '1';

    //Code Section 

    cy.BambaProductName() //Get product name
    .should('exist')
    .invoke('text')
    .then((text) => {
      productName = text;
      cy.log(text)
    })

    cy.BambaProductPrice() //Get product price
    .should('exist')
    .invoke('text')
    .then((text) => {
      productPrice = text;
      cy.log(text)
    })

    cy.BambaProductImage() //Get product image src
    .should('exist')
    .should('have.attr', 'src')
    // .invoke('attr', 'src')
    .then((src) => {
      productImage = src;
      cy.log(`Image Source: ${src}`)
    })
    .then(()=>{
      cy.AddBambaProduct()
      cy.GoToCartPage()
    })
    .then(()=>{
      cy.ValidateBambaProductName(productName)
      cy.ValidateBambaProductPrice(productPrice)
      cy.ValidateBambaProductImage(productImage)
      cy.ValidateNumberOfProducts(numberOfProducts)
    })
    
    // cy.BambaProductPrice()
    // cy.log(`Image Source: ${src}`);
    // })

    // cy.BambaProductImage()
    // .invoke('text')
    // .then((imageText) => {
    //   productImage = imageText;
    //   cy.log(imageText)
    // })
  })
})