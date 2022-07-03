import { removeProduct } from '../lib/shoppingBasket';

describe('removeProduct', () => {
    test('Remove product id = 0', () => {
        expect(products).toEqual(products.filter((product) => product.id !== 0));
    });
});