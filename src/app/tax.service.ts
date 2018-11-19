import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  constructor() {
  }

  /**
   * Taxable goods:
   *
   * "Basic Sales" tax = 10%
   *  - Applicable to: all goods except listed exclusions
   *  - EXLCUSIONS: [candy, popcorn, coffee]
   *
   * "Import Duty" tax = 5% (in addition to "Basic Sales" tax)
   *  - Applicable to: all goods except listed exclusions
   *  - EXCLUSIONS: []
   *
   * IMPORTANT NOTE:
   *  - Sales tax is rounded up to the nearest multiple of $0.05, by item
   */
  public calculateTax(productList) {

    productList.forEach(product => {
      const hasBasicSalesTax = product.tax,
        hasImportDutyTax = product.importTax,
        promotedPrice = product.price;

      let tempPrice = promotedPrice;
      let tempTax = 0;
      let basicSalesTax = 0;
      let importDutyTax = 0;

      if (hasBasicSalesTax === true) {
        basicSalesTax = promotedPrice * .1;

        tempTax = basicSalesTax;
        tempPrice = promotedPrice + basicSalesTax;

        product.basicTaxDetails = basicSalesTax;

        console.log(`${product.name} has basic sales tax = ${basicSalesTax}`);
      }

      if (hasImportDutyTax) {
        importDutyTax = tempPrice * .05;

        tempTax = tempTax + importDutyTax;
        tempPrice = tempPrice + tempTax;

        product.importTaxDetails = importDutyTax;

        console.log(`${product.name} has import duty tax = ${importDutyTax}`);
      }

      console.log(`total tax = ${tempTax}, and total cost = ${tempPrice}`);

      product.productTax = tempTax.toFixed(2);
      product.productCost = tempPrice.toFixed(2);
    });

    return productList;
  }

}
