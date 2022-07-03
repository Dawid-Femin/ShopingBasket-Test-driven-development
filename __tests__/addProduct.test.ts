import { addProduct } from '../lib/shoppingBasket';

import { stockRoom } from '../lib/shoppingBasket';
import { toAdd } from '../lib/shoppingBasket';

const products = stockRoom();
const productToAdd = toAdd();

const newProducts: Array<{ id: number; category: string; productName: string; price: number }> =
  addProduct(products, productToAdd);

describe('addProduct', () => {
    test('Add product to basket', () => {
        expect(newProducts).toEqual([
            {
                id: 0,
                category: 'shoes',
                productName: 'Nike Air Max',
                price: 650,
            },
            {
                id: 1,
                category: 't-shirt',
                productName: 'Nike SB',
                price: 150,
            },
            productToAdd,
        ]);
    });
});