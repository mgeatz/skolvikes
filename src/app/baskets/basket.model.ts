export class BasketModel {
  public name: string;
  public description: string;
  public price: number;
  public tax: boolean;
  public importTax: boolean;
  public imagePath: string;
  public quantity: number;

  constructor(name: string, description: string, price: number, tax: boolean, importTax: boolean, imagePath: string, quantity: number) {
    this.description = description;
    this.name = name;
    this.price = price;
    this.tax = tax;
    this.importTax = importTax;
    this.imagePath = imagePath;
    this.quantity = quantity;
  }
}
