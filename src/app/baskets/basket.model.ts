export class BasketModel {

  constructor(
    public basket: number,
    public name: string,
    public description: string,
    public price: number,
    public tax: boolean,
    public importTax: boolean,
    public imagePath: string,
    public quantity: number) {

    this.basket = basket;
    this.name = name;
    this.description = description;
    this.price = price;
    this.tax = tax;
    this.importTax = importTax;
    this.imagePath = imagePath;
    this.quantity = quantity;
  }

}
