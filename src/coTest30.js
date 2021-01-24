class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      if (
        this.products[i].name != "Full Coverage" &&
        this.products[i].name != "Special Full Coverage"
      ) {
        if (this.products[i].price > 0) {
          if (this.products[i].name != "Mega Coverage") {
            //update price for products: medium, low, super sale
            this.products[i].price = this.products[i].price - 1;
          }
          if (this.products[i].name == "Super Sale") {
            //update price for super sale
            this.products[i].price = this.products[i].price - 1;
          }
        }
      } else {
        if (this.products[i].price < 50) {
          //update price for products:full and special full
          this.products[i].price = this.products[i].price + 1;
          if (this.products[i].name == "Special Full Coverage") {
            if (this.products[i].sellIn < 11) {
              //when it is equal or less 10 days
              if (this.products[i].price < 50) {
                this.products[i].price = this.products[i].price + 1;
              }
            }
            if (this.products[i].sellIn < 6) {
              //when it is equal or less 5 days
              if (this.products[i].price < 50) {
                this.products[i].price = this.products[i].price + 1;
              }
            }
          }
        }
      }

      //resting one day
      if (this.products[i].name != "Mega Coverage") {
        // exception mega resting one day
        this.products[i].sellIn = this.products[i].sellIn - 1;
      }
      if (this.products[i].sellIn < 0) {
        //once the expiration date passes, the price degrades 2 times faster
        if (this.products[i].name != "Full Coverage") {
          if (this.products[i].name != "Special Full Coverage") {
            //exception full and special
            if (this.products[i].price > 0) {
              if (this.products[i].name != "Mega Coverage") {
                //once the expiration date passes, the price degrades 2 times faster: medium, low y super
                this.products[i].price = this.products[i].price - 1;
              }
            }
          } else if (this.products[i].name == "Super Sale") {
            this.products[i].price =
              this.products[i].price - this.products[i].price * -1;
          }
          // price is zero
          else {
            this.products[i].price =
              this.products[i].price - this.products[i].price;
          }
        } else {
          if (this.products[i].price < 50) {
            //Full coverage once the expiration date passes the price degrades 2 times faster
            this.products[i].price = this.products[i].price + 1;
          }
        }
      }
    }
    //end for
    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance,
};
