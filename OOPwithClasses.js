//Part1-2 Settup

class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

//Methods 
//getTotalValue(): Returns the total value of the product in stock (price * quantity).
    getTotalValue() {
        return this.price * this.quantity;
    }

//toString(): Returns a string representation of the product (e.g., "Product: Apple, Price: $2.50, Quantity: 50").
    toString() {
        return `Product: ${this.name}, Price: ${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }

//Add a Static Method to the Product Class Method: applyDiscount(products, discount)

    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price = product.price * (1 - discount);
        });
    }

}
//Part 3
//Create Subclass

class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

//Added Expiration Date to String
    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}

//Part4
//Create a Store ClassProperties inventory (array)

class Store {
    constructor() {
        this.inventory = [];
    }


//addProduct(product): Adds a product to the inventory

addProduct(product) {
    this.inventory.push(product);
    }

//getInventoryValue(): Returns the total value of all products in the inventory

getInventoryValue() {
    return this.inventory.reduce((total, product) => total + product.getInventoryValue(), 0);
    }


//findProductByName(name): Finds a product by its name and returns it, or returns null if not found

findProductByName(name) {
    return this.inventory.find(product => product.name === name) || null;
    }
}

//Part 5
//Testing!!!!!


//Inventory

const product1 = new ProductProperties('Apple', 2.50, 50);
const product2 = new ProductProperties('Banana', 1.25, 45);
const product3 = new PerishableProductProperties('Milk', 3.75, 15, '2025-01-05');
const product4 = new PerishableProductProperties('Yogurt', 2.50, 25, '2025-01-15');
const product5 = new ProductProperties('Soda', 3.25, 50);
const product6 = new ProductProperties('Gummy Bears', 3.99, 500);

//New Store (part 4)

const store = new Store();

//Stocking store
//Products from inventory

store.addProduct(product1);
store.addProduct(product2);
store.addProduct(product3);
store.addProduct(product4);
store.addProduct(product5);
store.addProduct(product6);


//Testing getTotalValue(): Returns the total value of the product in stock (price * quantity)
console.log('Total Inventory Value before Discount: $' + store.getInventoryValue().toFixed(2));

//Testing applyDiscount(products, discount)
ProductProperties.applyDiscount(store.inventory, 0.15);

//Testing getTotalValue(): Returns the total value of the product in stock (price * quantity) AFTER Discount
console.log('Total Inventory Value after 15% Discount: $' + store.getInventoryValue().toFixed(2));


//Testing findProductByName(name): Finds a product by its name and returns it, or returns null if not found
const searchedProduct = store.findProductByName('Milk');
if (searchedProduct) {
  console.log('Found Product: ' + searchedProduct.toString());
} else {
  console.log('Product not found');
}