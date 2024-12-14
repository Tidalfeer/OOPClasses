//Part1 Settup

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

//Part 2

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