const expect = require("chai").expect;

const coTest = require("../src/coTest");
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Alternative of a Coverage Report for 10 days", function () {
  it("should foo", function () {
    // const coTest = new CarInsurance([ new Product("foo", 0, 0) ]);
    // const products = coTest.updatePrice();
    // expect(products[0].name).equal("fixme");

    //alternative of a coverage report
    const coTest = new CarInsurance([
      new Product("Special Full Coverage", 15, 20),
    ]);
   
    const productPrinter = function (product) {
      console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
    };

    for (let i = 1; i <= 10; i += 1) {
      console.log(`Day ${i}`);
      console.log('name, sellIn, price');
      coTest.updatePrice().forEach(productPrinter);
      console.log('');
    }
  });
});
