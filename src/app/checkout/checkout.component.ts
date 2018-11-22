import {Component, OnInit} from '@angular/core';
import {InfoService} from '../info.service';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {TaxService} from '../tax.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {

  currentBasket: number;

  totalTax = 0;

  totalCost = 0;

  purchaseComplete: boolean;

  items: Product[];

  constructor(
    private infoService: InfoService,
    private productService: ProductService,
    private taxService: TaxService) {
  }

  ngOnInit() {
    this.getProducts();

    // ensure user start browsing this
    // route at the top of the page
    scrollTo(0, 0);

    // monitor which basket is currently selected for checkout
    this.infoService.basket.subscribe(basket => {
      this.currentBasket = basket;
    });

    this.purchaseComplete = false;
  }

  calculateCosts() {
    // produce a receipt that lists all the purchased items and their price (including tax)
    console.log('purchaseBasket()');

    const productList = [];

    // iterate each product in basket
    for (const item of this.items) {
      const _item = item;
      console.log('this _item ', _item);
      // prepare to calculate only the products in this basket
      if (_item.basket === this.currentBasket) {
        productList.push(_item);
      }
    }

    console.log(productList);

    // send the product through the TaxService calculator
    const receiptArray = this.taxService.calculateTax(productList);
    console.log('Updated productList = ', receiptArray);


    // iterate the receiptArray and update totals
    receiptArray.forEach(item => {

      this.totalCost = this.totalCost + parseInt(item.productCost);
      this.totalTax = this.totalTax + parseInt(item.productTax); // includes calculated tax

    });

  }

  getProducts(): void {
    this.productService.getProducts(undefined).subscribe(data => {
      // debugger;
      this.items = data['Items'];
      this.calculateCosts();
    });
  }

  purchasedBasket() {
    // show the print/save button options
    this.purchaseComplete = true;
  }

  printReceipt() {
    console.log('printReceipt()');

    const printWindow = window.open('', 'PRINT', 'height=400,width=600');

    printWindow.document.write('<html><head><title>' + document.title + '</title>');
    printWindow.document.write('</head><body >');
    printWindow.document.write('<h1>' + document.title + '</h1>');
    printWindow.document.write(document.getElementById('basketReceipt').innerHTML);
    printWindow.document.write('</body></html>');

    printWindow.document.close(); // necessary for IE >= 10
    printWindow.focus(); // necessary for IE >= 10*/

    printWindow.print();
    printWindow.close();

    return true;
  }

  saveReceipt() {
    console.log('saveReceipt()');
  }

}
