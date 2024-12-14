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

}