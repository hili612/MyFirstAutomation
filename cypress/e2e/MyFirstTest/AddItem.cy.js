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

    productName = GetBambaProductName()
    productPrice = GetBambaProductPrice()
    productImage = GetBambaProductName()
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
  })
})