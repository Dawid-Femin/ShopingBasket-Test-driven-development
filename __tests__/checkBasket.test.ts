import { checkBasket } from '../lib/shoppingBasket';

describe('checkBasket', () => {
    test('Return 0 if basket is empty', () => {
        expect(checkBasket([])).toBe(0)
    });
});