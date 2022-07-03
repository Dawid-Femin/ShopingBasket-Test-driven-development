import { removeProduct } from '../lib/shoppingBasket';
import { stockRoom } from '../lib/shoppingBasket';


let products = stockRoom();

products = removeProduct(products, 0);

describe("removeProduct", () => {
    it("Remove product id = 0", () => {
      expect(products).toEqual(products.filter((product) => product.id !== 0));
    });
  }); 