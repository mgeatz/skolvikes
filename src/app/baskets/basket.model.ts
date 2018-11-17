export class BasketModel {
  public basket: number;
  public name: string;
  public description: string;
  public price: number;
  public tax: boolean;
  public importTax: boolean;
  public imagePath: string;
  public quantity: number;

  constructor(
    basket: number,
    name: string,
    description: string,
    price: number,
    tax: boolean,
    importTax: boolean,
    imagePath: string,
    quantity: number) {

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
